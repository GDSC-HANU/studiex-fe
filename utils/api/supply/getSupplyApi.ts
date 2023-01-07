import { getSupplys } from "~~/utils/fakeData"
import { Priority, Supply } from "~~/utils/model/supply/supply"
import { Operator, SupplyItemARE, SupplyItemBETWEEN, SupplyItemCustom, SupplyItemIS } from "~~/utils/model/supply/supplyItem"
import { Supplys } from "~~/utils/model/supply/supplys"
import axios from 'axios'
import useEnv from "~~/composables/env"
import { api } from "../general"

type SupplyResponse = {
  subjectName: string,
  supplyItems: {
    key: string,
    operator: "IS" | "ARE" | "BETWEEN",
    value: string | string[] | {
      minValue: number,
      maxValue: number
    },
    description: string
  }[],
  active: boolean,
  priority: "HIGH" | "MEDIUM" | "LOW",
  customSupplyItems: {
    key: string,
    value: string,
    description: string
  }[]
}[]

export default async function getSupplyApi(): Promise<Supplys> {
  try {
    // const response = api().get('/supply?studierId=63adbb676d4e597849cc2088')
    // console.log(response);
    
    const supplys: SupplyResponse = await getSupplys()
    return new Supplys(
      supplys.map(supply => {
        return new Supply(
          supply.subjectName,
          supply.active,
          Priority[supply.priority],
          supply.supplyItems.map(
            supplyItem => {
              return supplyItem.operator === Operator.IS ? new SupplyItemIS(
                supplyItem.key,
                supplyItem.value as string,
                supplyItem.description
              ) :
                supplyItem.operator === Operator.ARE ? new SupplyItemARE(
                  supplyItem.key,
                  supplyItem.value as string[],
                  supplyItem.description
                ) :
                  new SupplyItemBETWEEN(
                    supplyItem.key,
                    supplyItem.value as {
                      minValue: number,
                      maxValue: number
                    },
                    supplyItem.description
                  )
            }),
          supply.customSupplyItems.map(
            customSupplyItem => {
              return new SupplyItemCustom(
                customSupplyItem.key,
                customSupplyItem.value,
                customSupplyItem.description
              )
            })
        )
      })
    )
  } catch (error) {
    throw error
  }
}