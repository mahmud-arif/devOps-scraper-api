import React from 'react';
import { Form, Input, Button } from 'antd';

import useAddUrlMutation from '../Hooks/useAddUrlMutation';

const FormInput = (props) => {
	const addUrl = useAddUrlMutation();
	const handleSubmit = (e) => {
		e.preventDefault();
		props.form.validateFields((err, values) => {
			if (!err) {
        addUrl({ url: values.url });
        props.form.resetFields()
			}
    });
	};

	const { getFieldDecorator } = props.form;

	return (
		<Form onSubmit={handleSubmit} className="login-form form">
			<Form.Item>
				{getFieldDecorator('url', {
					rules: [ { required: true, message: 'Please input url' } ]
				})(<Input placeholder="url" />)}
			</Form.Item>
			<Form.Item>
				<Button type="primary" htmlType="submit"  className="login-form-button">
					Add url
				</Button>
			</Form.Item>
		</Form>
	);
};

const WrappedInputForm = Form.create({ name: 'normal_login' })(FormInput);

export default WrappedInputForm;
