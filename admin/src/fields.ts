import { createTextField, createNumberField } from 'tushan';

export const userFields = [
  createTextField('id', { label: 'ID' }),
  createTextField('username', { label: '用户名' }),
  createNumberField('balance', { label: '余额', list: { sort: true } }),
  createTextField('createTime', { label: 'Create Time', list: { sort: true } }),
  createTextField('password', { label: '密码', list: { hidden: true } })
];

export const payFields = [
  createTextField('id', { label: 'ID' }),
  createTextField('userId', { label: '用户Id' }),
  createNumberField('price', { label: '支付金额' }),
  createTextField('orderId', { label: 'orderId' }),
  createTextField('status', { label: '状态' }),
  createTextField('createTime', { label: 'Create Time', list: { sort: true } })
];

export const kbFields = [
  createTextField('id', { label: 'ID' }),
  createTextField('userId', { label: '所属用户' }),
  createTextField('name', { label: '知识库' }),
  createTextField('tags', { label: 'Tags' })
];

export const ModelFields = [
  createTextField('id', { label: 'ID' }),
  createTextField('userId', { label: '所属用户' }),
  createTextField('name', { label: '名字' }),
  createTextField('relatedKbs', { label: '引用的知识库' }),
  createTextField('searchMode', { label: '搜索模式' }),
  createTextField('systemPrompt', {
    label: '提示词',
    list: {
      width: 400
    }
  }),
  createTextField('temperature', { label: '温度' })
];

export const SystemFields = [
  createTextField('openAIKeys', { label: 'openAIKeys，逗号隔开' }),
  createTextField('openAITrainingKeys', { label: 'openAITrainingKeys' }),
  createTextField('gpt4Key', { label: 'gpt4Key' }),
  createTextField('vectorMaxProcess', { label: '向量最大进程' }),
  createTextField('qaMaxProcess', { label: 'qa最大进程' }),
  createTextField('pgIvfflatProbe', { label: 'pg 探针数量' }),
  createTextField('sensitiveCheck', { label: '敏感词校验(true,false)' })
];
