import React from 'react';
import ProjectForm from './parts/ProjectForm';
import ProjectTable from './parts/ProjectTable';
import { ProjectContextProvider } from '../contexts/ProjectContextProvider';
import { Text, View } from 'react-native';

function ProjectView() {
  return (
    <ProjectContextProvider>
      <View
        style={{
          backgroundColor: 'white',
          padding: 50,
          borderRadius: 25,
          innerWidth: 90
        }}
      >
        <Text variant="h5" align="center" style={{ marginBottom: 10 }}>
          Projetos
        </Text>
        <ProjectForm />
        <ProjectTable />
      </View>
    </ProjectContextProvider>
  );
}

export default ProjectView;
