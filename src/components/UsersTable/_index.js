import React from 'react'
import { Table , Segment , Button , Icon } from 'semantic-ui-react'

const RenderUsersTable = () => {
    return (
        <Segment>
        <Table singleLine basic={'very'} size={'small'} style={{padding:'20px 20px 0 20px'}}>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell width={'2'} textAlign={'center'} >User ID</Table.HeaderCell>
                    <Table.HeaderCell>Email</Table.HeaderCell>
                    <Table.HeaderCell>Registration Date</Table.HeaderCell>
                    <Table.HeaderCell textAlign={'center'}>Permission Type</Table.HeaderCell>
                    <Table.HeaderCell textAlign={'center'} >Delete User</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body >
            <Table.Row>
                <Table.Cell textAlign={'center'} >903887</Table.Cell>
                <Table.Cell ><a>jhlilk22@yahoo.com</a></Table.Cell>
                <Table.Cell>September 14, 2013</Table.Cell>
                <Table.Cell textAlign={'center'}>Admin</Table.Cell>
                <Table.Cell textAlign={'center'} ><Icon name={'x'}/></Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.Cell textAlign={'center'} >903887</Table.Cell>
                <Table.Cell>jamieharingonton@yahoo.com</Table.Cell>
                <Table.Cell>January 11, 2014</Table.Cell>
                <Table.Cell textAlign={'center'}>Customer</Table.Cell>
                <Table.Cell textAlign={'center'} ><Icon name={'x'}/></Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.Cell textAlign={'center'} >903887</Table.Cell>
                <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
                <Table.Cell>May 11, 2014</Table.Cell>
                <Table.Cell textAlign={'center'}>Customer</Table.Cell>
                <Table.Cell textAlign={'center'} ><Icon name={'x'}/></Table.Cell>
            </Table.Row>
            </Table.Body>
            <Table.Footer fullWidth>
            <Table.Row>
                <Table.HeaderCell colSpan='5'>
                <Button floated='right' icon labelPosition='left' size='small'>
                    <Icon name='user' /> Add User
                </Button>
                </Table.HeaderCell>
            </Table.Row>
            </Table.Footer>
        </Table>
        </Segment>
    )
}

export default RenderUsersTable