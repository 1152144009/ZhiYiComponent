/**
 * Created by guangqiang on 2017/12/12.
 */
import React, { Component } from 'react';
import RootToast from 'react-native-root-toast';
import { View, Text, Platform, StyleSheet,Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import RootSiblings from 'react-native-root-siblings';
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
const Toast = {

  toast: null,

  show: msg => {
    this.toast = RootToast.show(msg, {
      position: 0,
      duration: 1500
    })
  },
  showLong: msg => {
    this.toast = RootToast.show(msg, {
      position: 0,
      duration: 3000
    })
  },

  showSuccess: (msg, options) => {
    bling = new RootSiblings(
      <View style={styles.maskStyle}>
        <View style={styles.container}>
          <Icon name='check' size={50} color={'#fff'} />
          <Text style={styles.message}>{msg}</Text>
        </View>
      </View>

    )
    setTimeout(function () {
      bling.destroy()
      typeof options === 'function' ? options && options() : null
    }, 2000)
  },

  showLongSuccess: (msg, options) => {
    bling = new RootSiblings(
      <View style={styles.maskStyle}>
        <View style={styles.container}>
          <Icon name='check' size={50} color={'#fff'} />
          <Text style={styles.message}>{msg}</Text>
        </View>
      </View>

    )
    setTimeout(function () {
      bling.destroy()
      typeof options === 'function' ? options && options() : null
    }, 2500)
  },

  showWarning: (msg, options) => {
      bling = new RootSiblings(
        <View style={styles.maskStyle}>
          <View style={styles.container}>
            <Icon name='warning' size={50} color={'#fff'} />
            <Text style={styles.message}>{msg}</Text>
          </View>
        </View>
  
      )
      setTimeout(function () {
        bling.destroy()
        typeof options === 'function' ? options && options() : null
      }, 2000)
  },

  showError: (msg, options) => {
    bling = new RootSiblings(
      <View style={styles.maskStyle}>
        <View style={styles.container}>
          <Icon name='close' size={50} color={'#fff'} />
          <Text style={styles.message}>{msg}</Text>
        </View>
      </View>

    )
    setTimeout(function () {
      bling.destroy()
      typeof options === 'function' ? options && options() : null
    }, 2000)
  }

}

var styles = StyleSheet.create({
  container: {
    width: 140,
    height: 120,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  message: {
    color: '#fff',
    marginTop: 10,
    textAlign: 'center',
    lineHeight: 20,
  },
  maskStyle: {
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0)',
    width: width,
    height: height,
    alignItems: 'center',
    justifyContent: 'center'
  },
})

export { Toast }