import React from 'react'
import { Form } from 'semantic-ui-react'

const options =[]
    
// makeOptions = (props) => {
//     props.users.map(user => 
//         options.push({
//             text: user.name, 
//             value: user.id 
//         })
//     )
// }
    
// makeOptions(this.props);

const FormExampleSubcomponentId = () => (
  <Form>
    <Form.Group widths='equal'>
      <Form.Input
        fluid
        id='form-subcomponent-shorthand-input-first-name'
        label='Item Name'
        placeholder='Item name'
      />
      <Form.Input
        fluid
        id='form-subcomponent-shorthand-input-last-name'
        input="date"
        label='Purchased on:'
        placeholder='day'
      />
      <Form.Input
        fluid
        id='form-subcomponent-shorthand-input-last-name'
        input="date"
        label='Expires on:'
        placeholder='day'
      />
      <Form.Input
        fluid
        id='form-subcomponent-shorthand-input-last-name'
        input="number"
        label='Price:'
        placeholder='price'
      />
      {/* <Form.Field
        control={Select}
        label='User'
        options={options}
        placeholder='user'
        /> */}
    </Form.Group>
  </Form>
)

export default FormExampleSubcomponentId

// <Form.Field
// control={Select}
// label='Gender'
// options={options}
// placeholder='Gender'
// />

