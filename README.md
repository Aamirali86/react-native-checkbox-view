
# react-native-checkbox-view

### Installation

`$ npm install react-native-checkbox-view --save`


## Usage
```javascript
import Checkbox from 'react-native-checkbox-view';
```  

## Demo
* [Example](https://github.com/Aamirali86/react-native-checkbox-view/tree/master/example)

![Screenshots](https://github.com/Aamirali86/react-native-checkbox-view/blob/master/screenshots/checkbox.gif)

## Getting started  

Add `react-native-checkbox-view` to your js file.

`import CheckBox from 'react-native-checkbox-view'`  

Inside your component's render method, use CheckBox:   

```javascript
  <Checkbox
    style={{padding: 5}}
    checkBoxColor={color}
    onClick={(data) => this.onClick(data)} />
```

Then you can use it like this:   


### Basic usage  

```javascript
 <Checkbox
    style={{padding: 5}}
    checkBoxColor={color}
    onClick={(data) => this.onClick(data)} />
 ```

### Custom CheckBox   

```javascript
  renderCheckBox(data, checkedImage, unCheckedImage) {
    return (
      <Checkbox
        style={{padding: 5}}
        checkedImage={checkedImage}
        unCheckedImage={unCheckedImage}
        onClick={(data) => this.onClick(data)} />
  }
```

## API


Props              | Type     | Optional | Default     | Description
----------------- | -------- | -------- | ----------- | -----------
style  | ViewPropTypes.style  | true |   |   Custom style checkbox
checkedImage  |  PropTypes.element  | true  | Default image | Custom  checked Image
unCheckedImage  |  PropTypes.element  | true  |  Default image  | Custom  unchecked Image
isChecked  |  PropTypes.bool |  false  |  false  | checkbox checked state
onClick   |  PropTypes.func.isRequired |  false  |  | callback  function
disabled  |  PropTypes.bool            | true  |  false | Disable the checkbox button
checkBoxColor | PropTypes.string | true |   | Tint color of the checkbox image (this props is for both checked and unchecked state)
checkedCheckBoxColor | PropTypes.string | true |   | Tint color of the checked state checkbox image (this prop will override value of `checkBoxColor` for checked state)
uncheckedCheckBoxColor | PropTypes.string | true |   | Tint color of the unchecked state checkbox image (this prop will override value of `checkBoxColor` for unchecked state)
