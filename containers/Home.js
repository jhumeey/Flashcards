import React, { useEffect } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { globalStyle } from '../utils/global-styles'
import { handleInitialData } from '../redux/shared'
import DeckItem from "../components/DeckItem";


const Home = ({ navigation, decks, fetchInitialData }) => {

  useEffect(() => {
    fetchInitialData()
  }, [])


  const viewDeck = (id) => {
    navigation.navigate('deck', {
      id: id,
    })
  }

  return (
    <View style={globalStyle.main}>
      <Text style={globalStyle.title}> My Decks </Text>
      {Object.keys(decks).map((id) => {
        return (
          <TouchableOpacity
            key={id}
            activeOpacity={0.8}
            onPress={() => viewDeck(id)}
          >
          <DeckItem id={id} />
          </TouchableOpacity>
        )
      })}
    </View>
  )
}

const mapStateToProps = ({ decks }) => {
  return {
    decks
  }
}

const mapDispatchToProps = dispatch =>  {
  return {
    fetchInitialData: () => dispatch(handleInitialData())
  }
}

Home.propTypes = {
  navigation: PropTypes.object,
  decks: PropTypes.object,
  fetchInitialData: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);