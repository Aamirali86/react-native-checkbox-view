
# react-native-checkbox

### Installation

`$ npm install react-native-checkbox --save`


## Usage
```javascript
import Checkbox from 'react-native-checkbox';
```  

## Demo
* [Example](https://github.com/Aamirali86/react-native-checkbox/tree/master/Example)

![Screenshots](https://github.com/Aamirali86/react-native-checkbox/blob/master/Example/Screenshots/Simulator%20Screen%20Shot%20-%20iPhone%20X%20-%202018-07-31%20at%2014.42.48.png)

## Getting started  

Add `react-native-checkbox` to your js file.   

`import CheckBox from 'react-native-check-box'`  

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
