import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Form, Input, Button } from 'antd';

const formInput = (props) => {
	const handleSubmit = (e) => {
		e.preventDefault();
		props.form.validateFields((err, values) => {
			if (!err) {
				props.mutate({
					variables: {
						url: values.url
					}
				});
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
				<Button type="primary" htmlType="submit" className="login-form-button">
					Add url
				</Button>
			</Form.Item>
		</Form>
	);
};

const mutation = gql`
	mutation createWebsite($url: String) {
		createWebsite(url: $url) {
			id
			url
			title
		}
	}
`;

const WrappedInputForm = Form.create({ name: 'normal_login' })(formInput);

export default graphql(mutation)(WrappedInputForm);
