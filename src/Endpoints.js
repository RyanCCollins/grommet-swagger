import React, { Component } from 'react';
import { Anchor, Box, Button, Heading, Markdown, ResponsiveContext } from 'grommet';
import { Eject as UnloadIcon } from 'grommet-icons';
import { sanitizeForMarkdown } from './utils';
import Nav from './Nav';

export default class extends Component {
  render() {
    const {
      background, contextSearch, data, onUnload,
    } = this.props;
    return (
      <ResponsiveContext.Consumer>
        {(responsive = 'wide') => (
          <Box
            direction='row-responsive'
            responsive={true}
            justify='center'
            background={background || 'neutral-1'}
          >
            <Box
              basis={responsive === 'wide' ? 'xlarge' : undefined}
              flex='shrink'
              justify='between'
              pad='large'
              style={{ minWidth: 0 }}
            >
              <Box pad={{ bottom: 'xlarge' }}>
                <Heading level={1} margin='none'><strong>{data.info.title}</strong></Heading>
                <Box pad={{ vertical: 'large' }}>
                  <Markdown>
                    {sanitizeForMarkdown(data.info.description)}
                  </Markdown>
                </Box>
              </Box>
              <Box direction='row' justify='between' align='center'>
                <Anchor href={data.termsOfService} label='Terms of Service' />
                {
                  onUnload ?
                    <Button icon={<UnloadIcon color='light-1' />} onClick={onUnload} /> :
                    <span />
                }
              </Box>
            </Box>
            <Nav contextSearch={contextSearch} data={data} />
          </Box>)
        }
      </ResponsiveContext.Consumer>
    );
  }
}
