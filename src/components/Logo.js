import React from 'react';
import {View} from 'react-native';
import {Svg, Rect, Text as SvgText} from 'react-native-svg';
import {useTheme} from 'react-native-paper';

const SurplusLogo = () => {
  const {colors} = useTheme();
  return (
    <View>
      <Svg width={200} height={200}>
        <Rect x={0} y={0} width={200} height={200} fill="transparent" />
        <SvgText
          x={100}
          y={100}
          textAnchor="middle"
          dominantBaseline="middle"
          fill={colors.primary}
          stroke={colors.secondary}
          strokeWidth={2}
          fontSize={48}
          fontWeight="normal"
          dy={8}>
          Surplus
        </SvgText>
      </Svg>
    </View>
  );
};

export default SurplusLogo;
