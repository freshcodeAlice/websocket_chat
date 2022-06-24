import {Formik, Form, Field} from 'formik';
import * as ActionCreators from './actions/actionCreators';
import {useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { bindActionCreators } from 'redux';

const App = (props) => {
  const {messages, isFetching, error} = useSelector(state => state.chat);
  const dispatch = useDispatch();
  const {getMessagesRequest, createMessageRequest} = bindActionCreators(ActionCreators, dispatch);

  useEffect(()=> {
    getMessagesRequest();
  }, []);

  return (
    <div>
      {isFetching && <p> Loading....</p>}
      <ul>
        {messages.map((msg)=> (
          <li key={msg._id}>msg.text</li>
        ))}
      </ul>
      <Formik onSubmit={(values, formikBag) => {
          createMessageRequest(values);
          formikBag.setFieldValue('text', '');
      }} initialValues={{
        name: '',
        text: ''
      }}>
        <Form>
          <Field name='name' placeholder='name'/>
          <Field name='text' placeholder='text' />
          <button type='submit'>Send message</button>
        </Form>
      </Formik>
    </div>
  );
}

export default App;
