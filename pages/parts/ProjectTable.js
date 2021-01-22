import React, { useContext } from 'react';
import { ProjectContext } from '../../contexts/ProjectContextProvider';
import { Text, View, Button, StyleSheet } from 'react-native';

/*

*/
const styles = StyleSheet.create({
  divTable: {
    width: '100%'
  },
  container: {
    marginTop: 50
  },
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30
  },
  red: {
    color: 'red'
  }
});

function ProjectTable() {
  const [state, dispatch] = useContext(ProjectContext);

  const delProject = (id) => {
    dispatch({
      type: 'DEL_PROJECT',
      payload: id
    });
  };

  const onRemoveProject = () => {
    if (typeof state.Projects[0] !== 'undefined') {
      delProject(state.Projects[0].id);
    } else {
      alert('Não existem mais projetos');
    }
  };

  return (
    <View>
      <Text variant="h6" className="title-margin">
        Listagem de Projetos
      </Text>
      <View>
        <View style={{ width: 300, display: 'flex', flexDirection: 'row' }}>
          <Text style={{ display: 'flex' }}>{'ID'}</Text>
          <Text style={{ display: 'flex' }}>{' ' + 'Nome' + ' '}</Text>
          <Text style={{ display: 'flex' }}>{'Coordenador'}</Text>
        </View>
        {state.Projects.map((Project) => (
          <View
            key={Project.id}
            style={{ width: 300, display: 'flex', flexDirection: 'row' }}
          >
            <Text style={{ display: 'flex' }}>{Project.id}</Text>
            <Text style={{ display: 'flex' }}>{' ' + Project.name + ' '}</Text>
            <Text style={{ display: 'flex' }}>{Project.coordinator}</Text>
          </View>
        ))}
      </View>
      <Button onPress={onRemoveProject} title="Remover">
        Remover
      </Button>
    </View>
  );
}

export default ProjectTable;
