import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Form, Segment, Header, Button, Icon } from 'semantic-ui-react'
import { companies } from '../../redux/actions';

class ProjectForm extends PureComponent {
  constructor(props) {
    super(props);
    this.printForm = this.printForm.bind(this)
  }

  printForm(event, data) {
    event.preventDefault();
    print();
  }

  render() {
    return <Form>
      <Button className="no-print" onClick={ this.printForm } icon>
        <Icon name='print' />
      </Button>
      { this.props.questions.map( question => {
          switch(question.type) {
            case 'MULTIPLE_CHOICE':
              return (
                <Segment vertical>
                  <Header as="h3">{ question.label }</Header>
                  { question.answers.map( answer => {
                    return (<Form.Radio label={ answer } checked={ this.props.form[question.questionSlug] ===answer } />)
                  } ) }
                </Segment>)
            default:
              return (
                <Segment vertical>
                  <Header as="h3">{ question.label }</Header>
                  { this.props.form[question.questionSlug].split(/\n/).map((string, index) => <p key={`${question.questionSlug}-${index}`}>{ string }</p>) }
                </Segment>
              )
          }
        })
      }
    </Form>;
  }
}

ProjectForm.propTypes = {
  form: PropTypes.object.isRequired,
  questions: PropTypes.array.isRequired,
}

export default ProjectForm;
