import React, { Component } from 'react';
import { Anchor, Box, Button, Heading, Markdown } from 'grommet';
import { Eject as UnloadIcon } from 'grommet-icons';
import { sanitizeForMarkdown } from './utils';
import WithNav from './WithNav';

export default class extends Component {
  render() {
    const {
      data, onUnload, termsOfService,
    } = this.props;
    return (
      <WithNav {...this.props}>
        <Box pad={{ bottom: 'xlarge' }}>
          <Heading level={1} margin='none'><strong>{data.info.title}</strong></Heading>
          <Box pad={{ vertical: 'large' }}>
            <Markdown
              components={{
                pre: {
                  props: {
                    style: { maxWidth: '100%', overflowX: 'auto' },
                  },
                },
              }}
            >
              {sanitizeForMarkdown(data.info.description)}
            </Markdown>
          </Box>
        </Box>
        {(termsOfService || (data.info && data.info.termsOfService)) &&
          <Box direction='row' justify='between' align='center'>
            <Anchor href={termsOfService || data.info.termsOfService} label='Terms of Service' />
            {
              onUnload ?
                <Button icon={<UnloadIcon color='light-1' />} onClick={onUnload} /> :
                <span />
            }
          </Box>
        }
      </WithNav>);
  }
}
