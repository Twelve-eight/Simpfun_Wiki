import React from 'react';
import {Redirect} from '@docusaurus/router';

// Standalone tool page lives in static/MinecraftBat.html (self-contained HTML,
// not a React page). This route exists so /MinecraftBat resolves and the
// onBrokenLinks checker accepts links pointing at it.
export default function MinecraftBatRedirect(): React.JSX.Element {
  return <Redirect to="/MinecraftBat.html" />;
}
