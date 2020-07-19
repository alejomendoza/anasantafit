// @generated: @expo/next-adapter@2.1.20
import React from 'react';
import { StyleSheet, ImageBackground, Image, View } from 'react-native';
import { H1, P, H2, Section, Main, BR } from '@expo/html-elements';
import { useFonts } from 'expo-font';

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
        style={styles.section}
        imageStyle={{ borderRadius: 6 }}
      >
        {' '}
        <View style={styles.whiteFrame}>
          <H2 style={styles.titleNormal}>Descubre cuál es tu plan!</H2>
        </View>
      </ImageBackground>
      <ImageBackground
        source={image5}
        style={[
          styles.section,
          {
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
          },
        ]}
        imageStyle={{ borderRadius: 6 }}
      >
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
          <H2 style={[styles.subTitle, { lineHeight: 50, margin: 0 }]}>
            GUÍA A
          </H2>
          <P style={{ textAlign: 'center' }}>
            Esta guía esta diseñada para personas con un requerimiento calórico
            entre 1200 y 1500 calorias diarias.
          </P>
        </View>
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
          <H2 style={[styles.subTitle, { lineHeight: 50, margin: 0 }]}>
            GUÍA A
          </H2>
          <P style={{ textAlign: 'center' }}>
            Esta guía esta diseñada para personas con un requerimiento calórico
            entre 1200 y 1500 calorias diarias.
          </P>
        </View>
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
          <H2 style={[styles.subTitle, { lineHeight: 50, margin: 0 }]}>
            GUÍA A
          </H2>
          <P style={{ textAlign: 'center' }}>
            Esta guía esta diseñada para personas con un requerimiento calórico
            entre 1200 y 1500 calorias diarias.
          </P>
        </View>
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
          <H2 style={[styles.subTitle, { lineHeight: 50, margin: 0 }]}>
            GUÍA A
          </H2>
          <P style={{ textAlign: 'center' }}>
            Esta guía esta diseñada para personas con un requerimiento calórico
            entre 1200 y 1500 calorias diarias.
          </P>
        </View>
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
          <H2 style={[styles.subTitle, { lineHeight: 50, margin: 0 }]}>
            GUÍA A
          </H2>
          <P style={{ textAlign: 'center' }}>
            Esta guía esta diseñada para personas con un requerimiento calórico
            entre 1200 y 1500 calorias diarias.
          </P>
        </View>
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
          <H2 style={[styles.subTitle, { lineHeight: 50, margin: 0 }]}>
            GUÍA A
          </H2>
          <P style={{ textAlign: 'center' }}>
            Esta guía esta diseñada para personas con un requerimiento calórico
            entre 1200 y 1500 calorias diarias.
          </P>
        </View>
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
          <H2 style={[styles.subTitle, { lineHeight: 50, margin: 0 }]}>
            GUÍA A
          </H2>
          <P style={{ textAlign: 'center' }}>
            Esta guía esta diseñada para personas con un requerimiento calórico
            entre 1200 y 1500 calorias diarias.
          </P>
        </View>
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
          <H2 style={[styles.subTitle, { lineHeight: 50, margin: 0 }]}>
            GUÍA A
          </H2>
          <P style={{ textAlign: 'center' }}>
            Esta guía esta diseñada para personas con un requerimiento calórico
            entre 1200 y 1500 calorias diarias.
          </P>
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
  subTitle: {
    fontFamily: 'BryndanWrite',
    fontSize: 50,
    fontWeight: '400',
    marginTop: 0,
    lineHeight: 1,
    textAlign: 'center',
  },
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
    marginVertical: 40,
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
