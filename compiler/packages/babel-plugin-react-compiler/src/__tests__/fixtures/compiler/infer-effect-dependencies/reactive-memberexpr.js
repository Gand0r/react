// @inferEffectDependencies
import {useEffect, AUTODEPS} from 'react';
import {print} from 'shared-runtime';

function ReactiveMemberExpr({propVal}) {
  const obj = {a: {b: propVal}};
  useEffect(() => print(obj.a.b), AUTODEPS);
}
