import { Col, Row, Select, Radio } from 'antd';
import React from 'react';
import { DROPDOWN_DATA, INPUT_PLACEHOLDER } from '../../../Common/Constants/StringConstants';

const { Option } = Select;
/**
 * 
 * Instead of using loop used DROPDOWN_DATA this could be used api data or can be any array of data in future.
 * Only replacing single Slide item will work then.
 */

export const SlideDropdown = ({ onPositionChange, slidePosition, slideCount, onSlideSelection }) => {
  const optionalProps = slideCount && { value: slideCount } || {}
  return <Row gutter={24}>
    <Col md={12} xs={24}>
      <Select {...optionalProps} placeholder={INPUT_PLACEHOLDER.SLIDE_DROP_DOWN} onChange={onSlideSelection}>
        {
          DROPDOWN_DATA.map(item => {
            return <Option value={item.value}>{item.value}</Option>
          })
        }
      </Select>
    </Col>
    <Col md={12} xs={24}>
      <Radio.Group
        onChange={onPositionChange}
        value={slidePosition}
        style={{ marginBottom: 8 }}
      >
        <Radio.Button value="top">Top</Radio.Button>
        <Radio.Button value="bottom">Bottom</Radio.Button>
        <Radio.Button value="left">Left</Radio.Button>
        <Radio.Button value="right">Right</Radio.Button>
      </Radio.Group>
    </Col>
  </Row>
}