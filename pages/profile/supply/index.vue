<template>
  <el-container class="container">
    <el-header class="flex justify-between mb-12" style="width=100vw">
      <h1 class="text-5xl font-semibold mb-10">Supply</h1>
      <NuxtLink to="/profile/supply/edit">
        <el-button class="mt-7" type="primary" :icon="EditPen">Edit</el-button>
      </NuxtLink>
    </el-header>
    <el-main style="width: 100%">
      <el-form
        :model="data"
        label-width="100"
        label-position="left"
        class="flex flex-col xl:flex-row xl:justify-between"
      >
        <div class="leftForm">
          <el-form-item label="Subject" size="large" class="w-80">
            English
          </el-form-item>

          <el-form-item label="English type" size="large" class="w-80">
            <ClientOnly>
              <el-select
                v-model="data.types[0]"
                placeholder="Select your type"
                disabled
              >
                <el-option
                  v-for="type in data.types"
                  :label="type"
                  :value="type"
                />
              </el-select>
            </ClientOnly>
          </el-form-item>

          <el-form-item label="Skills" size="large">
            <span class="flex-col">
              <el-checkbox :indeterminate="true" disabled
                >Check all</el-checkbox
              >
              <el-checkbox-group v-model="data.checkedSkills" disabled>
                <el-checkbox
                  v-for="phakeData in data.skills"
                  :key="phakeData"
                  :label="phakeData"
                  >{{ phakeData }}
                </el-checkbox>
              </el-checkbox-group>
            </span>
          </el-form-item>
        </div>

        <div class="rightForm">
          <el-form-item label="IELTS" size="large">
            <span class="flex flex-col">
              <div class="w-72 sm:w-96" v-for="ie in data.ielts">
                <span class="toeicSkillName">{{ ie.skillname }}</span>
                <ClientOnly>
                  <el-slider
                    style="
                      --el-slider-runway-bg-color: #fff;
                      --el-slider-stop-bg-color: #409eff;
                    "
                    v-model="ie.score"
                    :step="0.5"
                    :min="1"
                    :max="9"
                    show-input
                    show-stops
                    input-size="small"
                    disabled
                  />
                </ClientOnly>
              </div>
              <div class="w-72 sm:w-96">
                <span class="toeicSkillName">Overall</span>
                <el-progress
                  class="text-xl"
                  :text-inside="true"
                  :stroke-width="26"
                  :percentage="(getIEOverall / 9) * 100"
                >
                  {{ getIEOverall }} / 9.0
                </el-progress>
              </div>
            </span>
          </el-form-item>

          <el-form-item label="Study time" size="large" class="mt-12">
            <el-timeline>
              <el-timeline-item
                style="--el-timeline-node-color: #fff"
                v-for="(activity, index) in data.timelines"
                :key="index"
                :timestamp="activity.timestamp"
              >
                {{ activity.content }}
              </el-timeline-item>
            </el-timeline>
          </el-form-item>
        </div>
      </el-form>
    </el-main>
  </el-container>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { MoreFilled } from "@element-plus/icons-vue";
import {
  ElInput,
  ElContainer,
  ElHeader,
  ElMain,
  ElForm,
  ElFormItem,
  ElRadioGroup,
  ElRadio,
  ElButton,
  ElSwitch,
  ElSelect,
  ElOption,
  ElCheckbox,
  ElCheckboxGroup,
  ElSlider,
  ElTimeline,
  ElTimelineItem,
  ElRow,
  ElCol,
  ElProgress,
  ElIcon,
} from "element-plus";
import { over } from "lodash";
import { EditPen } from "@element-plus/icons-vue";

const input = ref("");

const subject = ref("VueJS");

let data = reactive({
  skills: ["Reading", "Writing", "Speaking", "Listening"],
  checkedSkills: ["Speaking", "Listening"],
  types: ["Technical English", "English communication"],
  ielts: [
    {
      skillname: "Listening",
      score: 8.5,
    },
    {
      skillname: "Speaking",
      score: 7.5,
    },
    {
      skillname: "Reading",
      score: 9.0,
    },
    {
      skillname: "Writing",
      score: 7.5,
    },
  ],
  timelines: [
    {
      content: "Learning English in school",
      timestamp: "2008-01-01",
      size: "large",
      type: "primary",
    },
    {
      content: "Learning English in English Center",
      timestamp: "2019-01-01",
      size: "large",
      type: "primary",
    },
    {
      content: "Prepare for IELTS contest",
      timestamp: "2020-01-01",
      size: "large",
      type: "primary",
    },
    {
      content: "Take IELTS contest",
      timestamp: "2022-01-01",
      size: "large",
      type: "primary",
    },
  ],
});

const getIEOverall = computed(() => {
  let total = 0;
  data.ielts.forEach((item) => {
    total += item.score;
  });
  const overall = Math.floor(total / 4);
  return overall;
});
</script>

<style scoped></style>
