import React from 'react';
import { rule } from '@jsonforms/examples';
import { JsonFormsDispatch, JsonFormsReduxContext } from '@jsonforms/react';
import { Provider } from 'react-redux';
import Demo from '../common/Demo';
import { createJsonFormsStore } from '../../common/store';

const RuleExample = () => {
  const store = createJsonFormsStore({
    data: rule.data,
    schema: rule.schema,
    uischema: rule.uischema
  });

  return (
    <Provider store={store}>
      <JsonFormsReduxContext>
        <Demo
          schema={rule.schema}
          uischema={rule.uischema}
          js={() => <JsonFormsDispatch />}
        />
      </JsonFormsReduxContext>
    </Provider>
  );
};

export default RuleExample;
