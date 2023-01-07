import { getAllowedSupplys } from "~~/utils/fakeData"
import { AllowedSupplys } from "~~/utils/model/allowedSupply/allowedSupplys"
import { AllowedSupply } from "~~/utils/model/allowedSupply/allowedSupply"
import { AllowedSupplyItemONE_OF, AllowedSupplyItemMANY_OF, AllowedSupplyItemBETWEEN } from "~~/utils/model/allowedSupply/allowedSupplyItem"

type AllowedSupplyResponse = {
  subjectName: string,
  allowedSupplyItems: {
    key: string,
    required: boolean
    operator: "ONE_OF" | "MANY_OF" | "BETWEEN",
    value: string | string[] | {
      minValue: number,
      maxValue: number,
      difference: number
    },
  }[]
}[]

export default async function getAllowedSupplyApi(): Promise<AllowedSupplys> {
  try {
    const allowedSupplys: AllowedSupplyResponse = await getAllowedSupplys()
    return new AllowedSupplys(
      allowedSupplys.map(allowedSupply => {
        return new AllowedSupply(
          allowedSupply.subjectName,
          allowedSupply.allowedSupplyItems.map(
            allowedSupplyItem => {
              return allowedSupplyItem.operator === "ONE_OF" ? new AllowedSupplyItemONE_OF(
                allowedSupplyItem.key,
                allowedSupplyItem.value as string[],
                allowedSupplyItem.required
              ) :
                allowedSupplyItem.operator === "MANY_OF" ? new AllowedSupplyItemMANY_OF(
                  allowedSupplyItem.key,
                  allowedSupplyItem.value as string[],
                  allowedSupplyItem.required
                ) :
                  new AllowedSupplyItemBETWEEN(
                    allowedSupplyItem.key,
                    allowedSupplyItem.value as {
                      minValue: number,
                      maxValue: number,
                      difference: number
                    },
                    allowedSupplyItem.required
                  )
            })
        )
      })
    )
  } catch (error) {
    throw error
  }
}