import utilStyles from '../styles/utils.module.css';

import Layout from '../components/layout';
import { FieldValues, useForm } from 'react-hook-form';
import FormLayout from './form-layout';
import clsx from 'clsx';
import { useRef } from 'react';

export default function AddProduct() {
  const formElRef = useRef<HTMLFormElement>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    shouldFocusError: true,
  });

  function onSubmit(fieldValues: FieldValues) {
    console.log(fieldValues);
    fetch('/api/product', {
      method: 'POST',
      body: JSON.stringify(fieldValues),
    })
      .then((e) => e.json())
      .then((e) => {
        console.log(e);
      })
      .catch(() => {
        alert('m');
      });
  }

  return (
    <Layout>
      <FormLayout ref={formElRef} onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <legend>Add product</legend>
          <label>
            Title:
            <input
              type="text"
              placeholder="Product title"
              spellCheck={true}
              className={clsx({
                [utilStyles.inputInvalid]: errors.title,
              })}
              {...register('title', { required: true })}
            />
          </label>

          <label>
            Desc:
            <textarea
              placeholder="Product desc(min length: 50)."
              spellCheck={true}
              className={clsx({
                [utilStyles.inputInvalid]: errors.desc,
              })}
              {...register('desc', {
                required: true,
                minLength: 50,
                maxLength: 350,
              })}
            ></textarea>
          </label>
          <label>
            Image link(Optional):
            <input
              type="url"
              placeholder="Product image"
              {...register('imageLink')}
            />
          </label>
          <label>
            Price(Optional):
            <input
              type="text"
              placeholder="Product price"
              {...register('price')}
            />
          </label>
          <label>
            External link(Optional):
            <input
              type="url"
              placeholder="Product external link"
              {...register('externalLink')}
            />
          </label>
          <div>
            <button type="reset" color="red">
              Reset product data
            </button>
            <button
              type="submit"
              color="green"
              onClick={handleSubmit(onSubmit)}
            >
              Save product
            </button>
          </div>
        </fieldset>
      </FormLayout>
    </Layout>
  );
}
