import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const phrases = [
 "Grandes mudanças vêm com pequenos passos",
"Um sorriso pode abrir portas",
"A sorte favorece os ousados",
"Hoje é um ótimo dia para começar algo novo",
"Confie no processo, tudo dará certo",
"Alguém pensa em você com carinho neste momento",
"A sua energia atrai o que você vive",
"Não espere por oportunidades — crie-as",
"O que você procura está dentro de voce",
"A vida retribui a coragem",
"Algo incrível está prestes a acontecer",
"Seja gentil, inclusive com voc",
"Você é mais forte do que imagina",
"A resposta que você busca virá com o silêncio",
"Sua luz inspira outros",
"A gratidão transforma tudo",
"Um passo de cada vez ainda é progresso",
"Cultive o presente — ele é tudo o que você tem",
"Você está exatamente onde precisa estar",
"O universo conspira a seu favor",
"Permita-se recomeçar",
"Faça do seu medo a sua força",
"Pequenas atitudes mudam grandes destinos",
"O melhor está por vir",
"Você está prestes a viver algo inesquecível",
"Cada desafio é um convite ao crescimento",
"Confie na sua intuição",
"Sua jornada é única — honre-a",
"A vida recompensa quem não desiste",
"Encontre beleza no simples",
"O tempo certo é agora",
"O amor começa dentro de você",
"Pense grande. Você é capaz",
"Onde há fé, há caminho",
"Não há pressa para quem sabe onde quer chegar",
"A sorte bate para quem está acordado",
"Desafios são disfarces de oportunidades",
"Hoje é o dia perfeito para agradecer",
"Você cria o seu destino a cada escolha",
"Mesmo o menor gesto de bondade faz diferença",
"Quem planta paciência colhe sabedoria",
"Acredite no seu brilho",
"Sua história ainda está sendo escrita",
"Valorize quem caminha com você",
"A paz começa na sua mente",
"Dê espaço ao novo",
"Você é a mudança que espera no mundo",
"Algo bom está vindo na sua direção",
"Encare o desconhecido com confiança",
"Há luz até nos dias nublados",
];

export default function App() {
  const [image, setImage] = useState(require('./assets/cookie_closed.png'));
  const [fortune, setFortune] = useState('');
  const [broken, setBroken] = useState(false);

  const breakCookie = () => {
    const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
    setImage(require('./assets/cookie_open.png'));
    setFortune(randomPhrase);
    setBroken(true);
  };

  const resetCookie = () => {
    setImage(require('./assets/cookie_closed.png'));
    setFortune('');
    setBroken(false);
  };

  return (
    <View style={styles.container}>
      <Image source={image} style={styles.cookieImage} />
      {fortune !== '' && <Text style={styles.fortuneText}>"{fortune}"</Text>}
      <TouchableOpacity style={styles.button} onPress={broken ? resetCookie : breakCookie}>
        <Text style={styles.buttonText}>
          {broken ? 'Tentar Novamente' : 'Quebrar Biscoito'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF8DC',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  cookieImage: {
    width: 250,
    height: 250,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  fortuneText: {
    fontSize: 18,
    color: '#333',
    fontStyle: 'italic',
    textAlign: 'center',
    marginHorizontal: 10,
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#FFA500',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
