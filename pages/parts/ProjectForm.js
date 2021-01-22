import React, { useContext, useState } from 'react';
import _ from 'lodash';
import { ProjectContext } from '../../contexts/ProjectContextProvider';
import { View, Text, Button } from 'react-native';
import { TextInput } from 'react-native';
// import { Input, FormControl, InputLabel, Typography, Divider } from "@material-ui/core";

function ProjectForm() {
  const initialState = {
    name: '',
    coordinator: ''
  };

  const [state, dispatch] = useContext(ProjectContext);
  const [project, setProject] = useState(initialState);

  const onAddProject = () => {
    if (project.name && project.coordinator) {
      dispatch({
        type: 'ADD_PROJECT',
        payload: {
          id: _.uniqueId(10),
          name: project.name || 'n/a',
          coordinator: project.coordinator || 'n/a'
        }
      });
      setProject(initialState);
    }
  };

  return (
    <View>
      <Text className="el-margin">Adicionar Novo Projeto</Text>

      <View>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={(newName) => setProject({ ...project, name: newName })}
          value={project.name}
        />
      </View>

      <View>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={(newCoordinator) =>
            setProject({ ...project, coordinator: newCoordinator })
          }
          value={project.coordinator}
        />
      </View>

      <View className="btn-margin">
        <Button onPress={onAddProject} title="Novo Projeto">
          Novo Projeto
        </Button>
      </View>

      {/* <hr /> */}
    </View>
  );
}

export default ProjectForm;
