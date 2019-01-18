import React from 'react';
import { Field, reduxForm } from 'redux-form';
import renderField from 'components/FormInputs/renderField';

const KafkaElements = () => (
  <div className="card">
    <div className="header">
      <h4>Kafka Elements</h4>
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
          <label className="control-label col-md-3">Domain name</label>
          <div className="col-md-9">
            <Field
              name="domainName"
              type="text"
              component={renderField} />
          </div>
        </div>

        <div className="form-group">
          <label className="control-label col-md-3">Bootstrap name</label>
          <div className="col-md-9">
            <Field
              name="bootstrapName"
              type="text"
              component={renderField} />
          </div>
        </div>

        <div className="form-group">
          <label className="control-label col-md-3">protocol name</label>
          <div className="col-md-9">
            <Field
              name="protocolName"
              type="text"
              component={renderField} />
          </div>
        </div>

        <div className="form-group">
          <label className="control-label col-md-3">Kafka name</label>
          <div className="col-md-9">
            <Field
              name="kafkaName"
              type="text"
              placeholder="placeholder"
              component={renderField} />
          </div>
        </div>

        <div className="form-group">
          <label className="control-label col-md-3">Hostname</label>
          <div className="col-md-9">
            <Field
              name="hostName"
              type="text"
              placeholder="This input is disabled"
              disabled={false}
              component={renderField} />
          </div>
        </div>

        <div className="form-group">
          <label className="control-label col-md-3">Formtting</label>
          <div className="col-md-9 checkbox-group">
            <Field
              name="checkbox1"
              type="checkbox"
              label="Reformat code"
              component={renderField} />

            <Field
              name="checkbox2"
              type="checkbox"
              label="Indentation"
              component={renderField} />

            {/* <Field
              name="radioGroup"
              type="radio"
              label="Male"
              value="male"
              component={renderField} />

            <Field
              name="radioGroup"
              type="radio"
              label="Female"
              value="female"
              component={renderField} /> */}
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
  form: 'kafkaElements'
})(KafkaElements);