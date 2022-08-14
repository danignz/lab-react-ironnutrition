import React from 'react';
import { Input } from 'antd';

export default function Search({ onSearch }) {
  return (
    <div>
      <label>Search</label>
      <Input
        type="text"
        placeholder="Enter search query"
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}
