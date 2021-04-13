import React, { useMemo } from "react";
import Box from "../components/box";

const Letters = (props) => {
  return useMemo(() => {
    return (
      <group position={props.position}>
        <group>
          {/* C */}
          <Box boxPosition={[-10, 5, -16]} />
          <Box boxPosition={[-9, 5, -16]} />
          <Box boxPosition={[-11, 4, -16]} />
          <Box boxPosition={[-11, 3, -16]} />
          <Box boxPosition={[-11, 2, -16]} />
          <Box boxPosition={[-10, 1, -16]} />
          <Box boxPosition={[-9, 1, -16]} />
          <Box boxPosition={[-8, 4, -16]} />
          <Box boxPosition={[-8, 2, -16]} />
          {/* O */}
          <Box boxPosition={[-5, 5, -16]} />
          <Box boxPosition={[-4, 5, -16]} />
          <Box boxPosition={[-6, 4, -16]} />
          <Box boxPosition={[-6, 3, -16]} />
          <Box boxPosition={[-6, 2, -16]} />
          <Box boxPosition={[-5, 1, -16]} />
          <Box boxPosition={[-4, 1, -16]} />
          <Box boxPosition={[-3, 4, -16]} />
          <Box boxPosition={[-3, 3, -16]} />
          <Box boxPosition={[-3, 2, -16]} />
          {/* M */}
          <Box boxPosition={[-1, 5, -16]} />
          <Box boxPosition={[-1, 4, -16]} />
          <Box boxPosition={[-1, 3, -16]} />
          <Box boxPosition={[-1, 2, -16]} />
          <Box boxPosition={[-1, 1, -16]} />
          <Box boxPosition={[0, 5, -16]} />
          <Box boxPosition={[1, 4, -16]} />
          <Box boxPosition={[2, 5, -16]} />
          <Box boxPosition={[3, 5, -16]} />
          <Box boxPosition={[3, 4, -16]} />
          <Box boxPosition={[3, 3, -16]} />
          <Box boxPosition={[3, 2, -16]} />
          <Box boxPosition={[3, 1, -16]} />
          {/* I */}
          <Box boxPosition={[5, 5, -16]} />
          <Box boxPosition={[6, 5, -16]} />
          <Box boxPosition={[7, 5, -16]} />
          <Box boxPosition={[6, 5, -16]} />
          <Box boxPosition={[6, 4, -16]} />
          <Box boxPosition={[6, 3, -16]} />
          <Box boxPosition={[6, 2, -16]} />
          <Box boxPosition={[6, 1, -16]} />
          <Box boxPosition={[5, 1, -16]} />
          <Box boxPosition={[6, 1, -16]} />
          <Box boxPosition={[7, 1, -16]} />
          {/* N */}
          <Box boxPosition={[9, 5, -16]} />
          <Box boxPosition={[9, 4, -16]} />
          <Box boxPosition={[9, 3, -16]} />
          <Box boxPosition={[9, 2, -16]} />
          <Box boxPosition={[9, 1, -16]} />
          <Box boxPosition={[10, 4, -16]} />
          <Box boxPosition={[11, 3, -16]} />
          <Box boxPosition={[12, 5, -16]} />
          <Box boxPosition={[12, 4, -16]} />
          <Box boxPosition={[12, 3, -16]} />
          <Box boxPosition={[12, 2, -16]} />
          <Box boxPosition={[12, 1, -16]} />
          {/* G */}
          <Box boxPosition={[15, 5, -16]} />
          <Box boxPosition={[16, 5, -16]} />
          <Box boxPosition={[14, 4, -16]} />
          <Box boxPosition={[14, 3, -16]} />
          <Box boxPosition={[14, 2, -16]} />
          <Box boxPosition={[15, 1, -16]} />
          <Box boxPosition={[16, 1, -16]} />
          <Box boxPosition={[17, 3, -16]} />
          <Box boxPosition={[16, 3, -16]} />
          <Box boxPosition={[17, 2, -16]} />
          {/* S */}
          <Box boxPosition={[-10, -1, -16]} />
          <Box boxPosition={[-9, -1, -16]} />
          <Box boxPosition={[-8, -1, -16]} />
          <Box boxPosition={[-11, -2, -16]} />
          <Box boxPosition={[-10, -3, -16]} />
          <Box boxPosition={[-9, -3, -16]} />
          <Box boxPosition={[-8, -4, -16]} />
          <Box boxPosition={[-11, -5, -16]} />
          <Box boxPosition={[-10, -5, -16]} />
          <Box boxPosition={[-9, -5, -16]} />
          {/* O */}
          <Box boxPosition={[-5, -1, -16]} />
          <Box boxPosition={[-4, -1, -16]} />
          <Box boxPosition={[-6, -2, -16]} />
          <Box boxPosition={[-6, -3, -16]} />
          <Box boxPosition={[-6, -4, -16]} />
          <Box boxPosition={[-5, -5, -16]} />
          <Box boxPosition={[-4, -5, -16]} />
          <Box boxPosition={[-3, -4, -16]} />
          <Box boxPosition={[-3, -3, -16]} />
          <Box boxPosition={[-3, -2, -16]} />
          {/* O */}
          <Box boxPosition={[0, -1, -16]} />
          <Box boxPosition={[1, -1, -16]} />
          <Box boxPosition={[-1, -2, -16]} />
          <Box boxPosition={[-1, -3, -16]} />
          <Box boxPosition={[-1, -4, -16]} />
          <Box boxPosition={[0, -5, -16]} />
          <Box boxPosition={[1, -5, -16]} />
          <Box boxPosition={[2, -4, -16]} />
          <Box boxPosition={[2, -3, -16]} />
          <Box boxPosition={[2, -2, -16]} />
          {/* N */}
          <Box boxPosition={[4, -1, -16]} />
          <Box boxPosition={[4, -2, -16]} />
          <Box boxPosition={[4, -3, -16]} />
          <Box boxPosition={[4, -4, -16]} />
          <Box boxPosition={[4, -5, -16]} />
          <Box boxPosition={[5, -2, -16]} />
          <Box boxPosition={[6, -3, -16]} />
          <Box boxPosition={[7, -1, -16]} />
          <Box boxPosition={[7, -2, -16]} />
          <Box boxPosition={[7, -3, -16]} />
          <Box boxPosition={[7, -4, -16]} />
          <Box boxPosition={[7, -5, -16]} />
          {/* ... */}
          <Box boxPosition={[9, -5, -16]} />
          <Box boxPosition={[11, -5, -16]} />
          <Box boxPosition={[13, -5, -16]} />
        </group>
      </group>
    );
  }, []);
};

export default Letters;
