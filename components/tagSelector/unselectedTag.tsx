import React, { ReactElement } from 'react';
import style from 'styles/tagSelector.module.css';
import actionable from 'styles/actionable.module.css';
import { Tag } from '@eosc-perf/eosc-perf-client';

export function UnselectedTag(props: { tag: Tag; select: (tag: Tag) => void }): ReactElement {
    return (
        <div
            className={style.tagBadge + ' p-1 ' + actionable.actionable}
            onClick={() => props.select(props.tag)}
        >
            {props.tag.name}
        </div>
    );
}
