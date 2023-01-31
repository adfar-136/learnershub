import React from 'react'
import Counter from './components/ErrorBoundary.js/Counter'
import ErrorBoundary from './components/ErrorBoundary.js/ErrorBoundary'

export default function App() {
  return (
    <div>
      sdhgfsdgh
      <ErrorBoundary>
      <Counter/>
      <Counter/>
      </ErrorBoundary>
      <ErrorBoundary>
      <Counter/>
      </ErrorBoundary>
      <ErrorBoundary>
      <Counter/>
      </ErrorBoundary>
      <ErrorBoundary>
      <Counter/>
      </ErrorBoundary>
    </div>
  )
}
