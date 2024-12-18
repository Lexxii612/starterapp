import { observer } from "mobx-react-lite";
import React from "react";
import { Link } from "react-router-dom";
import { Container, Header, Segment, Button, Grid} from "semantic-ui-react";
import { useStore } from "../../app/stores/store";
import LoginForm from "../users/LoginForm";
import RegisterForm from "../users/registration/RegisterForm";
import '../../app/common/i18n/i18n.ts'
import { useTranslation } from "react-i18next";

export default observer(function HomePage() {
  const { userStore, modalStore } = useStore();
  //i18n.init();
  const { t } = useTranslation(['common', 'translation', "registrtion", "users"]);

  return (
    <Segment textAlign="center" vertical className="masthead">
      <Container text>
        {userStore.isLoggedIn ? (
          <>
            <Header as="h2" inverted content={t("welcome", {ns:'common'})} />
            <Button as={Link} to="/temp" size="huge" inverted>
              {t("goto", {ns:'common'})}
            </Button>
          </>
        ) : (
          <>
            <>
              <Grid stackable columns={2}>
                <Grid.Column >
                    <Segment className="form-background-color" >
                      <LoginForm />
                    </Segment>
                </Grid.Column>
                <Grid.Column >
                    <Segment className="fill-height form-background-color">
                    <Header as='h2' content={t("header", {ns:"registration"})} className='modal-text-color' textAlign='center' />

                      <Button
                        onClick={() => modalStore.openModal(<RegisterForm />)}
                        size="huge"
                        positive
                      >
                        {t("register", {ns: "common"})}
                      </Button>
                      <p>{t("footer", {ns:'registration'})}</p>
                    </Segment>
                </Grid.Column>
              </Grid>
              {/* <Button onClick={() => modalStore.openModal(<LoginForm />)} size='huge' inverted>
                                {t("login", {ns: "common"})}
                            </Button> */}
              {/* > */}
            </>
          </>
        )}
      </Container>
    </Segment>
  );
});
