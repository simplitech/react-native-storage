import * as React from 'react'
import {StyleSheet, View, Text, TextInput, Button, Alert} from 'react-native'
import {User} from './User'
import {useState} from 'react'

export default function App() {
  const [name, setName] = useState<string>()
  const [surname, setSurname] = useState<string>()

  const user = new User()

  const persist = async () => {
    user.name = name
    user.surname = surname
    await user.save()
    Alert.alert('Restart the app')
  }

  const populate = async () => {
    await user.load()
    setName(user.name)
    setSurname(user.surname)
  }

  return (
    <View style={styles.container} onLayout={() => populate()}>
      <Text style={styles.label}>Your profile: </Text>

      <TextInput
        style={styles.input}
        placeholder={'Name'}
        value={name}
        onChangeText={(val) => setName(val)}
      />

      <TextInput
        style={styles.input}
        placeholder={'Surname'}
        value={surname}
        onChangeText={(val) => setSurname(val)}
      />

      <Button title={'Update your profile'} onPress={() => persist()} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    marginBottom: 16,
    height: 40,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
  },
  label: {
    fontSize: 24,
    marginBottom: 16,
  },
  response: {
    fontSize: 20,
    marginBottom: 64,
  },
})
