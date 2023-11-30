import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getOneItem, saveItem} from '../store/thunks';
import {Formik, Form, Field} from 'formik';
import {ValidationError} from '../../../components/ValidationError';
import {useNavigate, useParams} from 'react-router-dom';
import {Page} from '../../../components/Page';
import {Alert} from 'antd';
import SaveButton from '../components/SaveButton'
import { validationSchema } from '../utils/YupValidation/validationSchema'


export function EditForm() {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const {todoId} = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const editingTodo = useSelector((state) => state.todo.editingTodo);

  useEffect(() => {
    // Loading the todo data on component mount
    if (todoId) {
      dispatch(getOneItem(todoId));
    }
  }, [todoId]);

  const onSubmit = async (values, {resetForm}) => {
    const formTodo = {
      ...editingTodo,
      ...values,
    };

    setLoading(true);
    setError('');

    try {
      // Asynchronous saving
      await dispatch(saveItem(formTodo));
      resetForm(); // Resetting the form after successful save
      navigate('/todo/list'); // Navigating to the list page
    } catch (e) {
      setError(e.message); // Handling save errors
    } finally {
      setLoading(false); // Resetting loading state
    }
  };

  return (
      <Page title="Edit Form">
        <Formik
            enableReinitialize
            initialValues={editingTodo}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
          <Form>
            <div>
              <label htmlFor="title">Title</label>
              <Field type="text" name="title"/>
              <ValidationError name="title"/>
            </div>

            <div>
              <label htmlFor="done">Done</label>
              <Field type="checkbox" name="done"/>
              <ValidationError name="done"/>
            </div>

            <SaveButton loading={loading}/>
          </Form>
        </Formik>
        {error && <Alert message={error} type="error"/>}
      </Page>
  );
}

