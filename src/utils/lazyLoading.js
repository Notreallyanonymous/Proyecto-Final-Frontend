import React from 'react';

export function lazyLoading(importFunc){
    return React.lazy(importFunc);
}