import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from 'src/components/Icon';
import PhoneCallIcon from 'react-feather/dist/icons/phone-call';
import SendIcon from 'react-feather/dist/icons/send';
import UserIcon from 'react-feather/dist/icons/user';
import FacebookIcon from 'react-feather/dist/icons/facebook';
import classify from 'src/classify';
import defaultClasses from './footer.css';
import storeConfigDataQuery from '../../queries/getStoreConfigData.graphql';
import { Query } from 'react-apollo';

class Footer extends Component {
    static propTypes = {
        classes: PropTypes.shape({
            copyright: PropTypes.string,
            root: PropTypes.string,
            tile: PropTypes.string,
            tileBody: PropTypes.string,
            tileTitle: PropTypes.string,
            socialIcon: PropTypes.string
        })
    };

    render() {
        const { classes } = this.props;
        const year = new Date().getFullYear();
        return (
            <footer className={classes.root}>
              <ul className={classes.tile}>
                    <h3 className={classes.tileTitle}>
                       Contact us  </h3>
                    <li className={classes.titleBody}>
                        <Icon name= "phone-call"/>
                        <span> 076 716 25 74 </span>
                    </li>
                  
                    <li> <Icon name="send" />
                        <span>irina@nordicwebteam.se</span>
                    </li>
                    <br />
                    <li>Address: <br/>
                        <span>Kungsholmstorg 16, 
                      
                        112 21 Stockholm, Sweden</span>
                    </li>
                            <br />
                            
                    <a href="https://www.facebook.com/irina.kud"
                    >
                      <Icon name="facebook" />
                    </a>
                    <a href="https://www.instagram.com/call_me_ira/"
                    > 
                        <Icon name="instagram" />
                    </a>

                    <a href="https://github.com/Ira86"
                    >

                        <Icon name = "github" />
                    </a>

                </ul>

                <div className={classes.tile}>
                    <h2 className={classes.tileTitle}>
                        <span>Help Center</span>
                    </h2>
                    <p className={classes.tileBody}>
                        <span>Get answers from our community online.</span>
                           <a
                            className="Home-storySection-content-actions-action"
                            href="https://github.com/magento-research/pwa-studio"
                            >
                                <span>GitHub community</span>
                            </a>
                    </p>
                </div>
                <small className={classes.copyright}>
                   <Query query={storeConfigDataQuery}>
                        {({ loading, error, data }) => {
                            if (error) {
                                return (
                                    <span className={classes.fetchError}>
                                        Data Fetch Error:{' '}
                                        <pre>{error.message}</pre>
                                    </span>
                                );
                            }
                            if (loading) {
                                return (
                                    <span className={classes.fetchingData}>
                                        Fetching Data
                                    </span>
                                );
                            }
                            const storeName =
                                data.storeConfig.name || 'Magento';

                            return (
                                <span>
                                    ©{year} Made by Irina Kudlai. Built with {storeName} PWA Studio.
                                </span>
                            );
                    }}

                    </Query>
                </small>
            </footer>
        );
    }
}

export default classify(defaultClasses)(Footer);
