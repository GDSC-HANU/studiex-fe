const allowedSupplysFakeData = [
  {
    subjectName: 'English',
    allowedSupplyItems: [
      {
        key: 'Familiar',
        operator: 'ONE_OF',
        value: ['Native Language', 'Fluent Language', 'Entry-level language'],
        required: true
      },
      {
        key: 'IELTS',
        operator: 'ONE_OF',
        value: ['5.0', '5.5', '6.0', '6.5', '7.0', '7.5', '8.0', '8.5', '9.0', '9.5'],
        required: false
      },
      {
        key: 'Skills',
        operator: 'MANY_OF',
        value: ['Reading', 'Writing', 'Listening', 'Speaking'],
        required: false
      },
      {
        key: 'TOEFL',
        operator: 'BETWEEN',
        value: {
          minValue: 70,
          maxValue: 90,
          difference: 5
        },
        required: false
      },
      {
        key: 'PTE',
        operator: 'BETWEEN',
        value: {
          minValue: 10,
          maxValue: 90,
          difference: 5
        },
        required: false
      },
      {
        key: 'Cambridge English qualification',
        operator: 'ONE_OF',
        value: ['B2', 'C1', 'C2'],
        required: false
      }
    ]
  },
  {
    subjectName: 'Vietnamese',
    allowedSupplyItems: []
  },
  {
    subjectName: 'France',
    allowedSupplyItems: []
  },
  {
    subjectName: 'Japanese',
    allowedSupplyItems: []
  },
  {
    subjectName: 'Microsoft Office',
    allowedSupplyItems: []
  },
]

const supplysFakeData = [
  {
    subjectName: 'English',
    active: true,
    priority: 'HIGH',
    supplyItems: [
      {
        key: 'Familiar',
        operator: 'IS',
        value: 'Fluent Language',
        description: '# :sparkles: vue3-markdown-it demo :sparkles:\n# h1\n## h2\n### h3\n#### h4\n##### h5\n###### h6\n___\nnormal **bold** *italic* ~~middle line~~ [link](https://www.google.com) up^up^\n😮 😃 ✨ 😎\n> quote\n\n`inline code`\n```\nmultiple code\nsecond line\n```\n\nlam\n\n1. One\n2. Two\n3. Three\n\n- One\n- Two\n- Three\n  - Three One\n    - Three One One\n    - Three One Two\n  - Three Two\n- Four\n\n\n## Tables\nFirst Header | Second Header\n------------ | -------------\nContent from cell 1 | Content from cell 2\nContent from cell 1 | Content from cell 2\nContent from cell 1 | Content from cell 2\nContent from cell 1 | Content from cell 2\n---\n\n![pog](https://cdn.frankerfacez.com/emoticon/305343/4)\n\nA :fa-car: runs!\n\nA footnote reference,[^1] and another.[^longnote]\n\n[^1]: Here is the footnote.\n\n[^longnote]: Here\'s one with multiple blocks.\n\n    Subsequent paragraphs are indented to show that they\nbelong to the previous footnote.\n\n'
      },
      {
        key: 'IELTS',
        operator: 'IS',
        value: '6.0',
        description: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem '
      },
      {
        key: 'Skills',
        operator: 'ARE',
        value: ['Reading', 'Writing', 'Listening'],
        description: ''
      },
      {
        key: 'TOEFL',
        operator: 'BETWEEN',
        value: {
          minValue: 75,
          maxValue: 80
        },
        description: ''
      }
    ],
    customSupplyItems: [
      {
        key: 'Some Custom Supply',
        value: 'Some Custom Value',
        description: 'Some Custom Description bla bla bla'
      }
    ]
  },
  {
    subjectName: 'Vietnamese',
    active: true,
    priority: 'MEDIUM',
    supplyItems: [],
    customSupplyItems: []
  },
  {
    subjectName: 'France',
    active: false,
    priority: 'LOW',
    supplyItems: [],
    customSupplyItems: []
  }
]

export function getSupplys(): Promise<any> {
  return new Promise((resole, reject) => {
    setTimeout(() => {
      resole(supplysFakeData)
    }, 500)
  })
}

export function getAllowedSupplys(): Promise<any> {
  return new Promise((resole, reject) => {
    setTimeout(() => {
      resole(allowedSupplysFakeData)
    }, 500)
  })
}