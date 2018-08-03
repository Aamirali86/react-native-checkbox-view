
import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    ViewPropTypes,
    Image,
    TouchableHighlight
} from 'react-native';


export default class Checkbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
        isChecked: this.props.isChecked,
    }
  }

  static propTypes = {
    ...(ViewPropTypes || View.PropTypes),
    checkedImage: PropTypes.number,
    unCheckedImage: PropTypes.number,
    onClick: PropTypes.func.isRequired,
    isChecked: PropTypes.bool.isRequired,
    checkBoxColor: PropTypes.string,
    checkedCheckBoxColor: PropTypes.string,
    uncheckedCheckBoxColor: PropTypes.string,
    disabled: PropTypes.bool,
  }
  
  static defaultProps = {
    checkedImage: require('../example/img/check_box.png'),
    unCheckedImage: require('../example/img/check_box_blank.png'),
    isChecked: false,
    disabled: false
  }

  onClick() {
    const checkboxState = !this.state.isChecked;
    this.setState({ isChecked: !this.state.isChecked });
    this.props.onClick(checkboxState);
  }

  renderCheckBox() {
    var source = this.state.isChecked ? this.props.checkedImage : this.props.unCheckedImage

    return (
      <Image source={source} style={{tintColor: this.getTintColor()}} />
    );
  }

  getCheckedCheckBoxColor() {
    return this.props.checkedCheckBoxColor ? this.props.checkedCheckBoxColor : this.props.checkBoxColor
  }

  getUncheckedCheckBoxColor() {
    return this.props.uncheckedCheckBoxColor ? this.props.uncheckedCheckBoxColor : this.props.checkBoxColor
  }

  getTintColor() {
    return this.state.isChecked ? this.getCheckedCheckBoxColor() : this.getUncheckedCheckBoxColor()
  }

  render() {
    return (
      <TouchableHighlight
        style={this.props.style}
        onPress={() => this.onClick()}
        underlayColor='transparent'
        disabled={this.props.disabled}
      >
        <View style={styles.container}>
          {this.renderCheckBox()}
        </View>
      </TouchableHighlight>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  }
});
