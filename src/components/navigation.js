// routes
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from './landing';
import AboutMe from './aboutme';
import Contact from './contact';
import Project from './projects';
import Resume from './resume';

const Navigation = () => (
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route path="/aboutme" component={AboutMe} />
    <Route path="/contact" component={Contact} />
    <Route path="/projects" component={Project} />
    <Route path="/resume" component={Resume} />
  </Switch>
);

export default Navigation;
