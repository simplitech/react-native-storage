import {DataStorage} from '@simpli/react-native-storage'

export class User {
  name?: string
  surname?: string

  async save() {
    return await DataStorage.bind('@user').as(User).save(this)
  }

  async load() {
    return await DataStorage.bind('@user').as(this).load()
  }
}
