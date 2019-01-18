import React from 'react';
import { Field, reduxForm } from 'redux-form';
import renderField from 'components/FormInputs/renderField';

const AWSElements = () => (
  <div className="card">
    <div className="header">
      <h4>AWS Elements</h4>
    </div>
    <div className="content">
      <form className="form-horizontal">
        <div className="form-group">
          <label className="control-label col-md-3">API name</label>
          <div className="col-md-9">
            <Field
              name="apiName"
              type="text"
              component={renderField}
              helpText="A block of help text that breaks onto a new line." />
          </div>
        </div>

        <div className="form-group">
          <label className="control-label col-md-3">Stream name</label>
          <div className="col-md-9">
            <Field
              name="streamName"
              type="text"
              component={renderField} />
          </div>
        </div>

        <div className="form-group">
          <label className="control-label col-md-3">Number of Shades</label>
          <div className="col-md-9">
            <Field
              name="numShades"
              type="number"
              component={renderField} />
          </div>
        </div>

        <div className="form-group">
          <label className="control-label col-md-3">Formtting</label>
          <div className="col-md-9 checkbox-group">

              <button className="btn btn-success btn-fill btn-wd">Success</button>
              <button className="btn btn-danger btn-fill btn-wd">RESET</button>
          </div>
        </div>

        {/*<fieldset>
          <legend>Input variants</legend>
          <label className="col-sm-2 control-label">Custom Checkboxes & radios</label>
          <div className="col-sm-4 col-sm-offset-1 checkbox-group">
            <Field
              name="unchecked"
              type="checkbox"
              label="Unchecked"
              component={renderField} />

            <Field
              name="checked"
              type="checkbox"
              label="Checked"
              component={renderField} />

            <Field
              name="disabledUnchecked"
              type="checkbox"
              label="Disabled Unchecked"
              disabled
              component={renderField} />

            <Field
              name="disabledChecked"
              type="checkbox"
              label="Disabled Checked"
              disabled
              component={renderField} />
          </div>
          
           <div className="col-sm-5 radio-group">
            <Field
              name="radioOnOff"
              type="radio"
              label="Radio is off"
              value="off"
              component={renderField} />

            <Field
              name="radioOnOff"
              type="radio"
              label="Radio is on"
              value="on"
              component={renderField} />

            <Field
              name="radioDisabledOnOff"
              type="radio"
              label="Disabled Unchecked"
              value="off"
              disabled
              component={renderField} />

            <Field
              name="radioDisabledOnOff"
              type="radio"
              label="Disabled Checked"
              value="on"
              disabled
              component={renderField} />

          </div> 
        </fieldset>*/}
      </form>
    </div>
  </div>
);

export default reduxForm({
  form: 'awsElements'
})(AWSElements);