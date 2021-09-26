import { Component } from 'react';
import { Container, Icon, Menu, Table, Label, Search, Grid, Feed, Comment, Header, Form, Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      labelGambar: "Gambar Extras"
    }
  }


  render() {
    return (
      <div>
        <Container>
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell colSpan='2' textAlign='right'><Search placeholder="Cari Dokumen"></Search></Table.HeaderCell>
              </Table.Row>
              <Table.Row textAlign='center'>
                <Table.HeaderCell>Nama Document</Table.HeaderCell>
                <Table.HeaderCell>Jenis File</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  <Label ribbon>Paduan Belajar Javascript</Label>
                </Table.Cell>
                <Table.Cell textAlign='center'>
                  PDF
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  Paduan Belajar CSS
                </Table.Cell>
                <Table.Cell textAlign='center'>
                  PDF
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  Paduan Belajar React Js
                </Table.Cell>
                <Table.Cell textAlign='center'>
                  PDF
                </Table.Cell>
              </Table.Row>
            </Table.Body>
            <Table.Footer>
              <Table.Row>
                <Table.HeaderCell colSpan='2'>
                  <Menu floated='right' pagination>
                    <Menu.Item as='a' icon>
                      <Icon name='chevron left' />
                    </Menu.Item>
                    <Menu.Item as='a'>1</Menu.Item>
                    <Menu.Item as='a'>2</Menu.Item>
                    <Menu.Item as='a'>3</Menu.Item>
                    <Menu.Item as='a'>4</Menu.Item>
                    <Menu.Item as='a' icon>
                      <Icon name='chevron right' />
                    </Menu.Item>
                  </Menu>
                </Table.HeaderCell>
              </Table.Row>
            </Table.Footer>
          </Table>
          <Grid columns='2'>
            <Grid.Row>
              <Grid.Column>
                <Comment.Group threaded>
                  <Header as='h3'>
                    Comments
                  </Header>

                  <Comment>
                    <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/matt.jpg' />
                    <Comment.Content>
                      <Comment.Author as='a'>Satria</Comment.Author>
                      <Comment.Metadata>
                        <div>Today at 5.42 PM</div>
                      </Comment.Metadata>
                      <Comment.Text>
                        Hallo...!
                      </Comment.Text>
                      <Comment.Actions><a href='/#'>Reply</a></Comment.Actions>
                    </Comment.Content>
                  </Comment>

                  <Comment>
                    <Comment.Avatar as='a' src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
                    <Comment.Content>
                      <Comment.Author as='a'>Danang</Comment.Author>
                      <Comment.Metadata>
                        <span>Yesterday at 5:50 PM</span>
                      </Comment.Metadata>
                      <Comment.Text>
                        <p>Kerjakan Sesuatu Semampu kamu..</p>
                      </Comment.Text>
                      <Comment.Actions>
                        <a href='/#'>Reply</a>
                      </Comment.Actions>
                    </Comment.Content>

                    <Comment.Group>
                      <Comment>
                        <Comment.Avatar as='a' src='https://react.semantic-ui.com/images/avatar/small/jenny.jpg' />
                        <Comment.Content>
                          <Comment.Author as='a'>Ricky</Comment.Author>
                          <Comment.Metadata>
                            <span>Just now</span>
                          </Comment.Metadata>
                          <Comment.Text><p>Kmu Sekarang Dimana Danang ?</p></Comment.Text>
                          <Comment.Actions>
                            <a href='/#'>Reply</a>
                          </Comment.Actions>
                        </Comment.Content>
                      </Comment>
                    </Comment.Group>
                  </Comment>



                  <Comment>
                    <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/joe.jpg' />
                    <Comment.Content>
                      <Comment.Author as='a'>Joe</Comment.Author>
                      <Comment.Metadata>
                        1 days ago
                      </Comment.Metadata>
                      <Comment.Text>
                        Terimakasih Atas Nasihatnya
                      </Comment.Text>
                      <Comment.Actions>
                        <a href='/#'>Reply</a>
                      </Comment.Actions>
                    </Comment.Content>
                  </Comment>
                  <Form>
                    <Form.TextArea />
                    <Button content='Add Reply' labelPosition='left' icon='edit' primary />
                  </Form>
                </Comment.Group>
              </Grid.Column>
              <Grid.Column>
                <Feed>
                  <Feed.Event>
                    <Feed.Label>
                      <img src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' alt='profil' />
                    </Feed.Label>
                    <Feed.Content>
                      <Feed.Summary>
                        <Feed.User>Anton</Feed.User> Added you as a friend
                        <Feed.Date>3 Hour Ago</Feed.Date>
                      </Feed.Summary>
                      <Feed.Meta>
                        <Feed.Like>
                          <Icon name='like' />4 Likes
                        </Feed.Like>
                      </Feed.Meta>
                    </Feed.Content>
                  </Feed.Event>

                  <Feed.Event>
                    <Feed.Label>
                      <Icon name='pencil alternate' />
                    </Feed.Label>
                    <Feed.Content>
                      <Feed.Summary>
                        You submitted a new post to page
                        <Feed.Date>3 days ago</Feed.Date>
                      </Feed.Summary>
                      <Feed.Extra>
                        Saya Senang Balajar Bahasa Pemograman
                      </Feed.Extra>
                      <Feed.Meta>
                        <Feed.Like>
                          <Icon name='none' />11 Like
                        </Feed.Like>
                      </Feed.Meta>
                    </Feed.Content>
                  </Feed.Event>

                  <Feed.Event>
                    <Feed.Label>
                      <img src='https://react.semantic-ui.com/images/avatar/small/helen.jpg' alt='profil' />
                    </Feed.Label>
                    <Feed.Content>
                      <Feed.Date>
                        4 days ago
                      </Feed.Date>
                      <Feed.Summary>
                        David added 2 new Image
                      </Feed.Summary>
                      <Feed.Extra images>

                        <img src='https://s3-ap-southeast-1.amazonaws.com/niomic/img-v1/c_login_logo.png' alt={this.state.labelGambar} />

                        <img src='https://cdn-images-1.medium.com/max/1600/1*6kK9j74vyOmXYm1gN6ARhQ.png' alt={this.state.labelGambar} />

                      </Feed.Extra>
                      <Feed.Meta>
                        <Feed.Like>
                          <Icon name='like' />2 Likes
                        </Feed.Like>
                      </Feed.Meta>
                    </Feed.Content>
                  </Feed.Event>
                </Feed>
              </Grid.Column>
            </Grid.Row>
          </Grid>


        </Container>
      </div >
    )
  }
}

export default App;
