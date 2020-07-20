// @generated: @expo/next-adapter@2.1.20
import React from 'react';
import {
  StyleSheet,
  ImageBackground,
  Image,
  View,
  TextInput,
  Picker,
  Button,
} from 'react-native';
import { H1, P, H2, Section, Main, BR } from '@expo/html-elements';
import { useFonts } from 'expo-font';
import { PayPalButton } from 'react-paypal-button-v2';

const image = {
  uri: 'https://media-public.canva.com/MADGwOBbEnA/5/screen_2x.jpg',
};
const image2 = {
  uri: 'https://media-public.canva.com/MADGv2oOwE8/6/screen_2x.jpg',
};
const image3 = {
  uri: 'https://media-public.canva.com/MADQ5DKKIP4/1/screen_2x.jpg',
};
const image4 = {
  uri: 'https://media-public.canva.com/MADQ5FIDWrg/1/screen_2x.jpg',
};
const image5 = {
  uri: 'https://media-public.canva.com/MADGx_nMKRo/4/screen_2x.jpg',
};
const image6 = {
  uri: 'https://media-public.canva.com/MADGyH7NncY/4/screen_2x.jpg',
};
const image7 = {
  uri: 'https://media-public.canva.com/DTGS8/MAD1xhDTGS8/1/s3.jpg',
};
const youtubeLogo = {
  uri: 'https://media-public.canva.com/MADnBjGDdFs/3/screen.svg',
};
const instagramLogo = {
  uri: 'https://media-public.canva.com/PkCV4/MAB0QgPkCV4/2/s.svg',
};
const blackCircle = {
  uri: 'https://media-public.canva.com/MADi-X_RksE/4/screen.svg',
};
const blackUnderline = {
  uri: 'https://media-public.canva.com/MADi-eQvcjA/4/screen.svg',
};
export default function App() {
  const [loaded] = useFonts({
    BryndanWrite: require('../assets/BryndanWrite.woff'),
    LeagueGothic: require('../assets/LeagueGothic.woff'),
  });
  // const [email, changeEmail] = React.useState('Email');
  // const [name, changeName] = React.useState('Nombre');
  const [edad, changeEdad] = React.useState(0);
  const [estatura, changeEstatura] = React.useState(0);
  const [peso, changePeso] = React.useState(0);

  const [selectedValue, setSelectedValue] = React.useState('Hombre');
  const [alimentacion, setAlimentacion] = React.useState('Omnivoro');
  const [resultado, setResultado] = React.useState(0);
  const [tipo, setTipo] = React.useState(0);

  const onPressCalcular = () => {
    let result = 10 * peso + 6.25 * estatura - 5 * edad;
    if (selectedValue === 'Hombre') {
      result = result + 5;
      result = result * 1.4 * 0.75;
      setResultado(result);
    } else {
      result = result - 161;
      result = result * 1.4 * 0.75;
      setResultado(result);
    }

    if (result > 1000 && result < 1499) {
      if (alimentacion === 'Omnivoro') {
        setTipo(0);
      } else {
        setTipo(4);
      }
    }

    if (result > 1500 && result < 1799) {
      if (alimentacion === 'Omnivoro') {
        setTipo(1);
      } else {
        setTipo(5);
      }
    }

    if (result > 1800 && result < 2199) {
      if (alimentacion === 'Omnivoro') {
        setTipo(2);
      } else {
        setTipo(6);
      }
    }

    if (result > 2200) {
      if (alimentacion === 'Omnivoro') {
        setTipo(3);
      } else {
        setTipo(7);
      }
    }
  };

  if (!loaded) {
    return null;
  }
  return (
    <Main style={styles.container}>
      <ImageBackground
        source={image}
        style={styles.section}
        imageStyle={{ borderRadius: 6 }}
      >
        <H1 style={styles.title}>ANA SANTA FIT</H1>
        <P style={styles.subTitle}>
          Ser
          <ImageBackground source={blackCircle} style={styles.blackCircle}>
            <P>saludable</P>
          </ImageBackground>
          núnca fue tan
          <ImageBackground
            source={blackUnderline}
            style={[styles.blackUnderline]}
            imageStyle={{ marginTop: 80 }}
          >
            <P>fácil</P>
          </ImageBackground>
        </P>
      </ImageBackground>
      <ImageBackground
        source={image2}
        style={styles.section}
        imageStyle={{ borderRadius: 6 }}
      >
        <View style={styles.whiteFrame}>
          <H2 style={styles.titleNormal}>4 SEMANAS COMIENDO BIEN</H2>
          <P
            style={[
              styles.subTitle,
              {
                marginTop: 10,
                fontSize: 36,
                textAlign: 'center',
                lineHeight: 36,
              },
            ]}
          >
            La guía para cambiar tus hábitos
          </P>
        </View>
        <Section>
          <View
            style={[
              styles.whiteFrame,
              { marginHorizontal: 40, padding: 20, maxWidth: 786 },
            ]}
          >
            <P
              style={{
                fontSize: 20,
                textAlign: 'center',
                fontWeight: '500',
                color: 'rgb(84, 84, 84)',
                lineHeight: 25,
              }}
            >
              Es una guía semi-personalizada enfocada en perdida de peso
              (porcentaje de grasa corporal) No importa que tipo de alimentación
              haz llevado hasta éste momento, si haz intentado mil veces o si es
              tu primer intento de cambiar tus hábitos. Ésta guía te explica
              paso a paso como construir habitos saludables y duraderos sin
              sacrificar sabor ni tus comidas favoritas. Después de éstas 4
              semanas no solamente verás cambios impresionantes en tu físico,
              también te sentirás mejor, identificarás tus alimentos agresores,
              tendrás tablas de equivalencias y aprenderás a conocer tu cuerpo.
            </P>
          </View>
        </Section>
      </ImageBackground>
      <ImageBackground
        source={image3}
        style={styles.section}
        imageStyle={{ borderRadius: 6 }}
      >
        <View style={styles.whiteFrame}>
          <H2 style={styles.titleNormal}>QUÉ INCLUYE?</H2>
        </View>
        <Section>
          <View
            style={[
              styles.whiteFrame,
              { marginHorizontal: 40, padding: 20, maxWidth: 786 },
            ]}
          >
            <P
              style={{
                fontSize: 20,
                textAlign: 'center',
                fontWeight: '500',
                color: 'rgb(84, 84, 84)',
                lineHeight: 25,
                maxWidth: 786,
              }}
            >
              - Bases para construir hábitos saludables {'\n'}- Programa de
              alimentación semi-personalizado (vegano o omnívoro)
              {'\n'} - Listado de equivalencias
              {'\n'} - Entrenamiento para hacer en casa
              {'\n'} - Asesorias grupales 1 vez la semana (se contestan dudas)
              {'\n'} - Monitoreo por redes sociales 24/7
              {'\n'} - Premio a la mejor transformación y a la persona más
              activa en redes sociales
            </P>
          </View>
        </Section>
        <Section>
          <View style={[styles.whiteFrame, { marginHorizontal: 40 }]}>
            <P style={{ color: 'rgb(84, 84, 84)' }}>
              Si padeces alguna enfermedad, trastorno, síndrome o condición
              específica consulta a tu médico antes de realizar tu pago. Por
              ejemplo: Personas con diabetes, hipertensión, gastritis,
              hipotiroidismo, trastornos alimenticios, anemia, preeclampsia,
              diabetes gestacional o mujeres en embarazo o lactancia.
            </P>
          </View>
        </Section>
      </ImageBackground>
      <ImageBackground
        source={image4}
        style={[styles.section, { minHeight: 680 }]}
        imageStyle={{ borderRadius: 6 }}
      >
        {' '}
        <View style={styles.whiteFrame}>
          <H2 style={styles.titleNormal}>Descubre cuál es tu plan!</H2>
        </View>
        <View
          style={[
            styles.whiteFrame,
            {
              minWidth: 360,
              padding: 20,
              marginBottom: 40,
              minHeight: 505,
            },
          ]}
        >
          {!resultado ? (
            <Section>
              <P style={styles.formHeadingStyle}>Genero</P>
              <Picker
                selectedValue={selectedValue}
                style={{
                  height: 50,
                  padding: 10,
                  borderColor: '#ffc439',
                  borderWidth: 2,
                  borderRadius: 4,
                }}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedValue(itemValue)
                }
              >
                <Picker.Item label="Hombre" value="Hombre" />
                <Picker.Item label="Mujer" value="Mujer" />
              </Picker>
              <P style={styles.formHeadingStyle}>Edad</P>
              <TextInput
                style={{
                  height: 40,
                  padding: 10,
                  borderColor: '#ffc439',
                  borderWidth: 2,
                  borderRadius: 4,
                }}
                onChangeText={(text) => changeEdad(parseInt(text))}
                value={edad.toString()}
                keyboardType="numeric"
              />
              <P style={styles.formHeadingStyle}>Estatura en centímetros</P>
              <TextInput
                style={{
                  height: 40,
                  padding: 10,
                  borderColor: '#ffc439',
                  borderWidth: 2,
                  borderRadius: 4,
                }}
                onChangeText={(text) => changeEstatura(parseInt(text))}
                value={estatura.toString()}
                keyboardType="numeric"
              />
              <P style={styles.formHeadingStyle}>Peso en kilogramos</P>
              <TextInput
                style={{
                  height: 40,
                  padding: 10,
                  borderColor: '#ffc439',
                  borderWidth: 2,
                  borderRadius: 4,
                }}
                onChangeText={(text) => changePeso(parseInt(text))}
                value={peso.toString()}
                keyboardType="numeric"
              />
              <P style={styles.formHeadingStyle}>Tipo de alimentación</P>
              <Picker
                selectedValue={alimentacion}
                style={{
                  height: 50,
                  padding: 10,
                  borderColor: '#ffc439',
                  borderWidth: 2,
                  borderRadius: 4,
                }}
                onValueChange={(itemValue, itemIndex) =>
                  setAlimentacion(itemValue)
                }
              >
                <Picker.Item label="Omnivoro" value="Omnivoro" />
                <Picker.Item
                  label="Basado en plantas (vegano)"
                  value="Basado en plantas (vegano)"
                />
              </Picker>
              <View style={{ marginTop: 20, cursor: 'pointer' }}>
                <Button
                  onPress={onPressCalcular}
                  title="Calcular"
                  color="#ffc439"
                />
              </View>
            </Section>
          ) : (
            <Section>
              <View
                style={{
                  alignContent: 'center',
                  alignItems: 'center',
                  marginVertical: 20,
                }}
              >
                {tipo === 0 ? (
                  <View
                    style={[
                      styles.whiteFrame,
                      {
                        width: 240,
                        height: 180,
                        padding: 20,
                        margin: 10,
                        backgroundColor: 'white',
                      },
                    ]}
                  >
                    <H2 style={[styles.subTitle, styles.overrideSubTitle]}>
                      GUÍA A
                    </H2>
                    <P style={{ textAlign: 'center', margin: 0, padding: 0 }}>
                      Esta guía esta diseñada para personas con un requerimiento
                      calórico entre 1200 y 1500 calorias diarias.
                    </P>
                  </View>
                ) : null}

                {tipo === 1 ? (
                  <View
                    style={[
                      styles.whiteFrame,
                      {
                        width: 240,
                        height: 180,
                        padding: 20,
                        margin: 10,
                        backgroundColor: 'white',
                      },
                    ]}
                  >
                    <H2 style={[styles.subTitle, styles.overrideSubTitle]}>
                      GUÍA B
                    </H2>
                    <P style={{ textAlign: 'center' }}>
                      Esta guía esta diseñada para personas con un requerimiento
                      calórico entre 1500 y 1800 calorias diarias.
                    </P>
                  </View>
                ) : null}

                {tipo === 2 ? (
                  <View
                    style={[
                      styles.whiteFrame,
                      {
                        width: 240,
                        height: 180,
                        padding: 20,
                        margin: 10,
                        backgroundColor: 'white',
                      },
                    ]}
                  >
                    <H2 style={[styles.subTitle, styles.overrideSubTitle]}>
                      GUÍA C
                    </H2>
                    <P style={{ textAlign: 'center' }}>
                      Esta guía esta diseñada para personas con un requerimiento
                      calórico entre 1800 y 2199 calorias diarias.
                    </P>
                  </View>
                ) : null}

                {tipo === 3 ? (
                  <View
                    style={[
                      styles.whiteFrame,
                      {
                        width: 240,
                        height: 180,
                        padding: 20,
                        margin: 10,
                        backgroundColor: 'white',
                      },
                    ]}
                  >
                    <H2 style={[styles.subTitle, styles.overrideSubTitle]}>
                      GUÍA D
                    </H2>
                    <P style={{ textAlign: 'center' }}>
                      Esta guía esta diseñada para personas con un requerimiento
                      calórico entre 2200 y 2500 calorias diarias.
                    </P>
                  </View>
                ) : null}

                {tipo === 4 ? (
                  <View
                    style={[
                      styles.whiteFrame,
                      {
                        width: 240,
                        height: 180,
                        padding: 20,
                        margin: 10,
                        backgroundColor: 'white',
                      },
                    ]}
                  >
                    <H2 style={[styles.subTitle, styles.overrideSubTitle]}>
                      GUÍA E
                    </H2>
                    <P style={{ textAlign: 'center' }}>
                      Esta guía esta diseñada para personas con un requerimiento
                      calórico entre 1200 y 1500 calorias diarias.
                    </P>
                  </View>
                ) : null}

                {tipo === 5 ? (
                  <View
                    style={[
                      styles.whiteFrame,
                      {
                        width: 240,
                        height: 180,
                        padding: 20,
                        margin: 10,
                        backgroundColor: 'white',
                      },
                    ]}
                  >
                    <H2 style={[styles.subTitle, styles.overrideSubTitle]}>
                      GUÍA F
                    </H2>
                    <P style={{ textAlign: 'center' }}>
                      Esta guía esta diseñada para personas con un requerimiento
                      calórico entre 1500 y 1800 calorias diarias.
                    </P>
                  </View>
                ) : null}

                {tipo === 6 ? (
                  <View
                    style={[
                      styles.whiteFrame,
                      {
                        width: 240,
                        height: 180,
                        padding: 20,
                        margin: 10,
                        backgroundColor: 'white',
                      },
                    ]}
                  >
                    <H2 style={[styles.subTitle, styles.overrideSubTitle]}>
                      GUÍA G
                    </H2>
                    <P style={{ textAlign: 'center' }}>
                      Esta guía esta diseñada para personas con un requerimiento
                      calórico entre 1800 y 2199 calorias diarias.
                    </P>
                  </View>
                ) : null}

                {tipo === 7 ? (
                  <View
                    style={[
                      styles.whiteFrame,
                      {
                        width: 240,
                        height: 180,
                        padding: 20,
                        margin: 10,
                        backgroundColor: 'white',
                      },
                    ]}
                  >
                    <H2 style={[styles.subTitle, styles.overrideSubTitle]}>
                      GUÍA H
                    </H2>
                    <P style={{ textAlign: 'center' }}>
                      Esta guía esta diseñada para personas con un requerimiento
                      calórico entre 2200 y 2500 calorias diarias.
                    </P>
                  </View>
                ) : null}
              </View>
              <PayPalButton
                amount="20"
                onSuccess={() => {}}
                style={{ color: 'gold' }}
              />
            </Section>
          )}
        </View>
      </ImageBackground>
      <ImageBackground
        source={image6}
        style={styles.section}
        imageStyle={{ borderRadius: 6 }}
      >
        <View style={styles.whiteFrame}>
          <H2 style={styles.titleNormal}>Testimonios...</H2>
        </View>
      </ImageBackground>
      <ImageBackground
        source={image7}
        style={[
          styles.section,
          {
            alignItems: 'flex-end',
            paddingRight: 60,
            justifyContent: 'space-around',
          },
        ]}
        imageStyle={{ borderRadius: 6 }}
      >
        <H2
          style={[
            styles.titleNormal,
            {
              textAlign: 'right',
              fontSize: 60,
              marginTop: 30,
            },
          ]}
        >
          Síguenos en nuestras {'\n'}redes sociales
        </H2>
        <Section
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <View>
            <Image style={styles.igLogo} source={instagramLogo} />
            <P
              style={[
                styles.subTitle,
                {
                  marginTop: 20,
                  fontSize: 32,
                  textAlign: 'center',
                  lineHeight: 32,
                  marginBottom: 0,
                  color: 'rgb(84, 84, 84)',
                },
              ]}
            >
              Instagram
            </P>
            <P
              style={[
                {
                  fontSize: 14,
                  textAlign: 'center',
                  lineHeight: 14,
                  color: 'rgb(84, 84, 84)',
                },
              ]}
            >
              @anasantafit
            </P>
          </View>
          <View>
            <Image style={styles.youtubeLogo} source={youtubeLogo} />
            <P
              style={[
                styles.subTitle,
                {
                  marginTop: 20,
                  fontSize: 32,
                  textAlign: 'center',
                  lineHeight: 32,
                  marginBottom: 0,
                  color: 'rgb(84, 84, 84)',
                },
              ]}
            >
              Youtube
            </P>
            <P
              style={[
                {
                  fontSize: 14,
                  textAlign: 'center',
                  lineHeight: 14,
                  color: 'rgb(84, 84, 84)',
                },
              ]}
            >
              @anasantafit
            </P>
          </View>
        </Section>
      </ImageBackground>
    </Main>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    maxWidth: 1100,
    flexDirection: 'column',
    alignItems: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  title: {
    fontFamily: 'LeagueGothic',
    fontSize: 150,
    fontWeight: '400',
    marginTop: 20,
    marginBottom: 0,
    paddingHorizontal: 10,
  },
  titleNormal: {
    fontFamily: 'LeagueGothic',
    fontSize: 100,
    fontWeight: '400',
    marginTop: 20,
    marginBottom: 0,
    textTransform: 'uppercase',
  },
  formHeadingStyle: {
    fontSize: 16,
    textTransform: 'uppercase',
    fontWeight: '600',
    marginTop: 10,
    marginBottom: 10,
  },
  subTitle: {
    fontFamily: 'BryndanWrite',
    fontSize: 50,
    fontWeight: '400',
    marginTop: 0,
    lineHeight: 1,
    textAlign: 'center',
  },
  overrideSubTitle: { lineHeight: 50, margin: 0, padding: 0, marginBottom: 0 },
  whiteFrame: {
    backgroundColor: 'rgba(255,255,255,0.8)',
    paddingHorizontal: 20,
    marginTop: 30,
  },
  blackCircle: {
    width: 260,
  },
  blackUnderline: {
    height: 14,
    paddingLeft: 0,
    resizeMode: 'cover',
    width: 150,
  },
  text: {
    fontSize: 16,
  },
  section: {
    resizeMode: 'cover',
    justifyContent: 'flex-start',
    width: '100%',
    alignItems: 'center',
    minHeight: 580,
    marginBottom: 40,
  },
  igLogo: {
    width: 61,
    height: 61,
    marginHorizontal: 60,
  },
  youtubeLogo: {
    width: 79.5,
    height: 56,
    marginHorizontal: 60,
  },
  newStyle: {
    width: 10,
  },
});
