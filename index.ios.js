/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';


//
//class CText extends Component {
//  render() {
//    return (
//      <View style={{marginTop:50}}>
//        {/*从项目中加载*/}
//          <Text style={{color:'red'}}>第一个从本地项目中加载</Text>
//      <Image source={require('./Source/icon.jpeg')}/>
//
//
//
//        {/*混合开发加载APP中的图片资源*/}
//        <Text style={{color:'red'}}>加载APP中的图片资源</Text>
//        <Image style={{width:97,height:60,backgroundColor:'red'}} source ={require('image!ph')}/>
//
//        {/*加载网络图片*/}
//        <Text style={{color:'red'}}>加载网络图片</Text>
//        <Image style={{width:97,height:60,backgroundColor:'red'}} source ={{uri:'https://www.baidu.com/img/bd_logo1.png'}}/>
//
//
//        {/*背景图片*/}
//        <Text style={{color:'red'}}>背景图片</Text>
//        <Image style={{width:300,height:60,}} source ={{uri:'https://www.baidu.com/img/bd_logo1.png'}}>
//          <Text style={{color:'red',marginTop:20,}}>我下边有背景图片，你有吗？</Text>
//        </Image>
//      </View>
//    );
//  }
//}


//导入数据
var BageData = require('./BadgeData.json');
var Dimensions = require('Dimensions');
var{width,height} = Dimensions.get('window');

//定义一些全局变量
var cols = 3;
var boxW = 100;
var vMargin = (width - cols * boxW) /(cols + 1);
var yMargin = 25;




//定义全局的变量

class ImageDemo extends Component {
  render() {
    return (
        <View style={{marginTop:50,flexDirection:'row',flexWrap:'wrap'}}>

          {/*返回6个包*/}
          {this.renderAllBage()}
        </View>
    );
  }

  //返回所以的包
  //变量用{}表示
  renderAllBage(){
    //定义数组用来装所以的字组件
    var  allBage = []
    for(var i = 0;i<BageData.data.length;i++){
      //取出单独的数据对象
      var  bage = BageData.data[i];
      allBage.push(
          <View key={i} style={style1.outViewStyle} >

            <Image style={style1.imageStyle} source={{uri:bage.icon , isStatic:true}}/>
            <Text style={style1.titlesStyle}>{bage.title}</Text>
          </View>
      );
    }
    //返回数组
    return allBage;
  }
}
const style1 = StyleSheet.create({

  outViewStyle:{
backgroundColor:'red',
    alignItems:'center',
    width:boxW,
    height:boxW,
    marginLeft:vMargin,
    marginTop:yMargin,
  },
  imageStyle:{

    width:80,
    height:80,
  },
  titlesStyle:{

  }
});



AppRegistry.registerComponent('CText', () => ImageDemo);
