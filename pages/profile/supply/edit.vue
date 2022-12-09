<template>
  <el-container>
    <el-header class="flex justify-between mb-12" style="width=100vw">
      <h1 class="text-5xl font-semibold mb-10">Supply</h1>
      <el-form-item>
        <el-button class="mr-5 mt-1" type="primary" @click="handleUpdate"
          >Update
        </el-button>
        <NuxtLink to="./">
          <el-button>Cancel</el-button>
        </NuxtLink>
      </el-form-item>
    </el-header>
    <el-main style="width: 100%">
      <el-form
        :model="data"
        label-width="100"
        label-position="left"
        class="flex flex-col xl:flex-row xl:justify-between"
      >
        <div class="leftForm">
          <!-- Subject -->
          <el-form-item label="Subject" size="large" class="w-80">
            English
            <!-- <el-select
              v-model="data.subjects[0]"
              placeholder="Select your type"
              :disabled="isDisabled"
            >
              <el-option
                v-for="type in data.subjects"
                :label="type"
                :value="type"
              />
            </el-select> -->
          </el-form-item>

          <!-- English type -->
          <el-form-item label="Type" size="large" class="w-80">
            <el-select
              v-model="data.types[0]"
              placeholder="Select your type"
              :disabled="isDisabled"
            >
              <el-option
                v-for="type in data.types"
                :label="type"
                :value="type"
              />
            </el-select>
          </el-form-item>

          <!-- skills -->
          <el-form-item label="Skills" size="large">
            <span class="flex-col">
              <el-checkbox
                v-model="isCheckAll"
                :indeterminate="isIndeterminate"
                @change="handleCheckAllChange"
                :disabled="isDisabled"
                >Check all</el-checkbox
              >
              <el-checkbox-group
                v-model="data.checkedSkills"
                @change="handleCheckedSkills"
                :disabled="isDisabled"
              >
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
          <!-- Ielts -->
          <el-form-item label="IELTS" size="large">
            <span class="flex flex-col">
              <div class="w-72 sm:w-96" v-for="ie in data.ielts">
                <span>{{ ie.skillname }}</span>
                <el-slider
                  style="
                    --el-slider-runway-bg-color: #fff;
                    --el-slider-stop-bg-color: #409eff;
                  "
                  v-model="ie.score"
                  step="0.5"
                  :min="1"
                  :max="9"
                  show-input
                  show-stops
                  input-size="small"
                  :disabled="isDisabled"
                />
              </div>
              <div class="w-72 sm:w-96">
                <span>Overall</span>
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

          <!-- time study -->
          <el-form-item label="Timeline Study">
            <div :class="{ hidden: isDisabled }" class="flex flex-col w-64">
              <div class="picker">
                <label for="">Event name</label>
                <el-input class="mb-6" v-model="newData.content" />

                <label for="">Event Date</label>
                <el-date-picker
                  class="mb-6"
                  v-model="newData.timestamp"
                  type="date"
                  placeholder="Pick a date"
                  style="width: 100%"
                />
                <el-button class="mb-6" type="primary" @click="addTimeline">
                  Add
                </el-button>
              </div>
            </div>
          </el-form-item>

          <!-- timeline -->
          <el-form-item>
            <el-timeline>
              <el-timeline-item
                style="--el-timeline-node-color: #fff"
                v-for="(activity, index) in newData.timelines"
                :key="index"
                :type="activity.type"
                :size="activity.size"
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
  ElDatePicker,
} from "element-plus";
import { over } from "lodash";
import { EditPen } from "@element-plus/icons-vue";
import router from "nuxt/dist/pages/runtime/router";

const input = ref("");
let isDisabled = ref(false);
const isCheckAll = ref(false);
const isIndeterminate = ref(true);

const data = reactive({
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
      content: "Take IELTS contest",
      timestamp: "2022-01-01",
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
      content: "Learning English in English Center",
      timestamp: "2019-01-01",
      size: "large",
      type: "primary",
    },
    {
      content: "Learning English in school",
      timestamp: "2008-01-01",
      size: "large",
      type: "primary",
    },
  ],
});

const newData = reactive({
  type: "",
  content: "",
  timestamp: "",
  timelines: [],
  checkedSkills: data.checkedSkills,
  ietls: data.ielts,
});

const getIEOverall = computed(() => {
  let total = 0;
  data.ielts.forEach((item) => {
    total += item.score;
  });
  const overall = Math.round((total / 4.0) * 2) / 2;
  return overall;
});

function onSubmit() {
  isDisabled = ref(true);
}

function addTimeline() {
  const date = new Date(newData.timestamp);
  const timeline = {
    content: newData.content,
    timestamp: `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`,
    size: "large",
    type: "primary",
  };
  newData.timelines.push(timeline);
}

const handleCheckAllChange = (val: boolean) => {
  data.checkedSkills = val ? data.skills : [];
  isIndeterminate.value = false;
};

const handleCheckedSkills = (value: string[]) => {
  const checkedCount = value.length;
  isCheckAll.value = checkedCount === data.skills.length;
  isIndeterminate.value = checkedCount > 0 && checkedCount < data.skills.length;
};

const handleUpdate = () => {
  isDisabled = ref(true);
  console.log(isDisabled);
};
</script>

<style scoped></style>
