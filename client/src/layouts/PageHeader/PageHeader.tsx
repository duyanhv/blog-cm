import * as React from 'react';
import { Breadcrumb } from 'antd';
import './PageHeader.less';
import { RouteComponentProps } from 'react-router';
import { translate, TranslationFunction } from 'react-i18next';
import { I18nextProviderProps } from 'react-i18next/src/I18nextProvider';

interface PageHeaderProps
  extends RouteComponentProps<any>,
    I18nextProviderProps {
  t: TranslationFunction;
}

const PageHeader = (props: PageHeaderProps) => {
  return (
    <div className="page-header">
      <div className="breadcrumb">
        <Breadcrumb>
          {props.location.pathname
            .split('/')
            .map(item => (
              <Breadcrumb.Item key={item}>{props.t(item)}</Breadcrumb.Item>
            ))}
        </Breadcrumb>
      </div>
    </div>
  );
};

export default translate()(PageHeader);
