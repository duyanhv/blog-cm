import * as React from 'react';
import { Icon, Input } from 'antd';
import './CustomSearch.less';
import { TranslationFunction, translate } from 'react-i18next';
import { I18nextProviderProps } from 'react-i18next/src/I18nextProvider';

interface NestedCustomSearchProps extends I18nextProviderProps {
  t: TranslationFunction;
}

class NestedCustomSearch extends React.Component<NestedCustomSearchProps, any> {
  state: any = {
    searchMode: false,
  };

  focus: any;

  enterSearchMode = () => {
    this.setState({ searchMode: true }, () => {
      if (this.focus) {
        this.focus.focus();
      }
    });
  };

  leaveSearchMode = () => {
    this.setState({
      searchMode: false,
    });
  };

  render(): JSX.Element {
    return (
      <span className="custom-search" onClick={this.enterSearchMode}>
        <Icon type="search" />
        <Input
          className={this.state.searchMode ? 'show' : 'hide'}
          placeholder={`${this.props.t('CustomSearch.search')} ...`}
          onBlur={this.leaveSearchMode}
          ref={element => (this.focus = element)}
        />
      </span>
    );
  }
}

const CustomSearch = translate()(NestedCustomSearch);

export { CustomSearch };
