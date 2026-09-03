const _d = 2;
const xd = 1006;
const Pt = "srgb";
const Nn = "srgb-linear";
const Ii = "linear";
const Ke = "srgb";
const vd = 35048;
const Hr = "300 es";
function Hs(i) {
  for (let e = i.length - 1; e >= 0; --e) {
    if (i[e] >= 65535) {
      return true;
    }
  }
  return false;
}
function Ui(i) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", i);
}
function Da() {
  const i = Ui("canvas");
  i.style.display = "block";
  return i;
}
const kr = {};
function Wr(...i) {
  const e = "THREE." + i.shift();
  console.log(e, ...i);
}
function Ce(...i) {
  const e = "THREE." + i.shift();
  console.warn(e, ...i);
}
function He(...i) {
  const e = "THREE." + i.shift();
  console.error(e, ...i);
}
function Qn(...i) {
  const e = i.join(" ");
  if (!(e in kr)) {
    kr[e] = true;
    Ce(...i);
  }
}
function La(i, e, t) {
  return new Promise(function (n, r) {
    function s() {
      switch (i.clientWaitSync(e, i.SYNC_FLUSH_COMMANDS_BIT, 0)) {
        case i.WAIT_FAILED:
          r();
          break;
        case i.TIMEOUT_EXPIRED:
          setTimeout(s, t);
          break;
        default:
          n();
      }
    }
    setTimeout(s, t);
  });
}
class zn {
  addEventListener(e, t) {
    if (this._listeners === undefined) {
      this._listeners = {};
    }
    const n = this._listeners;
    if (n[e] === undefined) {
      n[e] = [];
    }
    if (n[e].indexOf(t) === -1) {
      n[e].push(t);
    }
  }
  hasEventListener(e, t) {
    const n = this._listeners;
    if (n === undefined) {
      return false;
    } else {
      return n[e] !== undefined && n[e].indexOf(t) !== -1;
    }
  }
  removeEventListener(e, t) {
    const n = this._listeners;
    if (n === undefined) {
      return;
    }
    const r = n[e];
    if (r !== undefined) {
      const s = r.indexOf(t);
      if (s !== -1) {
        r.splice(s, 1);
      }
    }
  }
  dispatchEvent(e) {
    const t = this._listeners;
    if (t === undefined) {
      return;
    }
    const n = t[e.type];
    if (n !== undefined) {
      e.target = this;
      const r = n.slice(0);
      for (let s = 0, o = r.length; s < o; s++) {
        r[s].call(this, e);
      }
      e.target = null;
    }
  }
}
const mt = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"];
const qi = Math.PI / 180;
const Tr = 180 / Math.PI;
function ri() {
  const i = Math.random() * 4294967295 | 0;
  const e = Math.random() * 4294967295 | 0;
  const t = Math.random() * 4294967295 | 0;
  const n = Math.random() * 4294967295 | 0;
  return (mt[i & 255] + mt[i >> 8 & 255] + mt[i >> 16 & 255] + mt[i >> 24 & 255] + "-" + mt[e & 255] + mt[e >> 8 & 255] + "-" + mt[e >> 16 & 15 | 64] + mt[e >> 24 & 255] + "-" + mt[t & 63 | 128] + mt[t >> 8 & 255] + "-" + mt[t >> 16 & 255] + mt[t >> 24 & 255] + mt[n & 255] + mt[n >> 8 & 255] + mt[n >> 16 & 255] + mt[n >> 24 & 255]).toLowerCase();
}
function Be(i, e, t) {
  return Math.max(e, Math.min(t, i));
}
function Fa(i, e) {
  return (i % e + e) % e;
}
function Yi(i, e, t) {
  return (1 - t) * i + t * e;
}
function kn(i, e) {
  switch (e.constructor) {
    case Float32Array:
      return i;
    case Uint32Array:
      return i / 4294967295;
    case Uint16Array:
      return i / 65535;
    case Uint8Array:
      return i / 255;
    case Int32Array:
      return Math.max(i / 2147483647, -1);
    case Int16Array:
      return Math.max(i / 32767, -1);
    case Int8Array:
      return Math.max(i / 127, -1);
    default:
      throw new Error("Invalid component type.");
  }
}
function Tt(i, e) {
  switch (e.constructor) {
    case Float32Array:
      return i;
    case Uint32Array:
      return Math.round(i * 4294967295);
    case Uint16Array:
      return Math.round(i * 65535);
    case Uint8Array:
      return Math.round(i * 255);
    case Int32Array:
      return Math.round(i * 2147483647);
    case Int16Array:
      return Math.round(i * 32767);
    case Int8Array:
      return Math.round(i * 127);
    default:
      throw new Error("Invalid component type.");
  }
}
class ke {
  constructor(e = 0, t = 0) {
    ke.prototype.isVector2 = true;
    this.x = e;
    this.y = t;
  }
  get width() {
    return this.x;
  }
  set width(e) {
    this.x = e;
  }
  get height() {
    return this.y;
  }
  set height(e) {
    this.y = e;
  }
  set(e, t) {
    this.x = e;
    this.y = t;
    return this;
  }
  setScalar(e) {
    this.x = e;
    this.y = e;
    return this;
  }
  setX(e) {
    this.x = e;
    return this;
  }
  setY(e) {
    this.y = e;
    return this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y);
  }
  copy(e) {
    this.x = e.x;
    this.y = e.y;
    return this;
  }
  add(e) {
    this.x += e.x;
    this.y += e.y;
    return this;
  }
  addScalar(e) {
    this.x += e;
    this.y += e;
    return this;
  }
  addVectors(e, t) {
    this.x = e.x + t.x;
    this.y = e.y + t.y;
    return this;
  }
  addScaledVector(e, t) {
    this.x += e.x * t;
    this.y += e.y * t;
    return this;
  }
  sub(e) {
    this.x -= e.x;
    this.y -= e.y;
    return this;
  }
  subScalar(e) {
    this.x -= e;
    this.y -= e;
    return this;
  }
  subVectors(e, t) {
    this.x = e.x - t.x;
    this.y = e.y - t.y;
    return this;
  }
  multiply(e) {
    this.x *= e.x;
    this.y *= e.y;
    return this;
  }
  multiplyScalar(e) {
    this.x *= e;
    this.y *= e;
    return this;
  }
  divide(e) {
    this.x /= e.x;
    this.y /= e.y;
    return this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  applyMatrix3(e) {
    const t = this.x;
    const n = this.y;
    const r = e.elements;
    this.x = r[0] * t + r[3] * n + r[6];
    this.y = r[1] * t + r[4] * n + r[7];
    return this;
  }
  min(e) {
    this.x = Math.min(this.x, e.x);
    this.y = Math.min(this.y, e.y);
    return this;
  }
  max(e) {
    this.x = Math.max(this.x, e.x);
    this.y = Math.max(this.y, e.y);
    return this;
  }
  clamp(e, t) {
    this.x = Be(this.x, e.x, t.x);
    this.y = Be(this.y, e.y, t.y);
    return this;
  }
  clampScalar(e, t) {
    this.x = Be(this.x, e, t);
    this.y = Be(this.y, e, t);
    return this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Be(n, e, t));
  }
  floor() {
    this.x = Math.floor(this.x);
    this.y = Math.floor(this.y);
    return this;
  }
  ceil() {
    this.x = Math.ceil(this.x);
    this.y = Math.ceil(this.y);
    return this;
  }
  round() {
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
    return this;
  }
  roundToZero() {
    this.x = Math.trunc(this.x);
    this.y = Math.trunc(this.y);
    return this;
  }
  negate() {
    this.x = -this.x;
    this.y = -this.y;
    return this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y;
  }
  cross(e) {
    return this.x * e.y - this.y * e.x;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) {
      return Math.PI / 2;
    }
    const n = this.dot(e) / t;
    return Math.acos(Be(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x;
    const n = this.y - e.y;
    return t * t + n * n;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    this.x += (e.x - this.x) * t;
    this.y += (e.y - this.y) * t;
    return this;
  }
  lerpVectors(e, t, n) {
    this.x = e.x + (t.x - e.x) * n;
    this.y = e.y + (t.y - e.y) * n;
    return this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y;
  }
  fromArray(e, t = 0) {
    this.x = e[t];
    this.y = e[t + 1];
    return this;
  }
  toArray(e = [], t = 0) {
    e[t] = this.x;
    e[t + 1] = this.y;
    return e;
  }
  fromBufferAttribute(e, t) {
    this.x = e.getX(t);
    this.y = e.getY(t);
    return this;
  }
  rotateAround(e, t) {
    const n = Math.cos(t);
    const r = Math.sin(t);
    const s = this.x - e.x;
    const o = this.y - e.y;
    this.x = s * n - o * r + e.x;
    this.y = s * r + o * n + e.y;
    return this;
  }
  random() {
    this.x = Math.random();
    this.y = Math.random();
    return this;
  }
  *[Symbol.iterator]() {
    yield this.x;
    yield this.y;
  }
}
class si {
  constructor(e = 0, t = 0, n = 0, r = 1) {
    this.isQuaternion = true;
    this._x = e;
    this._y = t;
    this._z = n;
    this._w = r;
  }
  static slerpFlat(e, t, n, r, s, o, a) {
    let c = n[r + 0];
    let l = n[r + 1];
    let u = n[r + 2];
    let f = n[r + 3];
    let d = s[o + 0];
    let p = s[o + 1];
    let x = s[o + 2];
    let _ = s[o + 3];
    if (a <= 0) {
      e[t + 0] = c;
      e[t + 1] = l;
      e[t + 2] = u;
      e[t + 3] = f;
      return;
    }
    if (a >= 1) {
      e[t + 0] = d;
      e[t + 1] = p;
      e[t + 2] = x;
      e[t + 3] = _;
      return;
    }
    if (f !== _ || c !== d || l !== p || u !== x) {
      let m = c * d + l * p + u * x + f * _;
      if (m < 0) {
        d = -d;
        p = -p;
        x = -x;
        _ = -_;
        m = -m;
      }
      let h = 1 - a;
      if (m < 0.9995) {
        const b = Math.acos(m);
        const y = Math.sin(b);
        h = Math.sin(h * b) / y;
        a = Math.sin(a * b) / y;
        c = c * h + d * a;
        l = l * h + p * a;
        u = u * h + x * a;
        f = f * h + _ * a;
      } else {
        c = c * h + d * a;
        l = l * h + p * a;
        u = u * h + x * a;
        f = f * h + _ * a;
        const b = 1 / Math.sqrt(c * c + l * l + u * u + f * f);
        c *= b;
        l *= b;
        u *= b;
        f *= b;
      }
    }
    e[t] = c;
    e[t + 1] = l;
    e[t + 2] = u;
    e[t + 3] = f;
  }
  static multiplyQuaternionsFlat(e, t, n, r, s, o) {
    const a = n[r];
    const c = n[r + 1];
    const l = n[r + 2];
    const u = n[r + 3];
    const f = s[o];
    const d = s[o + 1];
    const p = s[o + 2];
    const x = s[o + 3];
    e[t] = a * x + u * f + c * p - l * d;
    e[t + 1] = c * x + u * d + l * f - a * p;
    e[t + 2] = l * x + u * p + a * d - c * f;
    e[t + 3] = u * x - a * f - c * d - l * p;
    return e;
  }
  get x() {
    return this._x;
  }
  set x(e) {
    this._x = e;
    this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    this._y = e;
    this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    this._z = e;
    this._onChangeCallback();
  }
  get w() {
    return this._w;
  }
  set w(e) {
    this._w = e;
    this._onChangeCallback();
  }
  set(e, t, n, r) {
    this._x = e;
    this._y = t;
    this._z = n;
    this._w = r;
    this._onChangeCallback();
    return this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(e) {
    this._x = e.x;
    this._y = e.y;
    this._z = e.z;
    this._w = e.w;
    this._onChangeCallback();
    return this;
  }
  setFromEuler(e, t = true) {
    const n = e._x;
    const r = e._y;
    const s = e._z;
    const o = e._order;
    const a = Math.cos;
    const c = Math.sin;
    const l = a(n / 2);
    const u = a(r / 2);
    const f = a(s / 2);
    const d = c(n / 2);
    const p = c(r / 2);
    const x = c(s / 2);
    switch (o) {
      case "XYZ":
        this._x = d * u * f + l * p * x;
        this._y = l * p * f - d * u * x;
        this._z = l * u * x + d * p * f;
        this._w = l * u * f - d * p * x;
        break;
      case "YXZ":
        this._x = d * u * f + l * p * x;
        this._y = l * p * f - d * u * x;
        this._z = l * u * x - d * p * f;
        this._w = l * u * f + d * p * x;
        break;
      case "ZXY":
        this._x = d * u * f - l * p * x;
        this._y = l * p * f + d * u * x;
        this._z = l * u * x + d * p * f;
        this._w = l * u * f - d * p * x;
        break;
      case "ZYX":
        this._x = d * u * f - l * p * x;
        this._y = l * p * f + d * u * x;
        this._z = l * u * x - d * p * f;
        this._w = l * u * f + d * p * x;
        break;
      case "YZX":
        this._x = d * u * f + l * p * x;
        this._y = l * p * f + d * u * x;
        this._z = l * u * x - d * p * f;
        this._w = l * u * f - d * p * x;
        break;
      case "XZY":
        this._x = d * u * f - l * p * x;
        this._y = l * p * f - d * u * x;
        this._z = l * u * x + d * p * f;
        this._w = l * u * f + d * p * x;
        break;
      default:
        Ce("Quaternion: .setFromEuler() encountered an unknown order: " + o);
    }
    if (t === true) {
      this._onChangeCallback();
    }
    return this;
  }
  setFromAxisAngle(e, t) {
    const n = t / 2;
    const r = Math.sin(n);
    this._x = e.x * r;
    this._y = e.y * r;
    this._z = e.z * r;
    this._w = Math.cos(n);
    this._onChangeCallback();
    return this;
  }
  setFromRotationMatrix(e) {
    const t = e.elements;
    const n = t[0];
    const r = t[4];
    const s = t[8];
    const o = t[1];
    const a = t[5];
    const c = t[9];
    const l = t[2];
    const u = t[6];
    const f = t[10];
    const d = n + a + f;
    if (d > 0) {
      const p = 0.5 / Math.sqrt(d + 1);
      this._w = 0.25 / p;
      this._x = (u - c) * p;
      this._y = (s - l) * p;
      this._z = (o - r) * p;
    } else if (n > a && n > f) {
      const p = Math.sqrt(1 + n - a - f) * 2;
      this._w = (u - c) / p;
      this._x = p * 0.25;
      this._y = (r + o) / p;
      this._z = (s + l) / p;
    } else if (a > f) {
      const p = Math.sqrt(1 + a - n - f) * 2;
      this._w = (s - l) / p;
      this._x = (r + o) / p;
      this._y = p * 0.25;
      this._z = (c + u) / p;
    } else {
      const p = Math.sqrt(1 + f - n - a) * 2;
      this._w = (o - r) / p;
      this._x = (s + l) / p;
      this._y = (c + u) / p;
      this._z = p * 0.25;
    }
    this._onChangeCallback();
    return this;
  }
  setFromUnitVectors(e, t) {
    let n = e.dot(t) + 1;
    if (n < 1e-8) {
      n = 0;
      if (Math.abs(e.x) > Math.abs(e.z)) {
        this._x = -e.y;
        this._y = e.x;
        this._z = 0;
        this._w = n;
      } else {
        this._x = 0;
        this._y = -e.z;
        this._z = e.y;
        this._w = n;
      }
    } else {
      this._x = e.y * t.z - e.z * t.y;
      this._y = e.z * t.x - e.x * t.z;
      this._z = e.x * t.y - e.y * t.x;
      this._w = n;
    }
    return this.normalize();
  }
  angleTo(e) {
    return Math.acos(Math.abs(Be(this.dot(e), -1, 1))) * 2;
  }
  rotateTowards(e, t) {
    const n = this.angleTo(e);
    if (n === 0) {
      return this;
    }
    const r = Math.min(1, t / n);
    this.slerp(e, r);
    return this;
  }
  identity() {
    return this.set(0, 0, 0, 1);
  }
  invert() {
    return this.conjugate();
  }
  conjugate() {
    this._x *= -1;
    this._y *= -1;
    this._z *= -1;
    this._onChangeCallback();
    return this;
  }
  dot(e) {
    return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
  }
  lengthSq() {
    return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
  }
  length() {
    return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
  }
  normalize() {
    let e = this.length();
    if (e === 0) {
      this._x = 0;
      this._y = 0;
      this._z = 0;
      this._w = 1;
    } else {
      e = 1 / e;
      this._x = this._x * e;
      this._y = this._y * e;
      this._z = this._z * e;
      this._w = this._w * e;
    }
    this._onChangeCallback();
    return this;
  }
  multiply(e) {
    return this.multiplyQuaternions(this, e);
  }
  premultiply(e) {
    return this.multiplyQuaternions(e, this);
  }
  multiplyQuaternions(e, t) {
    const n = e._x;
    const r = e._y;
    const s = e._z;
    const o = e._w;
    const a = t._x;
    const c = t._y;
    const l = t._z;
    const u = t._w;
    this._x = n * u + o * a + r * l - s * c;
    this._y = r * u + o * c + s * a - n * l;
    this._z = s * u + o * l + n * c - r * a;
    this._w = o * u - n * a - r * c - s * l;
    this._onChangeCallback();
    return this;
  }
  slerp(e, t) {
    if (t <= 0) {
      return this;
    }
    if (t >= 1) {
      return this.copy(e);
    }
    let n = e._x;
    let r = e._y;
    let s = e._z;
    let o = e._w;
    let a = this.dot(e);
    if (a < 0) {
      n = -n;
      r = -r;
      s = -s;
      o = -o;
      a = -a;
    }
    let c = 1 - t;
    if (a < 0.9995) {
      const l = Math.acos(a);
      const u = Math.sin(l);
      c = Math.sin(c * l) / u;
      t = Math.sin(t * l) / u;
      this._x = this._x * c + n * t;
      this._y = this._y * c + r * t;
      this._z = this._z * c + s * t;
      this._w = this._w * c + o * t;
      this._onChangeCallback();
    } else {
      this._x = this._x * c + n * t;
      this._y = this._y * c + r * t;
      this._z = this._z * c + s * t;
      this._w = this._w * c + o * t;
      this.normalize();
    }
    return this;
  }
  slerpQuaternions(e, t, n) {
    return this.copy(e).slerp(t, n);
  }
  random() {
    const e = Math.PI * 2 * Math.random();
    const t = Math.PI * 2 * Math.random();
    const n = Math.random();
    const r = Math.sqrt(1 - n);
    const s = Math.sqrt(n);
    return this.set(r * Math.sin(e), r * Math.cos(e), s * Math.sin(t), s * Math.cos(t));
  }
  equals(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w;
  }
  fromArray(e, t = 0) {
    this._x = e[t];
    this._y = e[t + 1];
    this._z = e[t + 2];
    this._w = e[t + 3];
    this._onChangeCallback();
    return this;
  }
  toArray(e = [], t = 0) {
    e[t] = this._x;
    e[t + 1] = this._y;
    e[t + 2] = this._z;
    e[t + 3] = this._w;
    return e;
  }
  fromBufferAttribute(e, t) {
    this._x = e.getX(t);
    this._y = e.getY(t);
    this._z = e.getZ(t);
    this._w = e.getW(t);
    this._onChangeCallback();
    return this;
  }
  toJSON() {
    return this.toArray();
  }
  _onChange(e) {
    this._onChangeCallback = e;
    return this;
  }
  _onChangeCallback() {}
  *[Symbol.iterator]() {
    yield this._x;
    yield this._y;
    yield this._z;
    yield this._w;
  }
}
class B {
  constructor(e = 0, t = 0, n = 0) {
    B.prototype.isVector3 = true;
    this.x = e;
    this.y = t;
    this.z = n;
  }
  set(e, t, n = this.z) {
    this.x = e;
    this.y = t;
    this.z = n;
    return this;
  }
  setScalar(e) {
    this.x = e;
    this.y = e;
    this.z = e;
    return this;
  }
  setX(e) {
    this.x = e;
    return this;
  }
  setY(e) {
    this.y = e;
    return this;
  }
  setZ(e) {
    this.z = e;
    return this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  copy(e) {
    this.x = e.x;
    this.y = e.y;
    this.z = e.z;
    return this;
  }
  add(e) {
    this.x += e.x;
    this.y += e.y;
    this.z += e.z;
    return this;
  }
  addScalar(e) {
    this.x += e;
    this.y += e;
    this.z += e;
    return this;
  }
  addVectors(e, t) {
    this.x = e.x + t.x;
    this.y = e.y + t.y;
    this.z = e.z + t.z;
    return this;
  }
  addScaledVector(e, t) {
    this.x += e.x * t;
    this.y += e.y * t;
    this.z += e.z * t;
    return this;
  }
  sub(e) {
    this.x -= e.x;
    this.y -= e.y;
    this.z -= e.z;
    return this;
  }
  subScalar(e) {
    this.x -= e;
    this.y -= e;
    this.z -= e;
    return this;
  }
  subVectors(e, t) {
    this.x = e.x - t.x;
    this.y = e.y - t.y;
    this.z = e.z - t.z;
    return this;
  }
  multiply(e) {
    this.x *= e.x;
    this.y *= e.y;
    this.z *= e.z;
    return this;
  }
  multiplyScalar(e) {
    this.x *= e;
    this.y *= e;
    this.z *= e;
    return this;
  }
  multiplyVectors(e, t) {
    this.x = e.x * t.x;
    this.y = e.y * t.y;
    this.z = e.z * t.z;
    return this;
  }
  applyEuler(e) {
    return this.applyQuaternion(Xr.setFromEuler(e));
  }
  applyAxisAngle(e, t) {
    return this.applyQuaternion(Xr.setFromAxisAngle(e, t));
  }
  applyMatrix3(e) {
    const t = this.x;
    const n = this.y;
    const r = this.z;
    const s = e.elements;
    this.x = s[0] * t + s[3] * n + s[6] * r;
    this.y = s[1] * t + s[4] * n + s[7] * r;
    this.z = s[2] * t + s[5] * n + s[8] * r;
    return this;
  }
  applyNormalMatrix(e) {
    return this.applyMatrix3(e).normalize();
  }
  applyMatrix4(e) {
    const t = this.x;
    const n = this.y;
    const r = this.z;
    const s = e.elements;
    const o = 1 / (s[3] * t + s[7] * n + s[11] * r + s[15]);
    this.x = (s[0] * t + s[4] * n + s[8] * r + s[12]) * o;
    this.y = (s[1] * t + s[5] * n + s[9] * r + s[13]) * o;
    this.z = (s[2] * t + s[6] * n + s[10] * r + s[14]) * o;
    return this;
  }
  applyQuaternion(e) {
    const t = this.x;
    const n = this.y;
    const r = this.z;
    const s = e.x;
    const o = e.y;
    const a = e.z;
    const c = e.w;
    const l = (o * r - a * n) * 2;
    const u = (a * t - s * r) * 2;
    const f = (s * n - o * t) * 2;
    this.x = t + c * l + o * f - a * u;
    this.y = n + c * u + a * l - s * f;
    this.z = r + c * f + s * u - o * l;
    return this;
  }
  project(e) {
    return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix);
  }
  unproject(e) {
    return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld);
  }
  transformDirection(e) {
    const t = this.x;
    const n = this.y;
    const r = this.z;
    const s = e.elements;
    this.x = s[0] * t + s[4] * n + s[8] * r;
    this.y = s[1] * t + s[5] * n + s[9] * r;
    this.z = s[2] * t + s[6] * n + s[10] * r;
    return this.normalize();
  }
  divide(e) {
    this.x /= e.x;
    this.y /= e.y;
    this.z /= e.z;
    return this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  min(e) {
    this.x = Math.min(this.x, e.x);
    this.y = Math.min(this.y, e.y);
    this.z = Math.min(this.z, e.z);
    return this;
  }
  max(e) {
    this.x = Math.max(this.x, e.x);
    this.y = Math.max(this.y, e.y);
    this.z = Math.max(this.z, e.z);
    return this;
  }
  clamp(e, t) {
    this.x = Be(this.x, e.x, t.x);
    this.y = Be(this.y, e.y, t.y);
    this.z = Be(this.z, e.z, t.z);
    return this;
  }
  clampScalar(e, t) {
    this.x = Be(this.x, e, t);
    this.y = Be(this.y, e, t);
    this.z = Be(this.z, e, t);
    return this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Be(n, e, t));
  }
  floor() {
    this.x = Math.floor(this.x);
    this.y = Math.floor(this.y);
    this.z = Math.floor(this.z);
    return this;
  }
  ceil() {
    this.x = Math.ceil(this.x);
    this.y = Math.ceil(this.y);
    this.z = Math.ceil(this.z);
    return this;
  }
  round() {
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
    this.z = Math.round(this.z);
    return this;
  }
  roundToZero() {
    this.x = Math.trunc(this.x);
    this.y = Math.trunc(this.y);
    this.z = Math.trunc(this.z);
    return this;
  }
  negate() {
    this.x = -this.x;
    this.y = -this.y;
    this.z = -this.z;
    return this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    this.x += (e.x - this.x) * t;
    this.y += (e.y - this.y) * t;
    this.z += (e.z - this.z) * t;
    return this;
  }
  lerpVectors(e, t, n) {
    this.x = e.x + (t.x - e.x) * n;
    this.y = e.y + (t.y - e.y) * n;
    this.z = e.z + (t.z - e.z) * n;
    return this;
  }
  cross(e) {
    return this.crossVectors(this, e);
  }
  crossVectors(e, t) {
    const n = e.x;
    const r = e.y;
    const s = e.z;
    const o = t.x;
    const a = t.y;
    const c = t.z;
    this.x = r * c - s * a;
    this.y = s * o - n * c;
    this.z = n * a - r * o;
    return this;
  }
  projectOnVector(e) {
    const t = e.lengthSq();
    if (t === 0) {
      return this.set(0, 0, 0);
    }
    const n = e.dot(this) / t;
    return this.copy(e).multiplyScalar(n);
  }
  projectOnPlane(e) {
    $i.copy(this).projectOnVector(e);
    return this.sub($i);
  }
  reflect(e) {
    return this.sub($i.copy(e).multiplyScalar(this.dot(e) * 2));
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) {
      return Math.PI / 2;
    }
    const n = this.dot(e) / t;
    return Math.acos(Be(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x;
    const n = this.y - e.y;
    const r = this.z - e.z;
    return t * t + n * n + r * r;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z);
  }
  setFromSpherical(e) {
    return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
  }
  setFromSphericalCoords(e, t, n) {
    const r = Math.sin(t) * e;
    this.x = r * Math.sin(n);
    this.y = Math.cos(t) * e;
    this.z = r * Math.cos(n);
    return this;
  }
  setFromCylindrical(e) {
    return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
  }
  setFromCylindricalCoords(e, t, n) {
    this.x = e * Math.sin(t);
    this.y = n;
    this.z = e * Math.cos(t);
    return this;
  }
  setFromMatrixPosition(e) {
    const t = e.elements;
    this.x = t[12];
    this.y = t[13];
    this.z = t[14];
    return this;
  }
  setFromMatrixScale(e) {
    const t = this.setFromMatrixColumn(e, 0).length();
    const n = this.setFromMatrixColumn(e, 1).length();
    const r = this.setFromMatrixColumn(e, 2).length();
    this.x = t;
    this.y = n;
    this.z = r;
    return this;
  }
  setFromMatrixColumn(e, t) {
    return this.fromArray(e.elements, t * 4);
  }
  setFromMatrix3Column(e, t) {
    return this.fromArray(e.elements, t * 3);
  }
  setFromEuler(e) {
    this.x = e._x;
    this.y = e._y;
    this.z = e._z;
    return this;
  }
  setFromColor(e) {
    this.x = e.r;
    this.y = e.g;
    this.z = e.b;
    return this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z;
  }
  fromArray(e, t = 0) {
    this.x = e[t];
    this.y = e[t + 1];
    this.z = e[t + 2];
    return this;
  }
  toArray(e = [], t = 0) {
    e[t] = this.x;
    e[t + 1] = this.y;
    e[t + 2] = this.z;
    return e;
  }
  fromBufferAttribute(e, t) {
    this.x = e.getX(t);
    this.y = e.getY(t);
    this.z = e.getZ(t);
    return this;
  }
  random() {
    this.x = Math.random();
    this.y = Math.random();
    this.z = Math.random();
    return this;
  }
  randomDirection() {
    const e = Math.random() * Math.PI * 2;
    const t = Math.random() * 2 - 1;
    const n = Math.sqrt(1 - t * t);
    this.x = n * Math.cos(e);
    this.y = t;
    this.z = n * Math.sin(e);
    return this;
  }
  *[Symbol.iterator]() {
    yield this.x;
    yield this.y;
    yield this.z;
  }
}
const $i = new B();
const Xr = new si();
class Pe {
  constructor(e, t, n, r, s, o, a, c, l) {
    Pe.prototype.isMatrix3 = true;
    this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1];
    if (e !== undefined) {
      this.set(e, t, n, r, s, o, a, c, l);
    }
  }
  set(e, t, n, r, s, o, a, c, l) {
    const u = this.elements;
    u[0] = e;
    u[1] = r;
    u[2] = a;
    u[3] = t;
    u[4] = s;
    u[5] = c;
    u[6] = n;
    u[7] = o;
    u[8] = l;
    return this;
  }
  identity() {
    this.set(1, 0, 0, 0, 1, 0, 0, 0, 1);
    return this;
  }
  copy(e) {
    const t = this.elements;
    const n = e.elements;
    t[0] = n[0];
    t[1] = n[1];
    t[2] = n[2];
    t[3] = n[3];
    t[4] = n[4];
    t[5] = n[5];
    t[6] = n[6];
    t[7] = n[7];
    t[8] = n[8];
    return this;
  }
  extractBasis(e, t, n) {
    e.setFromMatrix3Column(this, 0);
    t.setFromMatrix3Column(this, 1);
    n.setFromMatrix3Column(this, 2);
    return this;
  }
  setFromMatrix4(e) {
    const t = e.elements;
    this.set(t[0], t[4], t[8], t[1], t[5], t[9], t[2], t[6], t[10]);
    return this;
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements;
    const r = t.elements;
    const s = this.elements;
    const o = n[0];
    const a = n[3];
    const c = n[6];
    const l = n[1];
    const u = n[4];
    const f = n[7];
    const d = n[2];
    const p = n[5];
    const x = n[8];
    const _ = r[0];
    const m = r[3];
    const h = r[6];
    const b = r[1];
    const y = r[4];
    const T = r[7];
    const A = r[2];
    const R = r[5];
    const w = r[8];
    s[0] = o * _ + a * b + c * A;
    s[3] = o * m + a * y + c * R;
    s[6] = o * h + a * T + c * w;
    s[1] = l * _ + u * b + f * A;
    s[4] = l * m + u * y + f * R;
    s[7] = l * h + u * T + f * w;
    s[2] = d * _ + p * b + x * A;
    s[5] = d * m + p * y + x * R;
    s[8] = d * h + p * T + x * w;
    return this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    t[0] *= e;
    t[3] *= e;
    t[6] *= e;
    t[1] *= e;
    t[4] *= e;
    t[7] *= e;
    t[2] *= e;
    t[5] *= e;
    t[8] *= e;
    return this;
  }
  determinant() {
    const e = this.elements;
    const t = e[0];
    const n = e[1];
    const r = e[2];
    const s = e[3];
    const o = e[4];
    const a = e[5];
    const c = e[6];
    const l = e[7];
    const u = e[8];
    return t * o * u - t * a * l - n * s * u + n * a * c + r * s * l - r * o * c;
  }
  invert() {
    const e = this.elements;
    const t = e[0];
    const n = e[1];
    const r = e[2];
    const s = e[3];
    const o = e[4];
    const a = e[5];
    const c = e[6];
    const l = e[7];
    const u = e[8];
    const f = u * o - a * l;
    const d = a * c - u * s;
    const p = l * s - o * c;
    const x = t * f + n * d + r * p;
    if (x === 0) {
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    }
    const _ = 1 / x;
    e[0] = f * _;
    e[1] = (r * l - u * n) * _;
    e[2] = (a * n - r * o) * _;
    e[3] = d * _;
    e[4] = (u * t - r * c) * _;
    e[5] = (r * s - a * t) * _;
    e[6] = p * _;
    e[7] = (n * c - l * t) * _;
    e[8] = (o * t - n * s) * _;
    return this;
  }
  transpose() {
    let e;
    const t = this.elements;
    e = t[1];
    t[1] = t[3];
    t[3] = e;
    e = t[2];
    t[2] = t[6];
    t[6] = e;
    e = t[5];
    t[5] = t[7];
    t[7] = e;
    return this;
  }
  getNormalMatrix(e) {
    return this.setFromMatrix4(e).invert().transpose();
  }
  transposeIntoArray(e) {
    const t = this.elements;
    e[0] = t[0];
    e[1] = t[3];
    e[2] = t[6];
    e[3] = t[1];
    e[4] = t[4];
    e[5] = t[7];
    e[6] = t[2];
    e[7] = t[5];
    e[8] = t[8];
    return this;
  }
  setUvTransform(e, t, n, r, s, o, a) {
    const c = Math.cos(s);
    const l = Math.sin(s);
    this.set(n * c, n * l, -n * (c * o + l * a) + o + e, -r * l, r * c, -r * (-l * o + c * a) + a + t, 0, 0, 1);
    return this;
  }
  scale(e, t) {
    this.premultiply(Ki.makeScale(e, t));
    return this;
  }
  rotate(e) {
    this.premultiply(Ki.makeRotation(-e));
    return this;
  }
  translate(e, t) {
    this.premultiply(Ki.makeTranslation(e, t));
    return this;
  }
  makeTranslation(e, t) {
    if (e.isVector2) {
      this.set(1, 0, e.x, 0, 1, e.y, 0, 0, 1);
    } else {
      this.set(1, 0, e, 0, 1, t, 0, 0, 1);
    }
    return this;
  }
  makeRotation(e) {
    const t = Math.cos(e);
    const n = Math.sin(e);
    this.set(t, -n, 0, n, t, 0, 0, 0, 1);
    return this;
  }
  makeScale(e, t) {
    this.set(e, 0, 0, 0, t, 0, 0, 0, 1);
    return this;
  }
  equals(e) {
    const t = this.elements;
    const n = e.elements;
    for (let r = 0; r < 9; r++) {
      if (t[r] !== n[r]) {
        return false;
      }
    }
    return true;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 9; n++) {
      this.elements[n] = e[n + t];
    }
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    e[t] = n[0];
    e[t + 1] = n[1];
    e[t + 2] = n[2];
    e[t + 3] = n[3];
    e[t + 4] = n[4];
    e[t + 5] = n[5];
    e[t + 6] = n[6];
    e[t + 7] = n[7];
    e[t + 8] = n[8];
    return e;
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}
const Ki = new Pe();
const qr = new Pe().set(0.4123908, 0.3575843, 0.1804808, 0.212639, 0.7151687, 0.0721923, 0.0193308, 0.1191948, 0.9505322);
const Yr = new Pe().set(3.2409699, -1.5373832, -0.4986108, -0.9692436, 1.8759675, 0.0415551, 0.0556301, -0.203977, 1.0569715);
function Ia() {
  const i = {
    enabled: true,
    workingColorSpace: Nn,
    spaces: {},
    convert: function (r, s, o) {
      if (this.enabled !== false && s !== o && !!s && !!o) {
        if (this.spaces[s].transfer === Ke) {
          r.r = Qt(r.r);
          r.g = Qt(r.g);
          r.b = Qt(r.b);
        }
        if (this.spaces[s].primaries !== this.spaces[o].primaries) {
          r.applyMatrix3(this.spaces[s].toXYZ);
          r.applyMatrix3(this.spaces[o].fromXYZ);
        }
        if (this.spaces[o].transfer === Ke) {
          r.r = In(r.r);
          r.g = In(r.g);
          r.b = In(r.b);
        }
      }
      return r;
    },
    workingToColorSpace: function (r, s) {
      return this.convert(r, this.workingColorSpace, s);
    },
    colorSpaceToWorking: function (r, s) {
      return this.convert(r, s, this.workingColorSpace);
    },
    getPrimaries: function (r) {
      return this.spaces[r].primaries;
    },
    getTransfer: function (r) {
      if (r === "") {
        return Ii;
      } else {
        return this.spaces[r].transfer;
      }
    },
    getToneMappingMode: function (r) {
      return this.spaces[r].outputColorSpaceConfig.toneMappingMode || "standard";
    },
    getLuminanceCoefficients: function (r, s = this.workingColorSpace) {
      return r.fromArray(this.spaces[s].luminanceCoefficients);
    },
    define: function (r) {
      Object.assign(this.spaces, r);
    },
    _getMatrix: function (r, s, o) {
      return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ);
    },
    _getDrawingBufferColorSpace: function (r) {
      return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace;
    },
    _getUnpackColorSpace: function (r = this.workingColorSpace) {
      return this.spaces[r].workingColorSpaceConfig.unpackColorSpace;
    },
    fromWorkingColorSpace: function (r, s) {
      Qn("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().");
      return i.workingToColorSpace(r, s);
    },
    toWorkingColorSpace: function (r, s) {
      Qn("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().");
      return i.colorSpaceToWorking(r, s);
    }
  };
  const e = [0.64, 0.33, 0.3, 0.6, 0.15, 0.06];
  const t = [0.2126, 0.7152, 0.0722];
  const n = [0.3127, 0.329];
  i.define({
    [Nn]: {
      primaries: e,
      whitePoint: n,
      transfer: Ii,
      toXYZ: qr,
      fromXYZ: Yr,
      luminanceCoefficients: t,
      workingColorSpaceConfig: {
        unpackColorSpace: Pt
      },
      outputColorSpaceConfig: {
        drawingBufferColorSpace: Pt
      }
    },
    [Pt]: {
      primaries: e,
      whitePoint: n,
      transfer: Ke,
      toXYZ: qr,
      fromXYZ: Yr,
      luminanceCoefficients: t,
      outputColorSpaceConfig: {
        drawingBufferColorSpace: Pt
      }
    }
  });
  return i;
}
const Ge = Ia();
function Qt(i) {
  if (i < 0.04045) {
    return i * 0.0773993808;
  } else {
    return Math.pow(i * 0.9478672986 + 0.0521327014, 2.4);
  }
}
function In(i) {
  if (i < 0.0031308) {
    return i * 12.92;
  } else {
    return Math.pow(i, 0.41666) * 1.055 - 0.055;
  }
}
let Sn;
class Ua {
  static getDataURL(e, t = "image/png") {
    if (/^data:/i.test(e.src) || typeof HTMLCanvasElement === "undefined") {
      return e.src;
    }
    let n;
    if (e instanceof HTMLCanvasElement) {
      n = e;
    } else {
      if (Sn === undefined) {
        Sn = Ui("canvas");
      }
      Sn.width = e.width;
      Sn.height = e.height;
      const r = Sn.getContext("2d");
      if (e instanceof ImageData) {
        r.putImageData(e, 0, 0);
      } else {
        r.drawImage(e, 0, 0, e.width, e.height);
      }
      n = Sn;
    }
    return n.toDataURL(t);
  }
  static sRGBToLinear(e) {
    if (typeof HTMLImageElement !== "undefined" && e instanceof HTMLImageElement || typeof HTMLCanvasElement !== "undefined" && e instanceof HTMLCanvasElement || typeof ImageBitmap !== "undefined" && e instanceof ImageBitmap) {
      const t = Ui("canvas");
      t.width = e.width;
      t.height = e.height;
      const n = t.getContext("2d");
      n.drawImage(e, 0, 0, e.width, e.height);
      const r = n.getImageData(0, 0, e.width, e.height);
      const s = r.data;
      for (let o = 0; o < s.length; o++) {
        s[o] = Qt(s[o] / 255) * 255;
      }
      n.putImageData(r, 0, 0);
      return t;
    } else if (e.data) {
      const t = e.data.slice(0);
      for (let n = 0; n < t.length; n++) {
        if (t instanceof Uint8Array || t instanceof Uint8ClampedArray) {
          t[n] = Math.floor(Qt(t[n] / 255) * 255);
        } else {
          t[n] = Qt(t[n]);
        }
      }
      return {
        data: t,
        width: e.width,
        height: e.height
      };
    } else {
      Ce("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.");
      return e;
    }
  }
}
let Na = 0;
class Cr {
  constructor(e = null) {
    this.isSource = true;
    Object.defineProperty(this, "id", {
      value: Na++
    });
    this.uuid = ri();
    this.data = e;
    this.dataReady = true;
    this.version = 0;
  }
  getSize(e) {
    const t = this.data;
    if (typeof HTMLVideoElement !== "undefined" && t instanceof HTMLVideoElement) {
      e.set(t.videoWidth, t.videoHeight, 0);
    } else if (typeof VideoFrame !== "undefined" && t instanceof VideoFrame) {
      e.set(t.displayHeight, t.displayWidth, 0);
    } else if (t !== null) {
      e.set(t.width, t.height, t.depth || 0);
    } else {
      e.set(0, 0, 0);
    }
    return e;
  }
  set needsUpdate(e) {
    if (e === true) {
      this.version++;
    }
  }
  toJSON(e) {
    const t = e === undefined || typeof e == "string";
    if (!t && e.images[this.uuid] !== undefined) {
      return e.images[this.uuid];
    }
    const n = {
      uuid: this.uuid,
      url: ""
    };
    const r = this.data;
    if (r !== null) {
      let s;
      if (Array.isArray(r)) {
        s = [];
        for (let o = 0, a = r.length; o < a; o++) {
          if (r[o].isDataTexture) {
            s.push(Zi(r[o].image));
          } else {
            s.push(Zi(r[o]));
          }
        }
      } else {
        s = Zi(r);
      }
      n.url = s;
    }
    if (!t) {
      e.images[this.uuid] = n;
    }
    return n;
  }
}
function Zi(i) {
  if (typeof HTMLImageElement !== "undefined" && i instanceof HTMLImageElement || typeof HTMLCanvasElement !== "undefined" && i instanceof HTMLCanvasElement || typeof ImageBitmap !== "undefined" && i instanceof ImageBitmap) {
    return Ua.getDataURL(i);
  } else if (i.data) {
    return {
      data: Array.from(i.data),
      width: i.width,
      height: i.height,
      type: i.data.constructor.name
    };
  } else {
    Ce("Texture: Unable to serialize Texture.");
    return {};
  }
}
let Ba = 0;
const ji = new B();
class _t extends zn {
  constructor(e = _t.DEFAULT_IMAGE, t = _t.DEFAULT_MAPPING, n = 1001, r = 1001, s = 1006, o = 1008, a = 1023, c = 1009, l = _t.DEFAULT_ANISOTROPY, u = "") {
    super();
    this.isTexture = true;
    Object.defineProperty(this, "id", {
      value: Ba++
    });
    this.uuid = ri();
    this.name = "";
    this.source = new Cr(e);
    this.mipmaps = [];
    this.mapping = t;
    this.channel = 0;
    this.wrapS = n;
    this.wrapT = r;
    this.magFilter = s;
    this.minFilter = o;
    this.anisotropy = l;
    this.format = a;
    this.internalFormat = null;
    this.type = c;
    this.offset = new ke(0, 0);
    this.repeat = new ke(1, 1);
    this.center = new ke(0, 0);
    this.rotation = 0;
    this.matrixAutoUpdate = true;
    this.matrix = new Pe();
    this.generateMipmaps = true;
    this.premultiplyAlpha = false;
    this.flipY = true;
    this.unpackAlignment = 4;
    this.colorSpace = u;
    this.userData = {};
    this.updateRanges = [];
    this.version = 0;
    this.onUpdate = null;
    this.renderTarget = null;
    this.isRenderTargetTexture = false;
    this.isArrayTexture = !!e && !!e.depth && !!(e.depth > 1);
    this.pmremVersion = 0;
  }
  get width() {
    return this.source.getSize(ji).x;
  }
  get height() {
    return this.source.getSize(ji).y;
  }
  get depth() {
    return this.source.getSize(ji).z;
  }
  get image() {
    return this.source.data;
  }
  set image(e = null) {
    this.source.data = e;
  }
  updateMatrix() {
    this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
  }
  addUpdateRange(e, t) {
    this.updateRanges.push({
      start: e,
      count: t
    });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.name = e.name;
    this.source = e.source;
    this.mipmaps = e.mipmaps.slice(0);
    this.mapping = e.mapping;
    this.channel = e.channel;
    this.wrapS = e.wrapS;
    this.wrapT = e.wrapT;
    this.magFilter = e.magFilter;
    this.minFilter = e.minFilter;
    this.anisotropy = e.anisotropy;
    this.format = e.format;
    this.internalFormat = e.internalFormat;
    this.type = e.type;
    this.offset.copy(e.offset);
    this.repeat.copy(e.repeat);
    this.center.copy(e.center);
    this.rotation = e.rotation;
    this.matrixAutoUpdate = e.matrixAutoUpdate;
    this.matrix.copy(e.matrix);
    this.generateMipmaps = e.generateMipmaps;
    this.premultiplyAlpha = e.premultiplyAlpha;
    this.flipY = e.flipY;
    this.unpackAlignment = e.unpackAlignment;
    this.colorSpace = e.colorSpace;
    this.renderTarget = e.renderTarget;
    this.isRenderTargetTexture = e.isRenderTargetTexture;
    this.isArrayTexture = e.isArrayTexture;
    this.userData = JSON.parse(JSON.stringify(e.userData));
    this.needsUpdate = true;
    return this;
  }
  setValues(e) {
    for (const t in e) {
      const n = e[t];
      if (n === undefined) {
        Ce(`Texture.setValues(): parameter '${t}' has value of undefined.`);
        continue;
      }
      const r = this[t];
      if (r === undefined) {
        Ce(`Texture.setValues(): property '${t}' does not exist.`);
        continue;
      }
      if (r && n && r.isVector2 && n.isVector2 || r && n && r.isVector3 && n.isVector3 || r && n && r.isMatrix3 && n.isMatrix3) {
        r.copy(n);
      } else {
        this[t] = n;
      }
    }
  }
  toJSON(e) {
    const t = e === undefined || typeof e == "string";
    if (!t && e.textures[this.uuid] !== undefined) {
      return e.textures[this.uuid];
    }
    const n = {
      metadata: {
        version: 4.7,
        type: "Texture",
        generator: "Texture.toJSON"
      },
      uuid: this.uuid,
      name: this.name,
      image: this.source.toJSON(e).uuid,
      mapping: this.mapping,
      channel: this.channel,
      repeat: [this.repeat.x, this.repeat.y],
      offset: [this.offset.x, this.offset.y],
      center: [this.center.x, this.center.y],
      rotation: this.rotation,
      wrap: [this.wrapS, this.wrapT],
      format: this.format,
      internalFormat: this.internalFormat,
      type: this.type,
      colorSpace: this.colorSpace,
      minFilter: this.minFilter,
      magFilter: this.magFilter,
      anisotropy: this.anisotropy,
      flipY: this.flipY,
      generateMipmaps: this.generateMipmaps,
      premultiplyAlpha: this.premultiplyAlpha,
      unpackAlignment: this.unpackAlignment
    };
    if (Object.keys(this.userData).length > 0) {
      n.userData = this.userData;
    }
    if (!t) {
      e.textures[this.uuid] = n;
    }
    return n;
  }
  dispose() {
    this.dispatchEvent({
      type: "dispose"
    });
  }
  transformUv(e) {
    if (this.mapping !== 300) {
      return e;
    }
    e.applyMatrix3(this.matrix);
    if (e.x < 0 || e.x > 1) {
      switch (this.wrapS) {
        case 1000:
          e.x = e.x - Math.floor(e.x);
          break;
        case 1001:
          e.x = e.x < 0 ? 0 : 1;
          break;
        case 1002:
          if (Math.abs(Math.floor(e.x) % 2) === 1) {
            e.x = Math.ceil(e.x) - e.x;
          } else {
            e.x = e.x - Math.floor(e.x);
          }
          break;
      }
    }
    if (e.y < 0 || e.y > 1) {
      switch (this.wrapT) {
        case 1000:
          e.y = e.y - Math.floor(e.y);
          break;
        case 1001:
          e.y = e.y < 0 ? 0 : 1;
          break;
        case 1002:
          if (Math.abs(Math.floor(e.y) % 2) === 1) {
            e.y = Math.ceil(e.y) - e.y;
          } else {
            e.y = e.y - Math.floor(e.y);
          }
          break;
      }
    }
    if (this.flipY) {
      e.y = 1 - e.y;
    }
    return e;
  }
  set needsUpdate(e) {
    if (e === true) {
      this.version++;
      this.source.needsUpdate = true;
    }
  }
  set needsPMREMUpdate(e) {
    if (e === true) {
      this.pmremVersion++;
    }
  }
}
_t.DEFAULT_IMAGE = null;
_t.DEFAULT_MAPPING = 300;
_t.DEFAULT_ANISOTROPY = 1;
class ot {
  constructor(e = 0, t = 0, n = 0, r = 1) {
    ot.prototype.isVector4 = true;
    this.x = e;
    this.y = t;
    this.z = n;
    this.w = r;
  }
  get width() {
    return this.z;
  }
  set width(e) {
    this.z = e;
  }
  get height() {
    return this.w;
  }
  set height(e) {
    this.w = e;
  }
  set(e, t, n, r) {
    this.x = e;
    this.y = t;
    this.z = n;
    this.w = r;
    return this;
  }
  setScalar(e) {
    this.x = e;
    this.y = e;
    this.z = e;
    this.w = e;
    return this;
  }
  setX(e) {
    this.x = e;
    return this;
  }
  setY(e) {
    this.y = e;
    return this;
  }
  setZ(e) {
    this.z = e;
    return this;
  }
  setW(e) {
    this.w = e;
    return this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      case 3:
        this.w = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  copy(e) {
    this.x = e.x;
    this.y = e.y;
    this.z = e.z;
    this.w = e.w !== undefined ? e.w : 1;
    return this;
  }
  add(e) {
    this.x += e.x;
    this.y += e.y;
    this.z += e.z;
    this.w += e.w;
    return this;
  }
  addScalar(e) {
    this.x += e;
    this.y += e;
    this.z += e;
    this.w += e;
    return this;
  }
  addVectors(e, t) {
    this.x = e.x + t.x;
    this.y = e.y + t.y;
    this.z = e.z + t.z;
    this.w = e.w + t.w;
    return this;
  }
  addScaledVector(e, t) {
    this.x += e.x * t;
    this.y += e.y * t;
    this.z += e.z * t;
    this.w += e.w * t;
    return this;
  }
  sub(e) {
    this.x -= e.x;
    this.y -= e.y;
    this.z -= e.z;
    this.w -= e.w;
    return this;
  }
  subScalar(e) {
    this.x -= e;
    this.y -= e;
    this.z -= e;
    this.w -= e;
    return this;
  }
  subVectors(e, t) {
    this.x = e.x - t.x;
    this.y = e.y - t.y;
    this.z = e.z - t.z;
    this.w = e.w - t.w;
    return this;
  }
  multiply(e) {
    this.x *= e.x;
    this.y *= e.y;
    this.z *= e.z;
    this.w *= e.w;
    return this;
  }
  multiplyScalar(e) {
    this.x *= e;
    this.y *= e;
    this.z *= e;
    this.w *= e;
    return this;
  }
  applyMatrix4(e) {
    const t = this.x;
    const n = this.y;
    const r = this.z;
    const s = this.w;
    const o = e.elements;
    this.x = o[0] * t + o[4] * n + o[8] * r + o[12] * s;
    this.y = o[1] * t + o[5] * n + o[9] * r + o[13] * s;
    this.z = o[2] * t + o[6] * n + o[10] * r + o[14] * s;
    this.w = o[3] * t + o[7] * n + o[11] * r + o[15] * s;
    return this;
  }
  divide(e) {
    this.x /= e.x;
    this.y /= e.y;
    this.z /= e.z;
    this.w /= e.w;
    return this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  setAxisAngleFromQuaternion(e) {
    this.w = Math.acos(e.w) * 2;
    const t = Math.sqrt(1 - e.w * e.w);
    if (t < 0.0001) {
      this.x = 1;
      this.y = 0;
      this.z = 0;
    } else {
      this.x = e.x / t;
      this.y = e.y / t;
      this.z = e.z / t;
    }
    return this;
  }
  setAxisAngleFromRotationMatrix(e) {
    let t;
    let n;
    let r;
    let s;
    const c = e.elements;
    const l = c[0];
    const u = c[4];
    const f = c[8];
    const d = c[1];
    const p = c[5];
    const x = c[9];
    const _ = c[2];
    const m = c[6];
    const h = c[10];
    if (Math.abs(u - d) < 0.01 && Math.abs(f - _) < 0.01 && Math.abs(x - m) < 0.01) {
      if (Math.abs(u + d) < 0.1 && Math.abs(f + _) < 0.1 && Math.abs(x + m) < 0.1 && Math.abs(l + p + h - 3) < 0.1) {
        this.set(1, 0, 0, 0);
        return this;
      }
      t = Math.PI;
      const y = (l + 1) / 2;
      const T = (p + 1) / 2;
      const A = (h + 1) / 2;
      const R = (u + d) / 4;
      const w = (f + _) / 4;
      const U = (x + m) / 4;
      if (y > T && y > A) {
        if (y < 0.01) {
          n = 0;
          r = 0.707106781;
          s = 0.707106781;
        } else {
          n = Math.sqrt(y);
          r = R / n;
          s = w / n;
        }
      } else if (T > A) {
        if (T < 0.01) {
          n = 0.707106781;
          r = 0;
          s = 0.707106781;
        } else {
          r = Math.sqrt(T);
          n = R / r;
          s = U / r;
        }
      } else if (A < 0.01) {
        n = 0.707106781;
        r = 0.707106781;
        s = 0;
      } else {
        s = Math.sqrt(A);
        n = w / s;
        r = U / s;
      }
      this.set(n, r, s, t);
      return this;
    }
    let b = Math.sqrt((m - x) * (m - x) + (f - _) * (f - _) + (d - u) * (d - u));
    if (Math.abs(b) < 0.001) {
      b = 1;
    }
    this.x = (m - x) / b;
    this.y = (f - _) / b;
    this.z = (d - u) / b;
    this.w = Math.acos((l + p + h - 1) / 2);
    return this;
  }
  setFromMatrixPosition(e) {
    const t = e.elements;
    this.x = t[12];
    this.y = t[13];
    this.z = t[14];
    this.w = t[15];
    return this;
  }
  min(e) {
    this.x = Math.min(this.x, e.x);
    this.y = Math.min(this.y, e.y);
    this.z = Math.min(this.z, e.z);
    this.w = Math.min(this.w, e.w);
    return this;
  }
  max(e) {
    this.x = Math.max(this.x, e.x);
    this.y = Math.max(this.y, e.y);
    this.z = Math.max(this.z, e.z);
    this.w = Math.max(this.w, e.w);
    return this;
  }
  clamp(e, t) {
    this.x = Be(this.x, e.x, t.x);
    this.y = Be(this.y, e.y, t.y);
    this.z = Be(this.z, e.z, t.z);
    this.w = Be(this.w, e.w, t.w);
    return this;
  }
  clampScalar(e, t) {
    this.x = Be(this.x, e, t);
    this.y = Be(this.y, e, t);
    this.z = Be(this.z, e, t);
    this.w = Be(this.w, e, t);
    return this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Be(n, e, t));
  }
  floor() {
    this.x = Math.floor(this.x);
    this.y = Math.floor(this.y);
    this.z = Math.floor(this.z);
    this.w = Math.floor(this.w);
    return this;
  }
  ceil() {
    this.x = Math.ceil(this.x);
    this.y = Math.ceil(this.y);
    this.z = Math.ceil(this.z);
    this.w = Math.ceil(this.w);
    return this;
  }
  round() {
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
    this.z = Math.round(this.z);
    this.w = Math.round(this.w);
    return this;
  }
  roundToZero() {
    this.x = Math.trunc(this.x);
    this.y = Math.trunc(this.y);
    this.z = Math.trunc(this.z);
    this.w = Math.trunc(this.w);
    return this;
  }
  negate() {
    this.x = -this.x;
    this.y = -this.y;
    this.z = -this.z;
    this.w = -this.w;
    return this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    this.x += (e.x - this.x) * t;
    this.y += (e.y - this.y) * t;
    this.z += (e.z - this.z) * t;
    this.w += (e.w - this.w) * t;
    return this;
  }
  lerpVectors(e, t, n) {
    this.x = e.x + (t.x - e.x) * n;
    this.y = e.y + (t.y - e.y) * n;
    this.z = e.z + (t.z - e.z) * n;
    this.w = e.w + (t.w - e.w) * n;
    return this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w;
  }
  fromArray(e, t = 0) {
    this.x = e[t];
    this.y = e[t + 1];
    this.z = e[t + 2];
    this.w = e[t + 3];
    return this;
  }
  toArray(e = [], t = 0) {
    e[t] = this.x;
    e[t + 1] = this.y;
    e[t + 2] = this.z;
    e[t + 3] = this.w;
    return e;
  }
  fromBufferAttribute(e, t) {
    this.x = e.getX(t);
    this.y = e.getY(t);
    this.z = e.getZ(t);
    this.w = e.getW(t);
    return this;
  }
  random() {
    this.x = Math.random();
    this.y = Math.random();
    this.z = Math.random();
    this.w = Math.random();
    return this;
  }
  *[Symbol.iterator]() {
    yield this.x;
    yield this.y;
    yield this.z;
    yield this.w;
  }
}
class Oa extends zn {
  constructor(e = 1, t = 1, n = {}) {
    super();
    n = Object.assign({
      generateMipmaps: false,
      internalFormat: null,
      minFilter: 1006,
      depthBuffer: true,
      stencilBuffer: false,
      resolveDepthBuffer: true,
      resolveStencilBuffer: true,
      depthTexture: null,
      samples: 0,
      count: 1,
      depth: 1,
      multiview: false
    }, n);
    this.isRenderTarget = true;
    this.width = e;
    this.height = t;
    this.depth = n.depth;
    this.scissor = new ot(0, 0, e, t);
    this.scissorTest = false;
    this.viewport = new ot(0, 0, e, t);
    const r = {
      width: e,
      height: t,
      depth: n.depth
    };
    const s = new _t(r);
    this.textures = [];
    const o = n.count;
    for (let a = 0; a < o; a++) {
      this.textures[a] = s.clone();
      this.textures[a].isRenderTargetTexture = true;
      this.textures[a].renderTarget = this;
    }
    this._setTextureOptions(n);
    this.depthBuffer = n.depthBuffer;
    this.stencilBuffer = n.stencilBuffer;
    this.resolveDepthBuffer = n.resolveDepthBuffer;
    this.resolveStencilBuffer = n.resolveStencilBuffer;
    this._depthTexture = null;
    this.depthTexture = n.depthTexture;
    this.samples = n.samples;
    this.multiview = n.multiview;
  }
  _setTextureOptions(e = {}) {
    const t = {
      minFilter: 1006,
      generateMipmaps: false,
      flipY: false,
      internalFormat: null
    };
    if (e.mapping !== undefined) {
      t.mapping = e.mapping;
    }
    if (e.wrapS !== undefined) {
      t.wrapS = e.wrapS;
    }
    if (e.wrapT !== undefined) {
      t.wrapT = e.wrapT;
    }
    if (e.wrapR !== undefined) {
      t.wrapR = e.wrapR;
    }
    if (e.magFilter !== undefined) {
      t.magFilter = e.magFilter;
    }
    if (e.minFilter !== undefined) {
      t.minFilter = e.minFilter;
    }
    if (e.format !== undefined) {
      t.format = e.format;
    }
    if (e.type !== undefined) {
      t.type = e.type;
    }
    if (e.anisotropy !== undefined) {
      t.anisotropy = e.anisotropy;
    }
    if (e.colorSpace !== undefined) {
      t.colorSpace = e.colorSpace;
    }
    if (e.flipY !== undefined) {
      t.flipY = e.flipY;
    }
    if (e.generateMipmaps !== undefined) {
      t.generateMipmaps = e.generateMipmaps;
    }
    if (e.internalFormat !== undefined) {
      t.internalFormat = e.internalFormat;
    }
    for (let n = 0; n < this.textures.length; n++) {
      this.textures[n].setValues(t);
    }
  }
  get texture() {
    return this.textures[0];
  }
  set texture(e) {
    this.textures[0] = e;
  }
  set depthTexture(e) {
    if (this._depthTexture !== null) {
      this._depthTexture.renderTarget = null;
    }
    if (e !== null) {
      e.renderTarget = this;
    }
    this._depthTexture = e;
  }
  get depthTexture() {
    return this._depthTexture;
  }
  setSize(e, t, n = 1) {
    if (this.width !== e || this.height !== t || this.depth !== n) {
      this.width = e;
      this.height = t;
      this.depth = n;
      for (let r = 0, s = this.textures.length; r < s; r++) {
        this.textures[r].image.width = e;
        this.textures[r].image.height = t;
        this.textures[r].image.depth = n;
        if (this.textures[r].isData3DTexture !== true) {
          this.textures[r].isArrayTexture = this.textures[r].image.depth > 1;
        }
      }
      this.dispose();
    }
    this.viewport.set(0, 0, e, t);
    this.scissor.set(0, 0, e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.width = e.width;
    this.height = e.height;
    this.depth = e.depth;
    this.scissor.copy(e.scissor);
    this.scissorTest = e.scissorTest;
    this.viewport.copy(e.viewport);
    this.textures.length = 0;
    for (let t = 0, n = e.textures.length; t < n; t++) {
      this.textures[t] = e.textures[t].clone();
      this.textures[t].isRenderTargetTexture = true;
      this.textures[t].renderTarget = this;
      const r = Object.assign({}, e.textures[t].image);
      this.textures[t].source = new Cr(r);
    }
    this.depthBuffer = e.depthBuffer;
    this.stencilBuffer = e.stencilBuffer;
    this.resolveDepthBuffer = e.resolveDepthBuffer;
    this.resolveStencilBuffer = e.resolveStencilBuffer;
    if (e.depthTexture !== null) {
      this.depthTexture = e.depthTexture.clone();
    }
    this.samples = e.samples;
    return this;
  }
  dispose() {
    this.dispatchEvent({
      type: "dispose"
    });
  }
}
class Ht extends Oa {
  constructor(e = 1, t = 1, n = {}) {
    super(e, t, n);
    this.isWebGLRenderTarget = true;
  }
}
class ks extends _t {
  constructor(e = null, t = 1, n = 1, r = 1) {
    super(null);
    this.isDataArrayTexture = true;
    this.image = {
      data: e,
      width: t,
      height: n,
      depth: r
    };
    this.magFilter = 1003;
    this.minFilter = 1003;
    this.wrapR = 1001;
    this.generateMipmaps = false;
    this.flipY = false;
    this.unpackAlignment = 1;
    this.layerUpdates = new Set();
  }
  addLayerUpdate(e) {
    this.layerUpdates.add(e);
  }
  clearLayerUpdates() {
    this.layerUpdates.clear();
  }
}
class Ga extends _t {
  constructor(e = null, t = 1, n = 1, r = 1) {
    super(null);
    this.isData3DTexture = true;
    this.image = {
      data: e,
      width: t,
      height: n,
      depth: r
    };
    this.magFilter = 1003;
    this.minFilter = 1003;
    this.wrapR = 1001;
    this.generateMipmaps = false;
    this.flipY = false;
    this.unpackAlignment = 1;
  }
}
class xn {
  constructor(e = new B(Infinity, Infinity, Infinity), t = new B(-Infinity, -Infinity, -Infinity)) {
    this.isBox3 = true;
    this.min = e;
    this.max = t;
  }
  set(e, t) {
    this.min.copy(e);
    this.max.copy(t);
    return this;
  }
  setFromArray(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t += 3) {
      this.expandByPoint(Lt.fromArray(e, t));
    }
    return this;
  }
  setFromBufferAttribute(e) {
    this.makeEmpty();
    for (let t = 0, n = e.count; t < n; t++) {
      this.expandByPoint(Lt.fromBufferAttribute(e, t));
    }
    return this;
  }
  setFromPoints(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t++) {
      this.expandByPoint(e[t]);
    }
    return this;
  }
  setFromCenterAndSize(e, t) {
    const n = Lt.copy(t).multiplyScalar(0.5);
    this.min.copy(e).sub(n);
    this.max.copy(e).add(n);
    return this;
  }
  setFromObject(e, t = false) {
    this.makeEmpty();
    return this.expandByObject(e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.min.copy(e.min);
    this.max.copy(e.max);
    return this;
  }
  makeEmpty() {
    this.min.x = this.min.y = this.min.z = Infinity;
    this.max.x = this.max.y = this.max.z = -Infinity;
    return this;
  }
  isEmpty() {
    return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
  }
  getCenter(e) {
    if (this.isEmpty()) {
      return e.set(0, 0, 0);
    } else {
      return e.addVectors(this.min, this.max).multiplyScalar(0.5);
    }
  }
  getSize(e) {
    if (this.isEmpty()) {
      return e.set(0, 0, 0);
    } else {
      return e.subVectors(this.max, this.min);
    }
  }
  expandByPoint(e) {
    this.min.min(e);
    this.max.max(e);
    return this;
  }
  expandByVector(e) {
    this.min.sub(e);
    this.max.add(e);
    return this;
  }
  expandByScalar(e) {
    this.min.addScalar(-e);
    this.max.addScalar(e);
    return this;
  }
  expandByObject(e, t = false) {
    e.updateWorldMatrix(false, false);
    const n = e.geometry;
    if (n !== undefined) {
      const s = n.getAttribute("position");
      if (t === true && s !== undefined && e.isInstancedMesh !== true) {
        for (let o = 0, a = s.count; o < a; o++) {
          if (e.isMesh === true) {
            e.getVertexPosition(o, Lt);
          } else {
            Lt.fromBufferAttribute(s, o);
          }
          Lt.applyMatrix4(e.matrixWorld);
          this.expandByPoint(Lt);
        }
      } else {
        if (e.boundingBox !== undefined) {
          if (e.boundingBox === null) {
            e.computeBoundingBox();
          }
          fi.copy(e.boundingBox);
        } else {
          if (n.boundingBox === null) {
            n.computeBoundingBox();
          }
          fi.copy(n.boundingBox);
        }
        fi.applyMatrix4(e.matrixWorld);
        this.union(fi);
      }
    }
    const r = e.children;
    for (let s = 0, o = r.length; s < o; s++) {
      this.expandByObject(r[s], t);
    }
    return this;
  }
  containsPoint(e) {
    return e.x >= this.min.x && e.x <= this.max.x && e.y >= this.min.y && e.y <= this.max.y && e.z >= this.min.z && e.z <= this.max.z;
  }
  containsBox(e) {
    return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z;
  }
  getParameter(e, t) {
    return t.set((e.x - this.min.x) / (this.max.x - this.min.x), (e.y - this.min.y) / (this.max.y - this.min.y), (e.z - this.min.z) / (this.max.z - this.min.z));
  }
  intersectsBox(e) {
    return e.max.x >= this.min.x && e.min.x <= this.max.x && e.max.y >= this.min.y && e.min.y <= this.max.y && e.max.z >= this.min.z && e.min.z <= this.max.z;
  }
  intersectsSphere(e) {
    this.clampPoint(e.center, Lt);
    return Lt.distanceToSquared(e.center) <= e.radius * e.radius;
  }
  intersectsPlane(e) {
    let t;
    let n;
    if (e.normal.x > 0) {
      t = e.normal.x * this.min.x;
      n = e.normal.x * this.max.x;
    } else {
      t = e.normal.x * this.max.x;
      n = e.normal.x * this.min.x;
    }
    if (e.normal.y > 0) {
      t += e.normal.y * this.min.y;
      n += e.normal.y * this.max.y;
    } else {
      t += e.normal.y * this.max.y;
      n += e.normal.y * this.min.y;
    }
    if (e.normal.z > 0) {
      t += e.normal.z * this.min.z;
      n += e.normal.z * this.max.z;
    } else {
      t += e.normal.z * this.max.z;
      n += e.normal.z * this.min.z;
    }
    return t <= -e.constant && n >= -e.constant;
  }
  intersectsTriangle(e) {
    if (this.isEmpty()) {
      return false;
    }
    this.getCenter(Wn);
    di.subVectors(this.max, Wn);
    Mn.subVectors(e.a, Wn);
    En.subVectors(e.b, Wn);
    Tn.subVectors(e.c, Wn);
    en.subVectors(En, Mn);
    tn.subVectors(Tn, En);
    un.subVectors(Mn, Tn);
    let t = [0, -en.z, en.y, 0, -tn.z, tn.y, 0, -un.z, un.y, en.z, 0, -en.x, tn.z, 0, -tn.x, un.z, 0, -un.x, -en.y, en.x, 0, -tn.y, tn.x, 0, -un.y, un.x, 0];
    if (!Ji(t, Mn, En, Tn, di) || (t = [1, 0, 0, 0, 1, 0, 0, 0, 1], !Ji(t, Mn, En, Tn, di))) {
      return false;
    } else {
      pi.crossVectors(en, tn);
      t = [pi.x, pi.y, pi.z];
      return Ji(t, Mn, En, Tn, di);
    }
  }
  clampPoint(e, t) {
    return t.copy(e).clamp(this.min, this.max);
  }
  distanceToPoint(e) {
    return this.clampPoint(e, Lt).distanceTo(e);
  }
  getBoundingSphere(e) {
    if (this.isEmpty()) {
      e.makeEmpty();
    } else {
      this.getCenter(e.center);
      e.radius = this.getSize(Lt).length() * 0.5;
    }
    return e;
  }
  intersect(e) {
    this.min.max(e.min);
    this.max.min(e.max);
    if (this.isEmpty()) {
      this.makeEmpty();
    }
    return this;
  }
  union(e) {
    this.min.min(e.min);
    this.max.max(e.max);
    return this;
  }
  applyMatrix4(e) {
    if (this.isEmpty()) {
      return this;
    } else {
      $t[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e);
      $t[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e);
      $t[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e);
      $t[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e);
      $t[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e);
      $t[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e);
      $t[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e);
      $t[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e);
      this.setFromPoints($t);
      return this;
    }
  }
  translate(e) {
    this.min.add(e);
    this.max.add(e);
    return this;
  }
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
  toJSON() {
    return {
      min: this.min.toArray(),
      max: this.max.toArray()
    };
  }
  fromJSON(e) {
    this.min.fromArray(e.min);
    this.max.fromArray(e.max);
    return this;
  }
}
const $t = [new B(), new B(), new B(), new B(), new B(), new B(), new B(), new B()];
const Lt = new B();
const fi = new xn();
const Mn = new B();
const En = new B();
const Tn = new B();
const en = new B();
const tn = new B();
const un = new B();
const Wn = new B();
const di = new B();
const pi = new B();
const hn = new B();
function Ji(i, e, t, n, r) {
  for (let s = 0, o = i.length - 3; s <= o; s += 3) {
    hn.fromArray(i, s);
    const a = r.x * Math.abs(hn.x) + r.y * Math.abs(hn.y) + r.z * Math.abs(hn.z);
    const c = e.dot(hn);
    const l = t.dot(hn);
    const u = n.dot(hn);
    if (Math.max(-Math.max(c, l, u), Math.min(c, l, u)) > a) {
      return false;
    }
  }
  return true;
}
const za = new xn();
const Xn = new B();
const Qi = new B();
class ai {
  constructor(e = new B(), t = -1) {
    this.isSphere = true;
    this.center = e;
    this.radius = t;
  }
  set(e, t) {
    this.center.copy(e);
    this.radius = t;
    return this;
  }
  setFromPoints(e, t) {
    const n = this.center;
    if (t !== undefined) {
      n.copy(t);
    } else {
      za.setFromPoints(e).getCenter(n);
    }
    let r = 0;
    for (let s = 0, o = e.length; s < o; s++) {
      r = Math.max(r, n.distanceToSquared(e[s]));
    }
    this.radius = Math.sqrt(r);
    return this;
  }
  copy(e) {
    this.center.copy(e.center);
    this.radius = e.radius;
    return this;
  }
  isEmpty() {
    return this.radius < 0;
  }
  makeEmpty() {
    this.center.set(0, 0, 0);
    this.radius = -1;
    return this;
  }
  containsPoint(e) {
    return e.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  distanceToPoint(e) {
    return e.distanceTo(this.center) - this.radius;
  }
  intersectsSphere(e) {
    const t = this.radius + e.radius;
    return e.center.distanceToSquared(this.center) <= t * t;
  }
  intersectsBox(e) {
    return e.intersectsSphere(this);
  }
  intersectsPlane(e) {
    return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
  }
  clampPoint(e, t) {
    const n = this.center.distanceToSquared(e);
    t.copy(e);
    if (n > this.radius * this.radius) {
      t.sub(this.center).normalize();
      t.multiplyScalar(this.radius).add(this.center);
    }
    return t;
  }
  getBoundingBox(e) {
    if (this.isEmpty()) {
      e.makeEmpty();
      return e;
    } else {
      e.set(this.center, this.center);
      e.expandByScalar(this.radius);
      return e;
    }
  }
  applyMatrix4(e) {
    this.center.applyMatrix4(e);
    this.radius = this.radius * e.getMaxScaleOnAxis();
    return this;
  }
  translate(e) {
    this.center.add(e);
    return this;
  }
  expandByPoint(e) {
    if (this.isEmpty()) {
      this.center.copy(e);
      this.radius = 0;
      return this;
    }
    Xn.subVectors(e, this.center);
    const t = Xn.lengthSq();
    if (t > this.radius * this.radius) {
      const n = Math.sqrt(t);
      const r = (n - this.radius) * 0.5;
      this.center.addScaledVector(Xn, r / n);
      this.radius += r;
    }
    return this;
  }
  union(e) {
    if (e.isEmpty()) {
      return this;
    } else if (this.isEmpty()) {
      this.copy(e);
      return this;
    } else {
      if (this.center.equals(e.center) === true) {
        this.radius = Math.max(this.radius, e.radius);
      } else {
        Qi.subVectors(e.center, this.center).setLength(e.radius);
        this.expandByPoint(Xn.copy(e.center).add(Qi));
        this.expandByPoint(Xn.copy(e.center).sub(Qi));
      }
      return this;
    }
  }
  equals(e) {
    return e.center.equals(this.center) && e.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  toJSON() {
    return {
      radius: this.radius,
      center: this.center.toArray()
    };
  }
  fromJSON(e) {
    this.radius = e.radius;
    this.center.fromArray(e.center);
    return this;
  }
}
const Kt = new B();
const er = new B();
const mi = new B();
const nn = new B();
const tr = new B();
const gi = new B();
const nr = new B();
class Va {
  constructor(e = new B(), t = new B(0, 0, -1)) {
    this.origin = e;
    this.direction = t;
  }
  set(e, t) {
    this.origin.copy(e);
    this.direction.copy(t);
    return this;
  }
  copy(e) {
    this.origin.copy(e.origin);
    this.direction.copy(e.direction);
    return this;
  }
  at(e, t) {
    return t.copy(this.origin).addScaledVector(this.direction, e);
  }
  lookAt(e) {
    this.direction.copy(e).sub(this.origin).normalize();
    return this;
  }
  recast(e) {
    this.origin.copy(this.at(e, Kt));
    return this;
  }
  closestPointToPoint(e, t) {
    t.subVectors(e, this.origin);
    const n = t.dot(this.direction);
    if (n < 0) {
      return t.copy(this.origin);
    } else {
      return t.copy(this.origin).addScaledVector(this.direction, n);
    }
  }
  distanceToPoint(e) {
    return Math.sqrt(this.distanceSqToPoint(e));
  }
  distanceSqToPoint(e) {
    const t = Kt.subVectors(e, this.origin).dot(this.direction);
    if (t < 0) {
      return this.origin.distanceToSquared(e);
    } else {
      Kt.copy(this.origin).addScaledVector(this.direction, t);
      return Kt.distanceToSquared(e);
    }
  }
  distanceSqToSegment(e, t, n, r) {
    er.copy(e).add(t).multiplyScalar(0.5);
    mi.copy(t).sub(e).normalize();
    nn.copy(this.origin).sub(er);
    const s = e.distanceTo(t) * 0.5;
    const o = -this.direction.dot(mi);
    const a = nn.dot(this.direction);
    const c = -nn.dot(mi);
    const l = nn.lengthSq();
    const u = Math.abs(1 - o * o);
    let f;
    let d;
    let p;
    let x;
    if (u > 0) {
      f = o * c - a;
      d = o * a - c;
      x = s * u;
      if (f >= 0) {
        if (d >= -x) {
          if (d <= x) {
            const _ = 1 / u;
            f *= _;
            d *= _;
            p = f * (f + o * d + a * 2) + d * (o * f + d + c * 2) + l;
          } else {
            d = s;
            f = Math.max(0, -(o * d + a));
            p = -f * f + d * (d + c * 2) + l;
          }
        } else {
          d = -s;
          f = Math.max(0, -(o * d + a));
          p = -f * f + d * (d + c * 2) + l;
        }
      } else if (d <= -x) {
        f = Math.max(0, -(-o * s + a));
        d = f > 0 ? -s : Math.min(Math.max(-s, -c), s);
        p = -f * f + d * (d + c * 2) + l;
      } else if (d <= x) {
        f = 0;
        d = Math.min(Math.max(-s, -c), s);
        p = d * (d + c * 2) + l;
      } else {
        f = Math.max(0, -(o * s + a));
        d = f > 0 ? s : Math.min(Math.max(-s, -c), s);
        p = -f * f + d * (d + c * 2) + l;
      }
    } else {
      d = o > 0 ? -s : s;
      f = Math.max(0, -(o * d + a));
      p = -f * f + d * (d + c * 2) + l;
    }
    if (n) {
      n.copy(this.origin).addScaledVector(this.direction, f);
    }
    if (r) {
      r.copy(er).addScaledVector(mi, d);
    }
    return p;
  }
  intersectSphere(e, t) {
    Kt.subVectors(e.center, this.origin);
    const n = Kt.dot(this.direction);
    const r = Kt.dot(Kt) - n * n;
    const s = e.radius * e.radius;
    if (r > s) {
      return null;
    }
    const o = Math.sqrt(s - r);
    const a = n - o;
    const c = n + o;
    if (c < 0) {
      return null;
    } else if (a < 0) {
      return this.at(c, t);
    } else {
      return this.at(a, t);
    }
  }
  intersectsSphere(e) {
    if (e.radius < 0) {
      return false;
    } else {
      return this.distanceSqToPoint(e.center) <= e.radius * e.radius;
    }
  }
  distanceToPlane(e) {
    const t = e.normal.dot(this.direction);
    if (t === 0) {
      if (e.distanceToPoint(this.origin) === 0) {
        return 0;
      } else {
        return null;
      }
    }
    const n = -(this.origin.dot(e.normal) + e.constant) / t;
    if (n >= 0) {
      return n;
    } else {
      return null;
    }
  }
  intersectPlane(e, t) {
    const n = this.distanceToPlane(e);
    if (n === null) {
      return null;
    } else {
      return this.at(n, t);
    }
  }
  intersectsPlane(e) {
    const t = e.distanceToPoint(this.origin);
    return t === 0 || e.normal.dot(this.direction) * t < 0;
  }
  intersectBox(e, t) {
    let n;
    let r;
    let s;
    let o;
    let a;
    let c;
    const l = 1 / this.direction.x;
    const u = 1 / this.direction.y;
    const f = 1 / this.direction.z;
    const d = this.origin;
    if (l >= 0) {
      n = (e.min.x - d.x) * l;
      r = (e.max.x - d.x) * l;
    } else {
      n = (e.max.x - d.x) * l;
      r = (e.min.x - d.x) * l;
    }
    if (u >= 0) {
      s = (e.min.y - d.y) * u;
      o = (e.max.y - d.y) * u;
    } else {
      s = (e.max.y - d.y) * u;
      o = (e.min.y - d.y) * u;
    }
    if (n > o || s > r || ((s > n || isNaN(n)) && (n = s), (o < r || isNaN(r)) && (r = o), f >= 0 ? (a = (e.min.z - d.z) * f, c = (e.max.z - d.z) * f) : (a = (e.max.z - d.z) * f, c = (e.min.z - d.z) * f), n > c || a > r) || ((a > n || n !== n) && (n = a), (c < r || r !== r) && (r = c), r < 0)) {
      return null;
    } else {
      return this.at(n >= 0 ? n : r, t);
    }
  }
  intersectsBox(e) {
    return this.intersectBox(e, Kt) !== null;
  }
  intersectTriangle(e, t, n, r, s) {
    tr.subVectors(t, e);
    gi.subVectors(n, e);
    nr.crossVectors(tr, gi);
    let o = this.direction.dot(nr);
    let a;
    if (o > 0) {
      if (r) {
        return null;
      }
      a = 1;
    } else if (o < 0) {
      a = -1;
      o = -o;
    } else {
      return null;
    }
    nn.subVectors(this.origin, e);
    const c = a * this.direction.dot(gi.crossVectors(nn, gi));
    if (c < 0) {
      return null;
    }
    const l = a * this.direction.dot(tr.cross(nn));
    if (l < 0 || c + l > o) {
      return null;
    }
    const u = -a * nn.dot(nr);
    if (u < 0) {
      return null;
    } else {
      return this.at(u / o, s);
    }
  }
  applyMatrix4(e) {
    this.origin.applyMatrix4(e);
    this.direction.transformDirection(e);
    return this;
  }
  equals(e) {
    return e.origin.equals(this.origin) && e.direction.equals(this.direction);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class it {
  constructor(e, t, n, r, s, o, a, c, l, u, f, d, p, x, _, m) {
    it.prototype.isMatrix4 = true;
    this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
    if (e !== undefined) {
      this.set(e, t, n, r, s, o, a, c, l, u, f, d, p, x, _, m);
    }
  }
  set(e, t, n, r, s, o, a, c, l, u, f, d, p, x, _, m) {
    const h = this.elements;
    h[0] = e;
    h[4] = t;
    h[8] = n;
    h[12] = r;
    h[1] = s;
    h[5] = o;
    h[9] = a;
    h[13] = c;
    h[2] = l;
    h[6] = u;
    h[10] = f;
    h[14] = d;
    h[3] = p;
    h[7] = x;
    h[11] = _;
    h[15] = m;
    return this;
  }
  identity() {
    this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    return this;
  }
  clone() {
    return new it().fromArray(this.elements);
  }
  copy(e) {
    const t = this.elements;
    const n = e.elements;
    t[0] = n[0];
    t[1] = n[1];
    t[2] = n[2];
    t[3] = n[3];
    t[4] = n[4];
    t[5] = n[5];
    t[6] = n[6];
    t[7] = n[7];
    t[8] = n[8];
    t[9] = n[9];
    t[10] = n[10];
    t[11] = n[11];
    t[12] = n[12];
    t[13] = n[13];
    t[14] = n[14];
    t[15] = n[15];
    return this;
  }
  copyPosition(e) {
    const t = this.elements;
    const n = e.elements;
    t[12] = n[12];
    t[13] = n[13];
    t[14] = n[14];
    return this;
  }
  setFromMatrix3(e) {
    const t = e.elements;
    this.set(t[0], t[3], t[6], 0, t[1], t[4], t[7], 0, t[2], t[5], t[8], 0, 0, 0, 0, 1);
    return this;
  }
  extractBasis(e, t, n) {
    if (this.determinant() === 0) {
      e.set(1, 0, 0);
      t.set(0, 1, 0);
      n.set(0, 0, 1);
      return this;
    } else {
      e.setFromMatrixColumn(this, 0);
      t.setFromMatrixColumn(this, 1);
      n.setFromMatrixColumn(this, 2);
      return this;
    }
  }
  makeBasis(e, t, n) {
    this.set(e.x, t.x, n.x, 0, e.y, t.y, n.y, 0, e.z, t.z, n.z, 0, 0, 0, 0, 1);
    return this;
  }
  extractRotation(e) {
    if (e.determinant() === 0) {
      return this.identity();
    }
    const t = this.elements;
    const n = e.elements;
    const r = 1 / yn.setFromMatrixColumn(e, 0).length();
    const s = 1 / yn.setFromMatrixColumn(e, 1).length();
    const o = 1 / yn.setFromMatrixColumn(e, 2).length();
    t[0] = n[0] * r;
    t[1] = n[1] * r;
    t[2] = n[2] * r;
    t[3] = 0;
    t[4] = n[4] * s;
    t[5] = n[5] * s;
    t[6] = n[6] * s;
    t[7] = 0;
    t[8] = n[8] * o;
    t[9] = n[9] * o;
    t[10] = n[10] * o;
    t[11] = 0;
    t[12] = 0;
    t[13] = 0;
    t[14] = 0;
    t[15] = 1;
    return this;
  }
  makeRotationFromEuler(e) {
    const t = this.elements;
    const n = e.x;
    const r = e.y;
    const s = e.z;
    const o = Math.cos(n);
    const a = Math.sin(n);
    const c = Math.cos(r);
    const l = Math.sin(r);
    const u = Math.cos(s);
    const f = Math.sin(s);
    if (e.order === "XYZ") {
      const d = o * u;
      const p = o * f;
      const x = a * u;
      const _ = a * f;
      t[0] = c * u;
      t[4] = -c * f;
      t[8] = l;
      t[1] = p + x * l;
      t[5] = d - _ * l;
      t[9] = -a * c;
      t[2] = _ - d * l;
      t[6] = x + p * l;
      t[10] = o * c;
    } else if (e.order === "YXZ") {
      const d = c * u;
      const p = c * f;
      const x = l * u;
      const _ = l * f;
      t[0] = d + _ * a;
      t[4] = x * a - p;
      t[8] = o * l;
      t[1] = o * f;
      t[5] = o * u;
      t[9] = -a;
      t[2] = p * a - x;
      t[6] = _ + d * a;
      t[10] = o * c;
    } else if (e.order === "ZXY") {
      const d = c * u;
      const p = c * f;
      const x = l * u;
      const _ = l * f;
      t[0] = d - _ * a;
      t[4] = -o * f;
      t[8] = x + p * a;
      t[1] = p + x * a;
      t[5] = o * u;
      t[9] = _ - d * a;
      t[2] = -o * l;
      t[6] = a;
      t[10] = o * c;
    } else if (e.order === "ZYX") {
      const d = o * u;
      const p = o * f;
      const x = a * u;
      const _ = a * f;
      t[0] = c * u;
      t[4] = x * l - p;
      t[8] = d * l + _;
      t[1] = c * f;
      t[5] = _ * l + d;
      t[9] = p * l - x;
      t[2] = -l;
      t[6] = a * c;
      t[10] = o * c;
    } else if (e.order === "YZX") {
      const d = o * c;
      const p = o * l;
      const x = a * c;
      const _ = a * l;
      t[0] = c * u;
      t[4] = _ - d * f;
      t[8] = x * f + p;
      t[1] = f;
      t[5] = o * u;
      t[9] = -a * u;
      t[2] = -l * u;
      t[6] = p * f + x;
      t[10] = d - _ * f;
    } else if (e.order === "XZY") {
      const d = o * c;
      const p = o * l;
      const x = a * c;
      const _ = a * l;
      t[0] = c * u;
      t[4] = -f;
      t[8] = l * u;
      t[1] = d * f + _;
      t[5] = o * u;
      t[9] = p * f - x;
      t[2] = x * f - p;
      t[6] = a * u;
      t[10] = _ * f + d;
    }
    t[3] = 0;
    t[7] = 0;
    t[11] = 0;
    t[12] = 0;
    t[13] = 0;
    t[14] = 0;
    t[15] = 1;
    return this;
  }
  makeRotationFromQuaternion(e) {
    return this.compose(Ha, e, ka);
  }
  lookAt(e, t, n) {
    const r = this.elements;
    At.subVectors(e, t);
    if (At.lengthSq() === 0) {
      At.z = 1;
    }
    At.normalize();
    rn.crossVectors(n, At);
    if (rn.lengthSq() === 0) {
      if (Math.abs(n.z) === 1) {
        At.x += 0.0001;
      } else {
        At.z += 0.0001;
      }
      At.normalize();
      rn.crossVectors(n, At);
    }
    rn.normalize();
    _i.crossVectors(At, rn);
    r[0] = rn.x;
    r[4] = _i.x;
    r[8] = At.x;
    r[1] = rn.y;
    r[5] = _i.y;
    r[9] = At.y;
    r[2] = rn.z;
    r[6] = _i.z;
    r[10] = At.z;
    return this;
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements;
    const r = t.elements;
    const s = this.elements;
    const o = n[0];
    const a = n[4];
    const c = n[8];
    const l = n[12];
    const u = n[1];
    const f = n[5];
    const d = n[9];
    const p = n[13];
    const x = n[2];
    const _ = n[6];
    const m = n[10];
    const h = n[14];
    const b = n[3];
    const y = n[7];
    const T = n[11];
    const A = n[15];
    const R = r[0];
    const w = r[4];
    const U = r[8];
    const v = r[12];
    const M = r[1];
    const D = r[5];
    const O = r[9];
    const N = r[13];
    const H = r[2];
    const q = r[6];
    const V = r[10];
    const W = r[14];
    const Z = r[3];
    const ue = r[7];
    const ae = r[11];
    const he = r[15];
    s[0] = o * R + a * M + c * H + l * Z;
    s[4] = o * w + a * D + c * q + l * ue;
    s[8] = o * U + a * O + c * V + l * ae;
    s[12] = o * v + a * N + c * W + l * he;
    s[1] = u * R + f * M + d * H + p * Z;
    s[5] = u * w + f * D + d * q + p * ue;
    s[9] = u * U + f * O + d * V + p * ae;
    s[13] = u * v + f * N + d * W + p * he;
    s[2] = x * R + _ * M + m * H + h * Z;
    s[6] = x * w + _ * D + m * q + h * ue;
    s[10] = x * U + _ * O + m * V + h * ae;
    s[14] = x * v + _ * N + m * W + h * he;
    s[3] = b * R + y * M + T * H + A * Z;
    s[7] = b * w + y * D + T * q + A * ue;
    s[11] = b * U + y * O + T * V + A * ae;
    s[15] = b * v + y * N + T * W + A * he;
    return this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    t[0] *= e;
    t[4] *= e;
    t[8] *= e;
    t[12] *= e;
    t[1] *= e;
    t[5] *= e;
    t[9] *= e;
    t[13] *= e;
    t[2] *= e;
    t[6] *= e;
    t[10] *= e;
    t[14] *= e;
    t[3] *= e;
    t[7] *= e;
    t[11] *= e;
    t[15] *= e;
    return this;
  }
  determinant() {
    const e = this.elements;
    const t = e[0];
    const n = e[4];
    const r = e[8];
    const s = e[12];
    const o = e[1];
    const a = e[5];
    const c = e[9];
    const l = e[13];
    const u = e[2];
    const f = e[6];
    const d = e[10];
    const p = e[14];
    const x = e[3];
    const _ = e[7];
    const m = e[11];
    const h = e[15];
    const b = c * p - l * d;
    const y = a * p - l * f;
    const T = a * d - c * f;
    const A = o * p - l * u;
    const R = o * d - c * u;
    const w = o * f - a * u;
    return t * (_ * b - m * y + h * T) - n * (x * b - m * A + h * R) + r * (x * y - _ * A + h * w) - s * (x * T - _ * R + m * w);
  }
  transpose() {
    const e = this.elements;
    let t;
    t = e[1];
    e[1] = e[4];
    e[4] = t;
    t = e[2];
    e[2] = e[8];
    e[8] = t;
    t = e[6];
    e[6] = e[9];
    e[9] = t;
    t = e[3];
    e[3] = e[12];
    e[12] = t;
    t = e[7];
    e[7] = e[13];
    e[13] = t;
    t = e[11];
    e[11] = e[14];
    e[14] = t;
    return this;
  }
  setPosition(e, t, n) {
    const r = this.elements;
    if (e.isVector3) {
      r[12] = e.x;
      r[13] = e.y;
      r[14] = e.z;
    } else {
      r[12] = e;
      r[13] = t;
      r[14] = n;
    }
    return this;
  }
  invert() {
    const e = this.elements;
    const t = e[0];
    const n = e[1];
    const r = e[2];
    const s = e[3];
    const o = e[4];
    const a = e[5];
    const c = e[6];
    const l = e[7];
    const u = e[8];
    const f = e[9];
    const d = e[10];
    const p = e[11];
    const x = e[12];
    const _ = e[13];
    const m = e[14];
    const h = e[15];
    const b = f * m * l - _ * d * l + _ * c * p - a * m * p - f * c * h + a * d * h;
    const y = x * d * l - u * m * l - x * c * p + o * m * p + u * c * h - o * d * h;
    const T = u * _ * l - x * f * l + x * a * p - o * _ * p - u * a * h + o * f * h;
    const A = x * f * c - u * _ * c - x * a * d + o * _ * d + u * a * m - o * f * m;
    const R = t * b + n * y + r * T + s * A;
    if (R === 0) {
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    }
    const w = 1 / R;
    e[0] = b * w;
    e[1] = (_ * d * s - f * m * s - _ * r * p + n * m * p + f * r * h - n * d * h) * w;
    e[2] = (a * m * s - _ * c * s + _ * r * l - n * m * l - a * r * h + n * c * h) * w;
    e[3] = (f * c * s - a * d * s - f * r * l + n * d * l + a * r * p - n * c * p) * w;
    e[4] = y * w;
    e[5] = (u * m * s - x * d * s + x * r * p - t * m * p - u * r * h + t * d * h) * w;
    e[6] = (x * c * s - o * m * s - x * r * l + t * m * l + o * r * h - t * c * h) * w;
    e[7] = (o * d * s - u * c * s + u * r * l - t * d * l - o * r * p + t * c * p) * w;
    e[8] = T * w;
    e[9] = (x * f * s - u * _ * s - x * n * p + t * _ * p + u * n * h - t * f * h) * w;
    e[10] = (o * _ * s - x * a * s + x * n * l - t * _ * l - o * n * h + t * a * h) * w;
    e[11] = (u * a * s - o * f * s - u * n * l + t * f * l + o * n * p - t * a * p) * w;
    e[12] = A * w;
    e[13] = (u * _ * r - x * f * r + x * n * d - t * _ * d - u * n * m + t * f * m) * w;
    e[14] = (x * a * r - o * _ * r - x * n * c + t * _ * c + o * n * m - t * a * m) * w;
    e[15] = (o * f * r - u * a * r + u * n * c - t * f * c - o * n * d + t * a * d) * w;
    return this;
  }
  scale(e) {
    const t = this.elements;
    const n = e.x;
    const r = e.y;
    const s = e.z;
    t[0] *= n;
    t[4] *= r;
    t[8] *= s;
    t[1] *= n;
    t[5] *= r;
    t[9] *= s;
    t[2] *= n;
    t[6] *= r;
    t[10] *= s;
    t[3] *= n;
    t[7] *= r;
    t[11] *= s;
    return this;
  }
  getMaxScaleOnAxis() {
    const e = this.elements;
    const t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2];
    const n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6];
    const r = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
    return Math.sqrt(Math.max(t, n, r));
  }
  makeTranslation(e, t, n) {
    if (e.isVector3) {
      this.set(1, 0, 0, e.x, 0, 1, 0, e.y, 0, 0, 1, e.z, 0, 0, 0, 1);
    } else {
      this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, n, 0, 0, 0, 1);
    }
    return this;
  }
  makeRotationX(e) {
    const t = Math.cos(e);
    const n = Math.sin(e);
    this.set(1, 0, 0, 0, 0, t, -n, 0, 0, n, t, 0, 0, 0, 0, 1);
    return this;
  }
  makeRotationY(e) {
    const t = Math.cos(e);
    const n = Math.sin(e);
    this.set(t, 0, n, 0, 0, 1, 0, 0, -n, 0, t, 0, 0, 0, 0, 1);
    return this;
  }
  makeRotationZ(e) {
    const t = Math.cos(e);
    const n = Math.sin(e);
    this.set(t, -n, 0, 0, n, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    return this;
  }
  makeRotationAxis(e, t) {
    const n = Math.cos(t);
    const r = Math.sin(t);
    const s = 1 - n;
    const o = e.x;
    const a = e.y;
    const c = e.z;
    const l = s * o;
    const u = s * a;
    this.set(l * o + n, l * a - r * c, l * c + r * a, 0, l * a + r * c, u * a + n, u * c - r * o, 0, l * c - r * a, u * c + r * o, s * c * c + n, 0, 0, 0, 0, 1);
    return this;
  }
  makeScale(e, t, n) {
    this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, n, 0, 0, 0, 0, 1);
    return this;
  }
  makeShear(e, t, n, r, s, o) {
    this.set(1, n, s, 0, e, 1, o, 0, t, r, 1, 0, 0, 0, 0, 1);
    return this;
  }
  compose(e, t, n) {
    const r = this.elements;
    const s = t._x;
    const o = t._y;
    const a = t._z;
    const c = t._w;
    const l = s + s;
    const u = o + o;
    const f = a + a;
    const d = s * l;
    const p = s * u;
    const x = s * f;
    const _ = o * u;
    const m = o * f;
    const h = a * f;
    const b = c * l;
    const y = c * u;
    const T = c * f;
    const A = n.x;
    const R = n.y;
    const w = n.z;
    r[0] = (1 - (_ + h)) * A;
    r[1] = (p + T) * A;
    r[2] = (x - y) * A;
    r[3] = 0;
    r[4] = (p - T) * R;
    r[5] = (1 - (d + h)) * R;
    r[6] = (m + b) * R;
    r[7] = 0;
    r[8] = (x + y) * w;
    r[9] = (m - b) * w;
    r[10] = (1 - (d + _)) * w;
    r[11] = 0;
    r[12] = e.x;
    r[13] = e.y;
    r[14] = e.z;
    r[15] = 1;
    return this;
  }
  decompose(e, t, n) {
    const r = this.elements;
    e.x = r[12];
    e.y = r[13];
    e.z = r[14];
    if (this.determinant() === 0) {
      n.set(1, 1, 1);
      t.identity();
      return this;
    }
    let s = yn.set(r[0], r[1], r[2]).length();
    const o = yn.set(r[4], r[5], r[6]).length();
    const a = yn.set(r[8], r[9], r[10]).length();
    if (this.determinant() < 0) {
      s = -s;
    }
    Ft.copy(this);
    const l = 1 / s;
    const u = 1 / o;
    const f = 1 / a;
    Ft.elements[0] *= l;
    Ft.elements[1] *= l;
    Ft.elements[2] *= l;
    Ft.elements[4] *= u;
    Ft.elements[5] *= u;
    Ft.elements[6] *= u;
    Ft.elements[8] *= f;
    Ft.elements[9] *= f;
    Ft.elements[10] *= f;
    t.setFromRotationMatrix(Ft);
    n.x = s;
    n.y = o;
    n.z = a;
    return this;
  }
  makePerspective(e, t, n, r, s, o, a = 2000, c = false) {
    const l = this.elements;
    const u = s * 2 / (t - e);
    const f = s * 2 / (n - r);
    const d = (t + e) / (t - e);
    const p = (n + r) / (n - r);
    let x;
    let _;
    if (c) {
      x = s / (o - s);
      _ = o * s / (o - s);
    } else if (a === 2000) {
      x = -(o + s) / (o - s);
      _ = o * -2 * s / (o - s);
    } else if (a === 2001) {
      x = -o / (o - s);
      _ = -o * s / (o - s);
    } else {
      throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + a);
    }
    l[0] = u;
    l[4] = 0;
    l[8] = d;
    l[12] = 0;
    l[1] = 0;
    l[5] = f;
    l[9] = p;
    l[13] = 0;
    l[2] = 0;
    l[6] = 0;
    l[10] = x;
    l[14] = _;
    l[3] = 0;
    l[7] = 0;
    l[11] = -1;
    l[15] = 0;
    return this;
  }
  makeOrthographic(e, t, n, r, s, o, a = 2000, c = false) {
    const l = this.elements;
    const u = 2 / (t - e);
    const f = 2 / (n - r);
    const d = -(t + e) / (t - e);
    const p = -(n + r) / (n - r);
    let x;
    let _;
    if (c) {
      x = 1 / (o - s);
      _ = o / (o - s);
    } else if (a === 2000) {
      x = -2 / (o - s);
      _ = -(o + s) / (o - s);
    } else if (a === 2001) {
      x = -1 / (o - s);
      _ = -s / (o - s);
    } else {
      throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + a);
    }
    l[0] = u;
    l[4] = 0;
    l[8] = 0;
    l[12] = d;
    l[1] = 0;
    l[5] = f;
    l[9] = 0;
    l[13] = p;
    l[2] = 0;
    l[6] = 0;
    l[10] = x;
    l[14] = _;
    l[3] = 0;
    l[7] = 0;
    l[11] = 0;
    l[15] = 1;
    return this;
  }
  equals(e) {
    const t = this.elements;
    const n = e.elements;
    for (let r = 0; r < 16; r++) {
      if (t[r] !== n[r]) {
        return false;
      }
    }
    return true;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 16; n++) {
      this.elements[n] = e[n + t];
    }
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    e[t] = n[0];
    e[t + 1] = n[1];
    e[t + 2] = n[2];
    e[t + 3] = n[3];
    e[t + 4] = n[4];
    e[t + 5] = n[5];
    e[t + 6] = n[6];
    e[t + 7] = n[7];
    e[t + 8] = n[8];
    e[t + 9] = n[9];
    e[t + 10] = n[10];
    e[t + 11] = n[11];
    e[t + 12] = n[12];
    e[t + 13] = n[13];
    e[t + 14] = n[14];
    e[t + 15] = n[15];
    return e;
  }
}
const yn = new B();
const Ft = new it();
const Ha = new B(0, 0, 0);
const ka = new B(1, 1, 1);
const rn = new B();
const _i = new B();
const At = new B();
const $r = new it();
const Kr = new si();
class kt {
  constructor(e = 0, t = 0, n = 0, r = kt.DEFAULT_ORDER) {
    this.isEuler = true;
    this._x = e;
    this._y = t;
    this._z = n;
    this._order = r;
  }
  get x() {
    return this._x;
  }
  set x(e) {
    this._x = e;
    this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    this._y = e;
    this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    this._z = e;
    this._onChangeCallback();
  }
  get order() {
    return this._order;
  }
  set order(e) {
    this._order = e;
    this._onChangeCallback();
  }
  set(e, t, n, r = this._order) {
    this._x = e;
    this._y = t;
    this._z = n;
    this._order = r;
    this._onChangeCallback();
    return this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(e) {
    this._x = e._x;
    this._y = e._y;
    this._z = e._z;
    this._order = e._order;
    this._onChangeCallback();
    return this;
  }
  setFromRotationMatrix(e, t = this._order, n = true) {
    const r = e.elements;
    const s = r[0];
    const o = r[4];
    const a = r[8];
    const c = r[1];
    const l = r[5];
    const u = r[9];
    const f = r[2];
    const d = r[6];
    const p = r[10];
    switch (t) {
      case "XYZ":
        this._y = Math.asin(Be(a, -1, 1));
        if (Math.abs(a) < 0.9999999) {
          this._x = Math.atan2(-u, p);
          this._z = Math.atan2(-o, s);
        } else {
          this._x = Math.atan2(d, l);
          this._z = 0;
        }
        break;
      case "YXZ":
        this._x = Math.asin(-Be(u, -1, 1));
        if (Math.abs(u) < 0.9999999) {
          this._y = Math.atan2(a, p);
          this._z = Math.atan2(c, l);
        } else {
          this._y = Math.atan2(-f, s);
          this._z = 0;
        }
        break;
      case "ZXY":
        this._x = Math.asin(Be(d, -1, 1));
        if (Math.abs(d) < 0.9999999) {
          this._y = Math.atan2(-f, p);
          this._z = Math.atan2(-o, l);
        } else {
          this._y = 0;
          this._z = Math.atan2(c, s);
        }
        break;
      case "ZYX":
        this._y = Math.asin(-Be(f, -1, 1));
        if (Math.abs(f) < 0.9999999) {
          this._x = Math.atan2(d, p);
          this._z = Math.atan2(c, s);
        } else {
          this._x = 0;
          this._z = Math.atan2(-o, l);
        }
        break;
      case "YZX":
        this._z = Math.asin(Be(c, -1, 1));
        if (Math.abs(c) < 0.9999999) {
          this._x = Math.atan2(-u, l);
          this._y = Math.atan2(-f, s);
        } else {
          this._x = 0;
          this._y = Math.atan2(a, p);
        }
        break;
      case "XZY":
        this._z = Math.asin(-Be(o, -1, 1));
        if (Math.abs(o) < 0.9999999) {
          this._x = Math.atan2(d, l);
          this._y = Math.atan2(a, s);
        } else {
          this._x = Math.atan2(-u, p);
          this._y = 0;
        }
        break;
      default:
        Ce("Euler: .setFromRotationMatrix() encountered an unknown order: " + t);
    }
    this._order = t;
    if (n === true) {
      this._onChangeCallback();
    }
    return this;
  }
  setFromQuaternion(e, t, n) {
    $r.makeRotationFromQuaternion(e);
    return this.setFromRotationMatrix($r, t, n);
  }
  setFromVector3(e, t = this._order) {
    return this.set(e.x, e.y, e.z, t);
  }
  reorder(e) {
    Kr.setFromEuler(this);
    return this.setFromQuaternion(Kr, e);
  }
  equals(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order;
  }
  fromArray(e) {
    this._x = e[0];
    this._y = e[1];
    this._z = e[2];
    if (e[3] !== undefined) {
      this._order = e[3];
    }
    this._onChangeCallback();
    return this;
  }
  toArray(e = [], t = 0) {
    e[t] = this._x;
    e[t + 1] = this._y;
    e[t + 2] = this._z;
    e[t + 3] = this._order;
    return e;
  }
  _onChange(e) {
    this._onChangeCallback = e;
    return this;
  }
  _onChangeCallback() {}
  *[Symbol.iterator]() {
    yield this._x;
    yield this._y;
    yield this._z;
    yield this._order;
  }
}
kt.DEFAULT_ORDER = "XYZ";
class Ws {
  constructor() {
    this.mask = 1;
  }
  set(e) {
    this.mask = (1 << e | 0) >>> 0;
  }
  enable(e) {
    this.mask |= 1 << e | 0;
  }
  enableAll() {
    this.mask = -1;
  }
  toggle(e) {
    this.mask ^= 1 << e | 0;
  }
  disable(e) {
    this.mask &= ~(1 << e | 0);
  }
  disableAll() {
    this.mask = 0;
  }
  test(e) {
    return (this.mask & e.mask) !== 0;
  }
  isEnabled(e) {
    return (this.mask & (1 << e | 0)) !== 0;
  }
}
let Wa = 0;
const Zr = new B();
const bn = new si();
const Zt = new it();
const xi = new B();
const qn = new B();
const Xa = new B();
const qa = new si();
const jr = new B(1, 0, 0);
const Jr = new B(0, 1, 0);
const Qr = new B(0, 0, 1);
const es = {
  type: "added"
};
const Ya = {
  type: "removed"
};
const An = {
  type: "childadded",
  child: null
};
const ir = {
  type: "childremoved",
  child: null
};
class xt extends zn {
  constructor() {
    super();
    this.isObject3D = true;
    Object.defineProperty(this, "id", {
      value: Wa++
    });
    this.uuid = ri();
    this.name = "";
    this.type = "Object3D";
    this.parent = null;
    this.children = [];
    this.up = xt.DEFAULT_UP.clone();
    const e = new B();
    const t = new kt();
    const n = new si();
    const r = new B(1, 1, 1);
    function s() {
      n.setFromEuler(t, false);
    }
    function o() {
      t.setFromQuaternion(n, undefined, false);
    }
    t._onChange(s);
    n._onChange(o);
    Object.defineProperties(this, {
      position: {
        configurable: true,
        enumerable: true,
        value: e
      },
      rotation: {
        configurable: true,
        enumerable: true,
        value: t
      },
      quaternion: {
        configurable: true,
        enumerable: true,
        value: n
      },
      scale: {
        configurable: true,
        enumerable: true,
        value: r
      },
      modelViewMatrix: {
        value: new it()
      },
      normalMatrix: {
        value: new Pe()
      }
    });
    this.matrix = new it();
    this.matrixWorld = new it();
    this.matrixAutoUpdate = xt.DEFAULT_MATRIX_AUTO_UPDATE;
    this.matrixWorldAutoUpdate = xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE;
    this.matrixWorldNeedsUpdate = false;
    this.layers = new Ws();
    this.visible = true;
    this.castShadow = false;
    this.receiveShadow = false;
    this.frustumCulled = true;
    this.renderOrder = 0;
    this.animations = [];
    this.customDepthMaterial = undefined;
    this.customDistanceMaterial = undefined;
    this.userData = {};
  }
  onBeforeShadow() {}
  onAfterShadow() {}
  onBeforeRender() {}
  onAfterRender() {}
  applyMatrix4(e) {
    if (this.matrixAutoUpdate) {
      this.updateMatrix();
    }
    this.matrix.premultiply(e);
    this.matrix.decompose(this.position, this.quaternion, this.scale);
  }
  applyQuaternion(e) {
    this.quaternion.premultiply(e);
    return this;
  }
  setRotationFromAxisAngle(e, t) {
    this.quaternion.setFromAxisAngle(e, t);
  }
  setRotationFromEuler(e) {
    this.quaternion.setFromEuler(e, true);
  }
  setRotationFromMatrix(e) {
    this.quaternion.setFromRotationMatrix(e);
  }
  setRotationFromQuaternion(e) {
    this.quaternion.copy(e);
  }
  rotateOnAxis(e, t) {
    bn.setFromAxisAngle(e, t);
    this.quaternion.multiply(bn);
    return this;
  }
  rotateOnWorldAxis(e, t) {
    bn.setFromAxisAngle(e, t);
    this.quaternion.premultiply(bn);
    return this;
  }
  rotateX(e) {
    return this.rotateOnAxis(jr, e);
  }
  rotateY(e) {
    return this.rotateOnAxis(Jr, e);
  }
  rotateZ(e) {
    return this.rotateOnAxis(Qr, e);
  }
  translateOnAxis(e, t) {
    Zr.copy(e).applyQuaternion(this.quaternion);
    this.position.add(Zr.multiplyScalar(t));
    return this;
  }
  translateX(e) {
    return this.translateOnAxis(jr, e);
  }
  translateY(e) {
    return this.translateOnAxis(Jr, e);
  }
  translateZ(e) {
    return this.translateOnAxis(Qr, e);
  }
  localToWorld(e) {
    this.updateWorldMatrix(true, false);
    return e.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(e) {
    this.updateWorldMatrix(true, false);
    return e.applyMatrix4(Zt.copy(this.matrixWorld).invert());
  }
  lookAt(e, t, n) {
    if (e.isVector3) {
      xi.copy(e);
    } else {
      xi.set(e, t, n);
    }
    const r = this.parent;
    this.updateWorldMatrix(true, false);
    qn.setFromMatrixPosition(this.matrixWorld);
    if (this.isCamera || this.isLight) {
      Zt.lookAt(qn, xi, this.up);
    } else {
      Zt.lookAt(xi, qn, this.up);
    }
    this.quaternion.setFromRotationMatrix(Zt);
    if (r) {
      Zt.extractRotation(r.matrixWorld);
      bn.setFromRotationMatrix(Zt);
      this.quaternion.premultiply(bn.invert());
    }
  }
  add(e) {
    if (arguments.length > 1) {
      for (let t = 0; t < arguments.length; t++) {
        this.add(arguments[t]);
      }
      return this;
    }
    if (e === this) {
      He("Object3D.add: object can't be added as a child of itself.", e);
      return this;
    } else {
      if (e && e.isObject3D) {
        e.removeFromParent();
        e.parent = this;
        this.children.push(e);
        e.dispatchEvent(es);
        An.child = e;
        this.dispatchEvent(An);
        An.child = null;
      } else {
        He("Object3D.add: object not an instance of THREE.Object3D.", e);
      }
      return this;
    }
  }
  remove(e) {
    if (arguments.length > 1) {
      for (let n = 0; n < arguments.length; n++) {
        this.remove(arguments[n]);
      }
      return this;
    }
    const t = this.children.indexOf(e);
    if (t !== -1) {
      e.parent = null;
      this.children.splice(t, 1);
      e.dispatchEvent(Ya);
      ir.child = e;
      this.dispatchEvent(ir);
      ir.child = null;
    }
    return this;
  }
  removeFromParent() {
    const e = this.parent;
    if (e !== null) {
      e.remove(this);
    }
    return this;
  }
  clear() {
    return this.remove(...this.children);
  }
  attach(e) {
    this.updateWorldMatrix(true, false);
    Zt.copy(this.matrixWorld).invert();
    if (e.parent !== null) {
      e.parent.updateWorldMatrix(true, false);
      Zt.multiply(e.parent.matrixWorld);
    }
    e.applyMatrix4(Zt);
    e.removeFromParent();
    e.parent = this;
    this.children.push(e);
    e.updateWorldMatrix(false, true);
    e.dispatchEvent(es);
    An.child = e;
    this.dispatchEvent(An);
    An.child = null;
    return this;
  }
  getObjectById(e) {
    return this.getObjectByProperty("id", e);
  }
  getObjectByName(e) {
    return this.getObjectByProperty("name", e);
  }
  getObjectByProperty(e, t) {
    if (this[e] === t) {
      return this;
    }
    for (let n = 0, r = this.children.length; n < r; n++) {
      const o = this.children[n].getObjectByProperty(e, t);
      if (o !== undefined) {
        return o;
      }
    }
  }
  getObjectsByProperty(e, t, n = []) {
    if (this[e] === t) {
      n.push(this);
    }
    const r = this.children;
    for (let s = 0, o = r.length; s < o; s++) {
      r[s].getObjectsByProperty(e, t, n);
    }
    return n;
  }
  getWorldPosition(e) {
    this.updateWorldMatrix(true, false);
    return e.setFromMatrixPosition(this.matrixWorld);
  }
  getWorldQuaternion(e) {
    this.updateWorldMatrix(true, false);
    this.matrixWorld.decompose(qn, e, Xa);
    return e;
  }
  getWorldScale(e) {
    this.updateWorldMatrix(true, false);
    this.matrixWorld.decompose(qn, qa, e);
    return e;
  }
  getWorldDirection(e) {
    this.updateWorldMatrix(true, false);
    const t = this.matrixWorld.elements;
    return e.set(t[8], t[9], t[10]).normalize();
  }
  raycast() {}
  traverse(e) {
    e(this);
    const t = this.children;
    for (let n = 0, r = t.length; n < r; n++) {
      t[n].traverse(e);
    }
  }
  traverseVisible(e) {
    if (this.visible === false) {
      return;
    }
    e(this);
    const t = this.children;
    for (let n = 0, r = t.length; n < r; n++) {
      t[n].traverseVisible(e);
    }
  }
  traverseAncestors(e) {
    const t = this.parent;
    if (t !== null) {
      e(t);
      t.traverseAncestors(e);
    }
  }
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale);
    this.matrixWorldNeedsUpdate = true;
  }
  updateMatrixWorld(e) {
    if (this.matrixAutoUpdate) {
      this.updateMatrix();
    }
    if (this.matrixWorldNeedsUpdate || e) {
      if (this.matrixWorldAutoUpdate === true) {
        if (this.parent === null) {
          this.matrixWorld.copy(this.matrix);
        } else {
          this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix);
        }
      }
      this.matrixWorldNeedsUpdate = false;
      e = true;
    }
    const t = this.children;
    for (let n = 0, r = t.length; n < r; n++) {
      t[n].updateMatrixWorld(e);
    }
  }
  updateWorldMatrix(e, t) {
    const n = this.parent;
    if (e === true && n !== null) {
      n.updateWorldMatrix(true, false);
    }
    if (this.matrixAutoUpdate) {
      this.updateMatrix();
    }
    if (this.matrixWorldAutoUpdate === true) {
      if (this.parent === null) {
        this.matrixWorld.copy(this.matrix);
      } else {
        this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix);
      }
    }
    if (t === true) {
      const r = this.children;
      for (let s = 0, o = r.length; s < o; s++) {
        r[s].updateWorldMatrix(false, true);
      }
    }
  }
  toJSON(e) {
    const t = e === undefined || typeof e == "string";
    const n = {};
    if (t) {
      e = {
        geometries: {},
        materials: {},
        textures: {},
        images: {},
        shapes: {},
        skeletons: {},
        animations: {},
        nodes: {}
      };
      n.metadata = {
        version: 4.7,
        type: "Object",
        generator: "Object3D.toJSON"
      };
    }
    const r = {
      uuid: this.uuid,
      type: this.type
    };
    if (this.name !== "") {
      r.name = this.name;
    }
    if (this.castShadow === true) {
      r.castShadow = true;
    }
    if (this.receiveShadow === true) {
      r.receiveShadow = true;
    }
    if (this.visible === false) {
      r.visible = false;
    }
    if (this.frustumCulled === false) {
      r.frustumCulled = false;
    }
    if (this.renderOrder !== 0) {
      r.renderOrder = this.renderOrder;
    }
    if (Object.keys(this.userData).length > 0) {
      r.userData = this.userData;
    }
    r.layers = this.layers.mask;
    r.matrix = this.matrix.toArray();
    r.up = this.up.toArray();
    if (this.matrixAutoUpdate === false) {
      r.matrixAutoUpdate = false;
    }
    if (this.isInstancedMesh) {
      r.type = "InstancedMesh";
      r.count = this.count;
      r.instanceMatrix = this.instanceMatrix.toJSON();
      if (this.instanceColor !== null) {
        r.instanceColor = this.instanceColor.toJSON();
      }
    }
    if (this.isBatchedMesh) {
      r.type = "BatchedMesh";
      r.perObjectFrustumCulled = this.perObjectFrustumCulled;
      r.sortObjects = this.sortObjects;
      r.drawRanges = this._drawRanges;
      r.reservedRanges = this._reservedRanges;
      r.geometryInfo = this._geometryInfo.map(a => ({
        ...a,
        boundingBox: a.boundingBox ? a.boundingBox.toJSON() : undefined,
        boundingSphere: a.boundingSphere ? a.boundingSphere.toJSON() : undefined
      }));
      r.instanceInfo = this._instanceInfo.map(a => ({
        ...a
      }));
      r.availableInstanceIds = this._availableInstanceIds.slice();
      r.availableGeometryIds = this._availableGeometryIds.slice();
      r.nextIndexStart = this._nextIndexStart;
      r.nextVertexStart = this._nextVertexStart;
      r.geometryCount = this._geometryCount;
      r.maxInstanceCount = this._maxInstanceCount;
      r.maxVertexCount = this._maxVertexCount;
      r.maxIndexCount = this._maxIndexCount;
      r.geometryInitialized = this._geometryInitialized;
      r.matricesTexture = this._matricesTexture.toJSON(e);
      r.indirectTexture = this._indirectTexture.toJSON(e);
      if (this._colorsTexture !== null) {
        r.colorsTexture = this._colorsTexture.toJSON(e);
      }
      if (this.boundingSphere !== null) {
        r.boundingSphere = this.boundingSphere.toJSON();
      }
      if (this.boundingBox !== null) {
        r.boundingBox = this.boundingBox.toJSON();
      }
    }
    function s(a, c) {
      if (a[c.uuid] === undefined) {
        a[c.uuid] = c.toJSON(e);
      }
      return c.uuid;
    }
    if (this.isScene) {
      if (this.background) {
        if (this.background.isColor) {
          r.background = this.background.toJSON();
        } else if (this.background.isTexture) {
          r.background = this.background.toJSON(e).uuid;
        }
      }
      if (this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== true) {
        r.environment = this.environment.toJSON(e).uuid;
      }
    } else if (this.isMesh || this.isLine || this.isPoints) {
      r.geometry = s(e.geometries, this.geometry);
      const a = this.geometry.parameters;
      if (a !== undefined && a.shapes !== undefined) {
        const c = a.shapes;
        if (Array.isArray(c)) {
          for (let l = 0, u = c.length; l < u; l++) {
            const f = c[l];
            s(e.shapes, f);
          }
        } else {
          s(e.shapes, c);
        }
      }
    }
    if (this.isSkinnedMesh) {
      r.bindMode = this.bindMode;
      r.bindMatrix = this.bindMatrix.toArray();
      if (this.skeleton !== undefined) {
        s(e.skeletons, this.skeleton);
        r.skeleton = this.skeleton.uuid;
      }
    }
    if (this.material !== undefined) {
      if (Array.isArray(this.material)) {
        const a = [];
        for (let c = 0, l = this.material.length; c < l; c++) {
          a.push(s(e.materials, this.material[c]));
        }
        r.material = a;
      } else {
        r.material = s(e.materials, this.material);
      }
    }
    if (this.children.length > 0) {
      r.children = [];
      for (let a = 0; a < this.children.length; a++) {
        r.children.push(this.children[a].toJSON(e).object);
      }
    }
    if (this.animations.length > 0) {
      r.animations = [];
      for (let a = 0; a < this.animations.length; a++) {
        const c = this.animations[a];
        r.animations.push(s(e.animations, c));
      }
    }
    if (t) {
      const a = o(e.geometries);
      const c = o(e.materials);
      const l = o(e.textures);
      const u = o(e.images);
      const f = o(e.shapes);
      const d = o(e.skeletons);
      const p = o(e.animations);
      const x = o(e.nodes);
      if (a.length > 0) {
        n.geometries = a;
      }
      if (c.length > 0) {
        n.materials = c;
      }
      if (l.length > 0) {
        n.textures = l;
      }
      if (u.length > 0) {
        n.images = u;
      }
      if (f.length > 0) {
        n.shapes = f;
      }
      if (d.length > 0) {
        n.skeletons = d;
      }
      if (p.length > 0) {
        n.animations = p;
      }
      if (x.length > 0) {
        n.nodes = x;
      }
    }
    n.object = r;
    return n;
    function o(a) {
      const c = [];
      for (const l in a) {
        const u = a[l];
        delete u.metadata;
        c.push(u);
      }
      return c;
    }
  }
  clone(e) {
    return new this.constructor().copy(this, e);
  }
  copy(e, t = true) {
    this.name = e.name;
    this.up.copy(e.up);
    this.position.copy(e.position);
    this.rotation.order = e.rotation.order;
    this.quaternion.copy(e.quaternion);
    this.scale.copy(e.scale);
    this.matrix.copy(e.matrix);
    this.matrixWorld.copy(e.matrixWorld);
    this.matrixAutoUpdate = e.matrixAutoUpdate;
    this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate;
    this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate;
    this.layers.mask = e.layers.mask;
    this.visible = e.visible;
    this.castShadow = e.castShadow;
    this.receiveShadow = e.receiveShadow;
    this.frustumCulled = e.frustumCulled;
    this.renderOrder = e.renderOrder;
    this.animations = e.animations.slice();
    this.userData = JSON.parse(JSON.stringify(e.userData));
    if (t === true) {
      for (let n = 0; n < e.children.length; n++) {
        const r = e.children[n];
        this.add(r.clone());
      }
    }
    return this;
  }
}
xt.DEFAULT_UP = new B(0, 1, 0);
xt.DEFAULT_MATRIX_AUTO_UPDATE = true;
xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = true;
const It = new B();
const jt = new B();
const rr = new B();
const Jt = new B();
const Rn = new B();
const Cn = new B();
const ts = new B();
const sr = new B();
const ar = new B();
const or = new B();
const lr = new ot();
const cr = new ot();
const ur = new ot();
class Nt {
  constructor(e = new B(), t = new B(), n = new B()) {
    this.a = e;
    this.b = t;
    this.c = n;
  }
  static getNormal(e, t, n, r) {
    r.subVectors(n, t);
    It.subVectors(e, t);
    r.cross(It);
    const s = r.lengthSq();
    if (s > 0) {
      return r.multiplyScalar(1 / Math.sqrt(s));
    } else {
      return r.set(0, 0, 0);
    }
  }
  static getBarycoord(e, t, n, r, s) {
    It.subVectors(r, t);
    jt.subVectors(n, t);
    rr.subVectors(e, t);
    const o = It.dot(It);
    const a = It.dot(jt);
    const c = It.dot(rr);
    const l = jt.dot(jt);
    const u = jt.dot(rr);
    const f = o * l - a * a;
    if (f === 0) {
      s.set(0, 0, 0);
      return null;
    }
    const d = 1 / f;
    const p = (l * c - a * u) * d;
    const x = (o * u - a * c) * d;
    return s.set(1 - p - x, x, p);
  }
  static containsPoint(e, t, n, r) {
    if (this.getBarycoord(e, t, n, r, Jt) === null) {
      return false;
    } else {
      return Jt.x >= 0 && Jt.y >= 0 && Jt.x + Jt.y <= 1;
    }
  }
  static getInterpolation(e, t, n, r, s, o, a, c) {
    if (this.getBarycoord(e, t, n, r, Jt) === null) {
      c.x = 0;
      c.y = 0;
      if ("z" in c) {
        c.z = 0;
      }
      if ("w" in c) {
        c.w = 0;
      }
      return null;
    } else {
      c.setScalar(0);
      c.addScaledVector(s, Jt.x);
      c.addScaledVector(o, Jt.y);
      c.addScaledVector(a, Jt.z);
      return c;
    }
  }
  static getInterpolatedAttribute(e, t, n, r, s, o) {
    lr.setScalar(0);
    cr.setScalar(0);
    ur.setScalar(0);
    lr.fromBufferAttribute(e, t);
    cr.fromBufferAttribute(e, n);
    ur.fromBufferAttribute(e, r);
    o.setScalar(0);
    o.addScaledVector(lr, s.x);
    o.addScaledVector(cr, s.y);
    o.addScaledVector(ur, s.z);
    return o;
  }
  static isFrontFacing(e, t, n, r) {
    It.subVectors(n, t);
    jt.subVectors(e, t);
    return It.cross(jt).dot(r) < 0;
  }
  set(e, t, n) {
    this.a.copy(e);
    this.b.copy(t);
    this.c.copy(n);
    return this;
  }
  setFromPointsAndIndices(e, t, n, r) {
    this.a.copy(e[t]);
    this.b.copy(e[n]);
    this.c.copy(e[r]);
    return this;
  }
  setFromAttributeAndIndices(e, t, n, r) {
    this.a.fromBufferAttribute(e, t);
    this.b.fromBufferAttribute(e, n);
    this.c.fromBufferAttribute(e, r);
    return this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.a.copy(e.a);
    this.b.copy(e.b);
    this.c.copy(e.c);
    return this;
  }
  getArea() {
    It.subVectors(this.c, this.b);
    jt.subVectors(this.a, this.b);
    return It.cross(jt).length() * 0.5;
  }
  getMidpoint(e) {
    return e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
  }
  getNormal(e) {
    return Nt.getNormal(this.a, this.b, this.c, e);
  }
  getPlane(e) {
    return e.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(e, t) {
    return Nt.getBarycoord(e, this.a, this.b, this.c, t);
  }
  getInterpolation(e, t, n, r, s) {
    return Nt.getInterpolation(e, this.a, this.b, this.c, t, n, r, s);
  }
  containsPoint(e) {
    return Nt.containsPoint(e, this.a, this.b, this.c);
  }
  isFrontFacing(e) {
    return Nt.isFrontFacing(this.a, this.b, this.c, e);
  }
  intersectsBox(e) {
    return e.intersectsTriangle(this);
  }
  closestPointToPoint(e, t) {
    const n = this.a;
    const r = this.b;
    const s = this.c;
    let o;
    let a;
    Rn.subVectors(r, n);
    Cn.subVectors(s, n);
    sr.subVectors(e, n);
    const c = Rn.dot(sr);
    const l = Cn.dot(sr);
    if (c <= 0 && l <= 0) {
      return t.copy(n);
    }
    ar.subVectors(e, r);
    const u = Rn.dot(ar);
    const f = Cn.dot(ar);
    if (u >= 0 && f <= u) {
      return t.copy(r);
    }
    const d = c * f - u * l;
    if (d <= 0 && c >= 0 && u <= 0) {
      o = c / (c - u);
      return t.copy(n).addScaledVector(Rn, o);
    }
    or.subVectors(e, s);
    const p = Rn.dot(or);
    const x = Cn.dot(or);
    if (x >= 0 && p <= x) {
      return t.copy(s);
    }
    const _ = p * l - c * x;
    if (_ <= 0 && l >= 0 && x <= 0) {
      a = l / (l - x);
      return t.copy(n).addScaledVector(Cn, a);
    }
    const m = u * x - p * f;
    if (m <= 0 && f - u >= 0 && p - x >= 0) {
      ts.subVectors(s, r);
      a = (f - u) / (f - u + (p - x));
      return t.copy(r).addScaledVector(ts, a);
    }
    const h = 1 / (m + _ + d);
    o = _ * h;
    a = d * h;
    return t.copy(n).addScaledVector(Rn, o).addScaledVector(Cn, a);
  }
  equals(e) {
    return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
  }
}
const Xs = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
const sn = {
  h: 0,
  s: 0,
  l: 0
};
const vi = {
  h: 0,
  s: 0,
  l: 0
};
function hr(i, e, t) {
  if (t < 0) {
    t += 1;
  }
  if (t > 1) {
    t -= 1;
  }
  if (t < 1 / 6) {
    return i + (e - i) * 6 * t;
  } else if (t < 1 / 2) {
    return e;
  } else if (t < 2 / 3) {
    return i + (e - i) * 6 * (2 / 3 - t);
  } else {
    return i;
  }
}
class We {
  constructor(e, t, n) {
    this.isColor = true;
    this.r = 1;
    this.g = 1;
    this.b = 1;
    return this.set(e, t, n);
  }
  set(e, t, n) {
    if (t === undefined && n === undefined) {
      const r = e;
      if (r && r.isColor) {
        this.copy(r);
      } else if (typeof r == "number") {
        this.setHex(r);
      } else if (typeof r == "string") {
        this.setStyle(r);
      }
    } else {
      this.setRGB(e, t, n);
    }
    return this;
  }
  setScalar(e) {
    this.r = e;
    this.g = e;
    this.b = e;
    return this;
  }
  setHex(e, t = Pt) {
    e = Math.floor(e);
    this.r = (e >> 16 & 255) / 255;
    this.g = (e >> 8 & 255) / 255;
    this.b = (e & 255) / 255;
    Ge.colorSpaceToWorking(this, t);
    return this;
  }
  setRGB(e, t, n, r = Ge.workingColorSpace) {
    this.r = e;
    this.g = t;
    this.b = n;
    Ge.colorSpaceToWorking(this, r);
    return this;
  }
  setHSL(e, t, n, r = Ge.workingColorSpace) {
    e = Fa(e, 1);
    t = Be(t, 0, 1);
    n = Be(n, 0, 1);
    if (t === 0) {
      this.r = this.g = this.b = n;
    } else {
      const s = n <= 0.5 ? n * (1 + t) : n + t - n * t;
      const o = n * 2 - s;
      this.r = hr(o, s, e + 1 / 3);
      this.g = hr(o, s, e);
      this.b = hr(o, s, e - 1 / 3);
    }
    Ge.colorSpaceToWorking(this, r);
    return this;
  }
  setStyle(e, t = Pt) {
    function n(s) {
      if (s !== undefined && parseFloat(s) < 1) {
        Ce("Color: Alpha component of " + e + " will be ignored.");
      }
    }
    let r;
    if (r = /^(\w+)\(([^\)]*)\)/.exec(e)) {
      let s;
      const o = r[1];
      const a = r[2];
      switch (o) {
        case "rgb":
        case "rgba":
          if (s = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)) {
            n(s[4]);
            return this.setRGB(Math.min(255, parseInt(s[1], 10)) / 255, Math.min(255, parseInt(s[2], 10)) / 255, Math.min(255, parseInt(s[3], 10)) / 255, t);
          }
          if (s = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)) {
            n(s[4]);
            return this.setRGB(Math.min(100, parseInt(s[1], 10)) / 100, Math.min(100, parseInt(s[2], 10)) / 100, Math.min(100, parseInt(s[3], 10)) / 100, t);
          }
          break;
        case "hsl":
        case "hsla":
          if (s = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)) {
            n(s[4]);
            return this.setHSL(parseFloat(s[1]) / 360, parseFloat(s[2]) / 100, parseFloat(s[3]) / 100, t);
          }
          break;
        default:
          Ce("Color: Unknown color model " + e);
      }
    } else if (r = /^\#([A-Fa-f\d]+)$/.exec(e)) {
      const s = r[1];
      const o = s.length;
      if (o === 3) {
        return this.setRGB(parseInt(s.charAt(0), 16) / 15, parseInt(s.charAt(1), 16) / 15, parseInt(s.charAt(2), 16) / 15, t);
      }
      if (o === 6) {
        return this.setHex(parseInt(s, 16), t);
      }
      Ce("Color: Invalid hex color " + e);
    } else if (e && e.length > 0) {
      return this.setColorName(e, t);
    }
    return this;
  }
  setColorName(e, t = Pt) {
    const n = Xs[e.toLowerCase()];
    if (n !== undefined) {
      this.setHex(n, t);
    } else {
      Ce("Color: Unknown color " + e);
    }
    return this;
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(e) {
    this.r = e.r;
    this.g = e.g;
    this.b = e.b;
    return this;
  }
  copySRGBToLinear(e) {
    this.r = Qt(e.r);
    this.g = Qt(e.g);
    this.b = Qt(e.b);
    return this;
  }
  copyLinearToSRGB(e) {
    this.r = In(e.r);
    this.g = In(e.g);
    this.b = In(e.b);
    return this;
  }
  convertSRGBToLinear() {
    this.copySRGBToLinear(this);
    return this;
  }
  convertLinearToSRGB() {
    this.copyLinearToSRGB(this);
    return this;
  }
  getHex(e = Pt) {
    Ge.workingToColorSpace(gt.copy(this), e);
    return Math.round(Be(gt.r * 255, 0, 255)) * 65536 + Math.round(Be(gt.g * 255, 0, 255)) * 256 + Math.round(Be(gt.b * 255, 0, 255));
  }
  getHexString(e = Pt) {
    return ("000000" + this.getHex(e).toString(16)).slice(-6);
  }
  getHSL(e, t = Ge.workingColorSpace) {
    Ge.workingToColorSpace(gt.copy(this), t);
    const n = gt.r;
    const r = gt.g;
    const s = gt.b;
    const o = Math.max(n, r, s);
    const a = Math.min(n, r, s);
    let c;
    let l;
    const u = (a + o) / 2;
    if (a === o) {
      c = 0;
      l = 0;
    } else {
      const f = o - a;
      l = u <= 0.5 ? f / (o + a) : f / (2 - o - a);
      switch (o) {
        case n:
          c = (r - s) / f + (r < s ? 6 : 0);
          break;
        case r:
          c = (s - n) / f + 2;
          break;
        case s:
          c = (n - r) / f + 4;
          break;
      }
      c /= 6;
    }
    e.h = c;
    e.s = l;
    e.l = u;
    return e;
  }
  getRGB(e, t = Ge.workingColorSpace) {
    Ge.workingToColorSpace(gt.copy(this), t);
    e.r = gt.r;
    e.g = gt.g;
    e.b = gt.b;
    return e;
  }
  getStyle(e = Pt) {
    Ge.workingToColorSpace(gt.copy(this), e);
    const t = gt.r;
    const n = gt.g;
    const r = gt.b;
    if (e !== Pt) {
      return `color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`;
    } else {
      return `rgb(${Math.round(t * 255)},${Math.round(n * 255)},${Math.round(r * 255)})`;
    }
  }
  offsetHSL(e, t, n) {
    this.getHSL(sn);
    return this.setHSL(sn.h + e, sn.s + t, sn.l + n);
  }
  add(e) {
    this.r += e.r;
    this.g += e.g;
    this.b += e.b;
    return this;
  }
  addColors(e, t) {
    this.r = e.r + t.r;
    this.g = e.g + t.g;
    this.b = e.b + t.b;
    return this;
  }
  addScalar(e) {
    this.r += e;
    this.g += e;
    this.b += e;
    return this;
  }
  sub(e) {
    this.r = Math.max(0, this.r - e.r);
    this.g = Math.max(0, this.g - e.g);
    this.b = Math.max(0, this.b - e.b);
    return this;
  }
  multiply(e) {
    this.r *= e.r;
    this.g *= e.g;
    this.b *= e.b;
    return this;
  }
  multiplyScalar(e) {
    this.r *= e;
    this.g *= e;
    this.b *= e;
    return this;
  }
  lerp(e, t) {
    this.r += (e.r - this.r) * t;
    this.g += (e.g - this.g) * t;
    this.b += (e.b - this.b) * t;
    return this;
  }
  lerpColors(e, t, n) {
    this.r = e.r + (t.r - e.r) * n;
    this.g = e.g + (t.g - e.g) * n;
    this.b = e.b + (t.b - e.b) * n;
    return this;
  }
  lerpHSL(e, t) {
    this.getHSL(sn);
    e.getHSL(vi);
    const n = Yi(sn.h, vi.h, t);
    const r = Yi(sn.s, vi.s, t);
    const s = Yi(sn.l, vi.l, t);
    this.setHSL(n, r, s);
    return this;
  }
  setFromVector3(e) {
    this.r = e.x;
    this.g = e.y;
    this.b = e.z;
    return this;
  }
  applyMatrix3(e) {
    const t = this.r;
    const n = this.g;
    const r = this.b;
    const s = e.elements;
    this.r = s[0] * t + s[3] * n + s[6] * r;
    this.g = s[1] * t + s[4] * n + s[7] * r;
    this.b = s[2] * t + s[5] * n + s[8] * r;
    return this;
  }
  equals(e) {
    return e.r === this.r && e.g === this.g && e.b === this.b;
  }
  fromArray(e, t = 0) {
    this.r = e[t];
    this.g = e[t + 1];
    this.b = e[t + 2];
    return this;
  }
  toArray(e = [], t = 0) {
    e[t] = this.r;
    e[t + 1] = this.g;
    e[t + 2] = this.b;
    return e;
  }
  fromBufferAttribute(e, t) {
    this.r = e.getX(t);
    this.g = e.getY(t);
    this.b = e.getZ(t);
    return this;
  }
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    yield this.r;
    yield this.g;
    yield this.b;
  }
}
const gt = new We();
We.NAMES = Xs;
let $a = 0;
class oi extends zn {
  constructor() {
    super();
    this.isMaterial = true;
    Object.defineProperty(this, "id", {
      value: $a++
    });
    this.uuid = ri();
    this.name = "";
    this.type = "Material";
    this.blending = 1;
    this.side = 0;
    this.vertexColors = false;
    this.opacity = 1;
    this.transparent = false;
    this.alphaHash = false;
    this.blendSrc = 204;
    this.blendDst = 205;
    this.blendEquation = 100;
    this.blendSrcAlpha = null;
    this.blendDstAlpha = null;
    this.blendEquationAlpha = null;
    this.blendColor = new We(0, 0, 0);
    this.blendAlpha = 0;
    this.depthFunc = 3;
    this.depthTest = true;
    this.depthWrite = true;
    this.stencilWriteMask = 255;
    this.stencilFunc = 519;
    this.stencilRef = 0;
    this.stencilFuncMask = 255;
    this.stencilFail = 7680;
    this.stencilZFail = 7680;
    this.stencilZPass = 7680;
    this.stencilWrite = false;
    this.clippingPlanes = null;
    this.clipIntersection = false;
    this.clipShadows = false;
    this.shadowSide = null;
    this.colorWrite = true;
    this.precision = null;
    this.polygonOffset = false;
    this.polygonOffsetFactor = 0;
    this.polygonOffsetUnits = 0;
    this.dithering = false;
    this.alphaToCoverage = false;
    this.premultipliedAlpha = false;
    this.forceSinglePass = false;
    this.allowOverride = true;
    this.visible = true;
    this.toneMapped = true;
    this.userData = {};
    this.version = 0;
    this._alphaTest = 0;
  }
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(e) {
    if (this._alphaTest > 0 != e > 0) {
      this.version++;
    }
    this._alphaTest = e;
  }
  onBeforeRender() {}
  onBeforeCompile() {}
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  setValues(e) {
    if (e !== undefined) {
      for (const t in e) {
        const n = e[t];
        if (n === undefined) {
          Ce(`Material: parameter '${t}' has value of undefined.`);
          continue;
        }
        const r = this[t];
        if (r === undefined) {
          Ce(`Material: '${t}' is not a property of THREE.${this.type}.`);
          continue;
        }
        if (r && r.isColor) {
          r.set(n);
        } else if (r && r.isVector3 && n && n.isVector3) {
          r.copy(n);
        } else {
          this[t] = n;
        }
      }
    }
  }
  toJSON(e) {
    const t = e === undefined || typeof e == "string";
    if (t) {
      e = {
        textures: {},
        images: {}
      };
    }
    const n = {
      metadata: {
        version: 4.7,
        type: "Material",
        generator: "Material.toJSON"
      }
    };
    n.uuid = this.uuid;
    n.type = this.type;
    if (this.name !== "") {
      n.name = this.name;
    }
    if (this.color && this.color.isColor) {
      n.color = this.color.getHex();
    }
    if (this.roughness !== undefined) {
      n.roughness = this.roughness;
    }
    if (this.metalness !== undefined) {
      n.metalness = this.metalness;
    }
    if (this.sheen !== undefined) {
      n.sheen = this.sheen;
    }
    if (this.sheenColor && this.sheenColor.isColor) {
      n.sheenColor = this.sheenColor.getHex();
    }
    if (this.sheenRoughness !== undefined) {
      n.sheenRoughness = this.sheenRoughness;
    }
    if (this.emissive && this.emissive.isColor) {
      n.emissive = this.emissive.getHex();
    }
    if (this.emissiveIntensity !== undefined && this.emissiveIntensity !== 1) {
      n.emissiveIntensity = this.emissiveIntensity;
    }
    if (this.specular && this.specular.isColor) {
      n.specular = this.specular.getHex();
    }
    if (this.specularIntensity !== undefined) {
      n.specularIntensity = this.specularIntensity;
    }
    if (this.specularColor && this.specularColor.isColor) {
      n.specularColor = this.specularColor.getHex();
    }
    if (this.shininess !== undefined) {
      n.shininess = this.shininess;
    }
    if (this.clearcoat !== undefined) {
      n.clearcoat = this.clearcoat;
    }
    if (this.clearcoatRoughness !== undefined) {
      n.clearcoatRoughness = this.clearcoatRoughness;
    }
    if (this.clearcoatMap && this.clearcoatMap.isTexture) {
      n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid;
    }
    if (this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture) {
      n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid;
    }
    if (this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture) {
      n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid;
      n.clearcoatNormalScale = this.clearcoatNormalScale.toArray();
    }
    if (this.sheenColorMap && this.sheenColorMap.isTexture) {
      n.sheenColorMap = this.sheenColorMap.toJSON(e).uuid;
    }
    if (this.sheenRoughnessMap && this.sheenRoughnessMap.isTexture) {
      n.sheenRoughnessMap = this.sheenRoughnessMap.toJSON(e).uuid;
    }
    if (this.dispersion !== undefined) {
      n.dispersion = this.dispersion;
    }
    if (this.iridescence !== undefined) {
      n.iridescence = this.iridescence;
    }
    if (this.iridescenceIOR !== undefined) {
      n.iridescenceIOR = this.iridescenceIOR;
    }
    if (this.iridescenceThicknessRange !== undefined) {
      n.iridescenceThicknessRange = this.iridescenceThicknessRange;
    }
    if (this.iridescenceMap && this.iridescenceMap.isTexture) {
      n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid;
    }
    if (this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture) {
      n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(e).uuid;
    }
    if (this.anisotropy !== undefined) {
      n.anisotropy = this.anisotropy;
    }
    if (this.anisotropyRotation !== undefined) {
      n.anisotropyRotation = this.anisotropyRotation;
    }
    if (this.anisotropyMap && this.anisotropyMap.isTexture) {
      n.anisotropyMap = this.anisotropyMap.toJSON(e).uuid;
    }
    if (this.map && this.map.isTexture) {
      n.map = this.map.toJSON(e).uuid;
    }
    if (this.matcap && this.matcap.isTexture) {
      n.matcap = this.matcap.toJSON(e).uuid;
    }
    if (this.alphaMap && this.alphaMap.isTexture) {
      n.alphaMap = this.alphaMap.toJSON(e).uuid;
    }
    if (this.lightMap && this.lightMap.isTexture) {
      n.lightMap = this.lightMap.toJSON(e).uuid;
      n.lightMapIntensity = this.lightMapIntensity;
    }
    if (this.aoMap && this.aoMap.isTexture) {
      n.aoMap = this.aoMap.toJSON(e).uuid;
      n.aoMapIntensity = this.aoMapIntensity;
    }
    if (this.bumpMap && this.bumpMap.isTexture) {
      n.bumpMap = this.bumpMap.toJSON(e).uuid;
      n.bumpScale = this.bumpScale;
    }
    if (this.normalMap && this.normalMap.isTexture) {
      n.normalMap = this.normalMap.toJSON(e).uuid;
      n.normalMapType = this.normalMapType;
      n.normalScale = this.normalScale.toArray();
    }
    if (this.displacementMap && this.displacementMap.isTexture) {
      n.displacementMap = this.displacementMap.toJSON(e).uuid;
      n.displacementScale = this.displacementScale;
      n.displacementBias = this.displacementBias;
    }
    if (this.roughnessMap && this.roughnessMap.isTexture) {
      n.roughnessMap = this.roughnessMap.toJSON(e).uuid;
    }
    if (this.metalnessMap && this.metalnessMap.isTexture) {
      n.metalnessMap = this.metalnessMap.toJSON(e).uuid;
    }
    if (this.emissiveMap && this.emissiveMap.isTexture) {
      n.emissiveMap = this.emissiveMap.toJSON(e).uuid;
    }
    if (this.specularMap && this.specularMap.isTexture) {
      n.specularMap = this.specularMap.toJSON(e).uuid;
    }
    if (this.specularIntensityMap && this.specularIntensityMap.isTexture) {
      n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid;
    }
    if (this.specularColorMap && this.specularColorMap.isTexture) {
      n.specularColorMap = this.specularColorMap.toJSON(e).uuid;
    }
    if (this.envMap && this.envMap.isTexture) {
      n.envMap = this.envMap.toJSON(e).uuid;
      if (this.combine !== undefined) {
        n.combine = this.combine;
      }
    }
    if (this.envMapRotation !== undefined) {
      n.envMapRotation = this.envMapRotation.toArray();
    }
    if (this.envMapIntensity !== undefined) {
      n.envMapIntensity = this.envMapIntensity;
    }
    if (this.reflectivity !== undefined) {
      n.reflectivity = this.reflectivity;
    }
    if (this.refractionRatio !== undefined) {
      n.refractionRatio = this.refractionRatio;
    }
    if (this.gradientMap && this.gradientMap.isTexture) {
      n.gradientMap = this.gradientMap.toJSON(e).uuid;
    }
    if (this.transmission !== undefined) {
      n.transmission = this.transmission;
    }
    if (this.transmissionMap && this.transmissionMap.isTexture) {
      n.transmissionMap = this.transmissionMap.toJSON(e).uuid;
    }
    if (this.thickness !== undefined) {
      n.thickness = this.thickness;
    }
    if (this.thicknessMap && this.thicknessMap.isTexture) {
      n.thicknessMap = this.thicknessMap.toJSON(e).uuid;
    }
    if (this.attenuationDistance !== undefined && this.attenuationDistance !== Infinity) {
      n.attenuationDistance = this.attenuationDistance;
    }
    if (this.attenuationColor !== undefined) {
      n.attenuationColor = this.attenuationColor.getHex();
    }
    if (this.size !== undefined) {
      n.size = this.size;
    }
    if (this.shadowSide !== null) {
      n.shadowSide = this.shadowSide;
    }
    if (this.sizeAttenuation !== undefined) {
      n.sizeAttenuation = this.sizeAttenuation;
    }
    if (this.blending !== 1) {
      n.blending = this.blending;
    }
    if (this.side !== 0) {
      n.side = this.side;
    }
    if (this.vertexColors === true) {
      n.vertexColors = true;
    }
    if (this.opacity < 1) {
      n.opacity = this.opacity;
    }
    if (this.transparent === true) {
      n.transparent = true;
    }
    if (this.blendSrc !== 204) {
      n.blendSrc = this.blendSrc;
    }
    if (this.blendDst !== 205) {
      n.blendDst = this.blendDst;
    }
    if (this.blendEquation !== 100) {
      n.blendEquation = this.blendEquation;
    }
    if (this.blendSrcAlpha !== null) {
      n.blendSrcAlpha = this.blendSrcAlpha;
    }
    if (this.blendDstAlpha !== null) {
      n.blendDstAlpha = this.blendDstAlpha;
    }
    if (this.blendEquationAlpha !== null) {
      n.blendEquationAlpha = this.blendEquationAlpha;
    }
    if (this.blendColor && this.blendColor.isColor) {
      n.blendColor = this.blendColor.getHex();
    }
    if (this.blendAlpha !== 0) {
      n.blendAlpha = this.blendAlpha;
    }
    if (this.depthFunc !== 3) {
      n.depthFunc = this.depthFunc;
    }
    if (this.depthTest === false) {
      n.depthTest = this.depthTest;
    }
    if (this.depthWrite === false) {
      n.depthWrite = this.depthWrite;
    }
    if (this.colorWrite === false) {
      n.colorWrite = this.colorWrite;
    }
    if (this.stencilWriteMask !== 255) {
      n.stencilWriteMask = this.stencilWriteMask;
    }
    if (this.stencilFunc !== 519) {
      n.stencilFunc = this.stencilFunc;
    }
    if (this.stencilRef !== 0) {
      n.stencilRef = this.stencilRef;
    }
    if (this.stencilFuncMask !== 255) {
      n.stencilFuncMask = this.stencilFuncMask;
    }
    if (this.stencilFail !== 7680) {
      n.stencilFail = this.stencilFail;
    }
    if (this.stencilZFail !== 7680) {
      n.stencilZFail = this.stencilZFail;
    }
    if (this.stencilZPass !== 7680) {
      n.stencilZPass = this.stencilZPass;
    }
    if (this.stencilWrite === true) {
      n.stencilWrite = this.stencilWrite;
    }
    if (this.rotation !== undefined && this.rotation !== 0) {
      n.rotation = this.rotation;
    }
    if (this.polygonOffset === true) {
      n.polygonOffset = true;
    }
    if (this.polygonOffsetFactor !== 0) {
      n.polygonOffsetFactor = this.polygonOffsetFactor;
    }
    if (this.polygonOffsetUnits !== 0) {
      n.polygonOffsetUnits = this.polygonOffsetUnits;
    }
    if (this.linewidth !== undefined && this.linewidth !== 1) {
      n.linewidth = this.linewidth;
    }
    if (this.dashSize !== undefined) {
      n.dashSize = this.dashSize;
    }
    if (this.gapSize !== undefined) {
      n.gapSize = this.gapSize;
    }
    if (this.scale !== undefined) {
      n.scale = this.scale;
    }
    if (this.dithering === true) {
      n.dithering = true;
    }
    if (this.alphaTest > 0) {
      n.alphaTest = this.alphaTest;
    }
    if (this.alphaHash === true) {
      n.alphaHash = true;
    }
    if (this.alphaToCoverage === true) {
      n.alphaToCoverage = true;
    }
    if (this.premultipliedAlpha === true) {
      n.premultipliedAlpha = true;
    }
    if (this.forceSinglePass === true) {
      n.forceSinglePass = true;
    }
    if (this.allowOverride === false) {
      n.allowOverride = false;
    }
    if (this.wireframe === true) {
      n.wireframe = true;
    }
    if (this.wireframeLinewidth > 1) {
      n.wireframeLinewidth = this.wireframeLinewidth;
    }
    if (this.wireframeLinecap !== "round") {
      n.wireframeLinecap = this.wireframeLinecap;
    }
    if (this.wireframeLinejoin !== "round") {
      n.wireframeLinejoin = this.wireframeLinejoin;
    }
    if (this.flatShading === true) {
      n.flatShading = true;
    }
    if (this.visible === false) {
      n.visible = false;
    }
    if (this.toneMapped === false) {
      n.toneMapped = false;
    }
    if (this.fog === false) {
      n.fog = false;
    }
    if (Object.keys(this.userData).length > 0) {
      n.userData = this.userData;
    }
    function r(s) {
      const o = [];
      for (const a in s) {
        const c = s[a];
        delete c.metadata;
        o.push(c);
      }
      return o;
    }
    if (t) {
      const s = r(e.textures);
      const o = r(e.images);
      if (s.length > 0) {
        n.textures = s;
      }
      if (o.length > 0) {
        n.images = o;
      }
    }
    return n;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.name = e.name;
    this.blending = e.blending;
    this.side = e.side;
    this.vertexColors = e.vertexColors;
    this.opacity = e.opacity;
    this.transparent = e.transparent;
    this.blendSrc = e.blendSrc;
    this.blendDst = e.blendDst;
    this.blendEquation = e.blendEquation;
    this.blendSrcAlpha = e.blendSrcAlpha;
    this.blendDstAlpha = e.blendDstAlpha;
    this.blendEquationAlpha = e.blendEquationAlpha;
    this.blendColor.copy(e.blendColor);
    this.blendAlpha = e.blendAlpha;
    this.depthFunc = e.depthFunc;
    this.depthTest = e.depthTest;
    this.depthWrite = e.depthWrite;
    this.stencilWriteMask = e.stencilWriteMask;
    this.stencilFunc = e.stencilFunc;
    this.stencilRef = e.stencilRef;
    this.stencilFuncMask = e.stencilFuncMask;
    this.stencilFail = e.stencilFail;
    this.stencilZFail = e.stencilZFail;
    this.stencilZPass = e.stencilZPass;
    this.stencilWrite = e.stencilWrite;
    const t = e.clippingPlanes;
    let n = null;
    if (t !== null) {
      const r = t.length;
      n = new Array(r);
      for (let s = 0; s !== r; ++s) {
        n[s] = t[s].clone();
      }
    }
    this.clippingPlanes = n;
    this.clipIntersection = e.clipIntersection;
    this.clipShadows = e.clipShadows;
    this.shadowSide = e.shadowSide;
    this.colorWrite = e.colorWrite;
    this.precision = e.precision;
    this.polygonOffset = e.polygonOffset;
    this.polygonOffsetFactor = e.polygonOffsetFactor;
    this.polygonOffsetUnits = e.polygonOffsetUnits;
    this.dithering = e.dithering;
    this.alphaTest = e.alphaTest;
    this.alphaHash = e.alphaHash;
    this.alphaToCoverage = e.alphaToCoverage;
    this.premultipliedAlpha = e.premultipliedAlpha;
    this.forceSinglePass = e.forceSinglePass;
    this.allowOverride = e.allowOverride;
    this.visible = e.visible;
    this.toneMapped = e.toneMapped;
    this.userData = JSON.parse(JSON.stringify(e.userData));
    return this;
  }
  dispose() {
    this.dispatchEvent({
      type: "dispose"
    });
  }
  set needsUpdate(e) {
    if (e === true) {
      this.version++;
    }
  }
}
class qs extends oi {
  constructor(e) {
    super();
    this.isMeshBasicMaterial = true;
    this.type = "MeshBasicMaterial";
    this.color = new We(16777215);
    this.map = null;
    this.lightMap = null;
    this.lightMapIntensity = 1;
    this.aoMap = null;
    this.aoMapIntensity = 1;
    this.specularMap = null;
    this.alphaMap = null;
    this.envMap = null;
    this.envMapRotation = new kt();
    this.combine = 0;
    this.reflectivity = 1;
    this.refractionRatio = 0.98;
    this.wireframe = false;
    this.wireframeLinewidth = 1;
    this.wireframeLinecap = "round";
    this.wireframeLinejoin = "round";
    this.fog = true;
    this.setValues(e);
  }
  copy(e) {
    super.copy(e);
    this.color.copy(e.color);
    this.map = e.map;
    this.lightMap = e.lightMap;
    this.lightMapIntensity = e.lightMapIntensity;
    this.aoMap = e.aoMap;
    this.aoMapIntensity = e.aoMapIntensity;
    this.specularMap = e.specularMap;
    this.alphaMap = e.alphaMap;
    this.envMap = e.envMap;
    this.envMapRotation.copy(e.envMapRotation);
    this.combine = e.combine;
    this.reflectivity = e.reflectivity;
    this.refractionRatio = e.refractionRatio;
    this.wireframe = e.wireframe;
    this.wireframeLinewidth = e.wireframeLinewidth;
    this.wireframeLinecap = e.wireframeLinecap;
    this.wireframeLinejoin = e.wireframeLinejoin;
    this.fog = e.fog;
    return this;
  }
}
const ut = new B();
const Si = new ke();
let Ka = 0;
class Bt {
  constructor(e, t, n = false) {
    if (Array.isArray(e)) {
      throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    }
    this.isBufferAttribute = true;
    Object.defineProperty(this, "id", {
      value: Ka++
    });
    this.name = "";
    this.array = e;
    this.itemSize = t;
    this.count = e !== undefined ? e.length / t : 0;
    this.normalized = n;
    this.usage = 35044;
    this.updateRanges = [];
    this.gpuType = 1015;
    this.version = 0;
  }
  onUploadCallback() {}
  set needsUpdate(e) {
    if (e === true) {
      this.version++;
    }
  }
  setUsage(e) {
    this.usage = e;
    return this;
  }
  addUpdateRange(e, t) {
    this.updateRanges.push({
      start: e,
      count: t
    });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  copy(e) {
    this.name = e.name;
    this.array = new e.array.constructor(e.array);
    this.itemSize = e.itemSize;
    this.count = e.count;
    this.normalized = e.normalized;
    this.usage = e.usage;
    this.gpuType = e.gpuType;
    return this;
  }
  copyAt(e, t, n) {
    e *= this.itemSize;
    n *= t.itemSize;
    for (let r = 0, s = this.itemSize; r < s; r++) {
      this.array[e + r] = t.array[n + r];
    }
    return this;
  }
  copyArray(e) {
    this.array.set(e);
    return this;
  }
  applyMatrix3(e) {
    if (this.itemSize === 2) {
      for (let t = 0, n = this.count; t < n; t++) {
        Si.fromBufferAttribute(this, t);
        Si.applyMatrix3(e);
        this.setXY(t, Si.x, Si.y);
      }
    } else if (this.itemSize === 3) {
      for (let t = 0, n = this.count; t < n; t++) {
        ut.fromBufferAttribute(this, t);
        ut.applyMatrix3(e);
        this.setXYZ(t, ut.x, ut.y, ut.z);
      }
    }
    return this;
  }
  applyMatrix4(e) {
    for (let t = 0, n = this.count; t < n; t++) {
      ut.fromBufferAttribute(this, t);
      ut.applyMatrix4(e);
      this.setXYZ(t, ut.x, ut.y, ut.z);
    }
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++) {
      ut.fromBufferAttribute(this, t);
      ut.applyNormalMatrix(e);
      this.setXYZ(t, ut.x, ut.y, ut.z);
    }
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++) {
      ut.fromBufferAttribute(this, t);
      ut.transformDirection(e);
      this.setXYZ(t, ut.x, ut.y, ut.z);
    }
    return this;
  }
  set(e, t = 0) {
    this.array.set(e, t);
    return this;
  }
  getComponent(e, t) {
    let n = this.array[e * this.itemSize + t];
    if (this.normalized) {
      n = kn(n, this.array);
    }
    return n;
  }
  setComponent(e, t, n) {
    if (this.normalized) {
      n = Tt(n, this.array);
    }
    this.array[e * this.itemSize + t] = n;
    return this;
  }
  getX(e) {
    let t = this.array[e * this.itemSize];
    if (this.normalized) {
      t = kn(t, this.array);
    }
    return t;
  }
  setX(e, t) {
    if (this.normalized) {
      t = Tt(t, this.array);
    }
    this.array[e * this.itemSize] = t;
    return this;
  }
  getY(e) {
    let t = this.array[e * this.itemSize + 1];
    if (this.normalized) {
      t = kn(t, this.array);
    }
    return t;
  }
  setY(e, t) {
    if (this.normalized) {
      t = Tt(t, this.array);
    }
    this.array[e * this.itemSize + 1] = t;
    return this;
  }
  getZ(e) {
    let t = this.array[e * this.itemSize + 2];
    if (this.normalized) {
      t = kn(t, this.array);
    }
    return t;
  }
  setZ(e, t) {
    if (this.normalized) {
      t = Tt(t, this.array);
    }
    this.array[e * this.itemSize + 2] = t;
    return this;
  }
  getW(e) {
    let t = this.array[e * this.itemSize + 3];
    if (this.normalized) {
      t = kn(t, this.array);
    }
    return t;
  }
  setW(e, t) {
    if (this.normalized) {
      t = Tt(t, this.array);
    }
    this.array[e * this.itemSize + 3] = t;
    return this;
  }
  setXY(e, t, n) {
    e *= this.itemSize;
    if (this.normalized) {
      t = Tt(t, this.array);
      n = Tt(n, this.array);
    }
    this.array[e + 0] = t;
    this.array[e + 1] = n;
    return this;
  }
  setXYZ(e, t, n, r) {
    e *= this.itemSize;
    if (this.normalized) {
      t = Tt(t, this.array);
      n = Tt(n, this.array);
      r = Tt(r, this.array);
    }
    this.array[e + 0] = t;
    this.array[e + 1] = n;
    this.array[e + 2] = r;
    return this;
  }
  setXYZW(e, t, n, r, s) {
    e *= this.itemSize;
    if (this.normalized) {
      t = Tt(t, this.array);
      n = Tt(n, this.array);
      r = Tt(r, this.array);
      s = Tt(s, this.array);
    }
    this.array[e + 0] = t;
    this.array[e + 1] = n;
    this.array[e + 2] = r;
    this.array[e + 3] = s;
    return this;
  }
  onUpload(e) {
    this.onUploadCallback = e;
    return this;
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    const e = {
      itemSize: this.itemSize,
      type: this.array.constructor.name,
      array: Array.from(this.array),
      normalized: this.normalized
    };
    if (this.name !== "") {
      e.name = this.name;
    }
    if (this.usage !== 35044) {
      e.usage = this.usage;
    }
    return e;
  }
}
class Ys extends Bt {
  constructor(e, t, n) {
    super(new Uint16Array(e), t, n);
  }
}
class $s extends Bt {
  constructor(e, t, n) {
    super(new Uint32Array(e), t, n);
  }
}
class Dt extends Bt {
  constructor(e, t, n) {
    super(new Float32Array(e), t, n);
  }
}
let Za = 0;
const wt = new it();
const fr = new xt();
const wn = new B();
const Rt = new xn();
const Yn = new xn();
const pt = new B();
class qt extends zn {
  constructor() {
    super();
    this.isBufferGeometry = true;
    Object.defineProperty(this, "id", {
      value: Za++
    });
    this.uuid = ri();
    this.name = "";
    this.type = "BufferGeometry";
    this.index = null;
    this.indirect = null;
    this.indirectOffset = 0;
    this.attributes = {};
    this.morphAttributes = {};
    this.morphTargetsRelative = false;
    this.groups = [];
    this.boundingBox = null;
    this.boundingSphere = null;
    this.drawRange = {
      start: 0,
      count: Infinity
    };
    this.userData = {};
  }
  getIndex() {
    return this.index;
  }
  setIndex(e) {
    if (Array.isArray(e)) {
      this.index = new (Hs(e) ? $s : Ys)(e, 1);
    } else {
      this.index = e;
    }
    return this;
  }
  setIndirect(e, t = 0) {
    this.indirect = e;
    this.indirectOffset = t;
    return this;
  }
  getIndirect() {
    return this.indirect;
  }
  getAttribute(e) {
    return this.attributes[e];
  }
  setAttribute(e, t) {
    this.attributes[e] = t;
    return this;
  }
  deleteAttribute(e) {
    delete this.attributes[e];
    return this;
  }
  hasAttribute(e) {
    return this.attributes[e] !== undefined;
  }
  addGroup(e, t, n = 0) {
    this.groups.push({
      start: e,
      count: t,
      materialIndex: n
    });
  }
  clearGroups() {
    this.groups = [];
  }
  setDrawRange(e, t) {
    this.drawRange.start = e;
    this.drawRange.count = t;
  }
  applyMatrix4(e) {
    const t = this.attributes.position;
    if (t !== undefined) {
      t.applyMatrix4(e);
      t.needsUpdate = true;
    }
    const n = this.attributes.normal;
    if (n !== undefined) {
      const s = new Pe().getNormalMatrix(e);
      n.applyNormalMatrix(s);
      n.needsUpdate = true;
    }
    const r = this.attributes.tangent;
    if (r !== undefined) {
      r.transformDirection(e);
      r.needsUpdate = true;
    }
    if (this.boundingBox !== null) {
      this.computeBoundingBox();
    }
    if (this.boundingSphere !== null) {
      this.computeBoundingSphere();
    }
    return this;
  }
  applyQuaternion(e) {
    wt.makeRotationFromQuaternion(e);
    this.applyMatrix4(wt);
    return this;
  }
  rotateX(e) {
    wt.makeRotationX(e);
    this.applyMatrix4(wt);
    return this;
  }
  rotateY(e) {
    wt.makeRotationY(e);
    this.applyMatrix4(wt);
    return this;
  }
  rotateZ(e) {
    wt.makeRotationZ(e);
    this.applyMatrix4(wt);
    return this;
  }
  translate(e, t, n) {
    wt.makeTranslation(e, t, n);
    this.applyMatrix4(wt);
    return this;
  }
  scale(e, t, n) {
    wt.makeScale(e, t, n);
    this.applyMatrix4(wt);
    return this;
  }
  lookAt(e) {
    fr.lookAt(e);
    fr.updateMatrix();
    this.applyMatrix4(fr.matrix);
    return this;
  }
  center() {
    this.computeBoundingBox();
    this.boundingBox.getCenter(wn).negate();
    this.translate(wn.x, wn.y, wn.z);
    return this;
  }
  setFromPoints(e) {
    const t = this.getAttribute("position");
    if (t === undefined) {
      const n = [];
      for (let r = 0, s = e.length; r < s; r++) {
        const o = e[r];
        n.push(o.x, o.y, o.z || 0);
      }
      this.setAttribute("position", new Dt(n, 3));
    } else {
      const n = Math.min(e.length, t.count);
      for (let r = 0; r < n; r++) {
        const s = e[r];
        t.setXYZ(r, s.x, s.y, s.z || 0);
      }
      if (e.length > t.count) {
        Ce("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");
      }
      t.needsUpdate = true;
    }
    return this;
  }
  computeBoundingBox() {
    if (this.boundingBox === null) {
      this.boundingBox = new xn();
    }
    const e = this.attributes.position;
    const t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      He("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.", this);
      this.boundingBox.set(new B(-Infinity, -Infinity, -Infinity), new B(Infinity, Infinity, Infinity));
      return;
    }
    if (e !== undefined) {
      this.boundingBox.setFromBufferAttribute(e);
      if (t) {
        for (let n = 0, r = t.length; n < r; n++) {
          const s = t[n];
          Rt.setFromBufferAttribute(s);
          if (this.morphTargetsRelative) {
            pt.addVectors(this.boundingBox.min, Rt.min);
            this.boundingBox.expandByPoint(pt);
            pt.addVectors(this.boundingBox.max, Rt.max);
            this.boundingBox.expandByPoint(pt);
          } else {
            this.boundingBox.expandByPoint(Rt.min);
            this.boundingBox.expandByPoint(Rt.max);
          }
        }
      }
    } else {
      this.boundingBox.makeEmpty();
    }
    if (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) {
      He("BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The \"position\" attribute is likely to have NaN values.", this);
    }
  }
  computeBoundingSphere() {
    if (this.boundingSphere === null) {
      this.boundingSphere = new ai();
    }
    const e = this.attributes.position;
    const t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      He("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.", this);
      this.boundingSphere.set(new B(), Infinity);
      return;
    }
    if (e) {
      const n = this.boundingSphere.center;
      Rt.setFromBufferAttribute(e);
      if (t) {
        for (let s = 0, o = t.length; s < o; s++) {
          const a = t[s];
          Yn.setFromBufferAttribute(a);
          if (this.morphTargetsRelative) {
            pt.addVectors(Rt.min, Yn.min);
            Rt.expandByPoint(pt);
            pt.addVectors(Rt.max, Yn.max);
            Rt.expandByPoint(pt);
          } else {
            Rt.expandByPoint(Yn.min);
            Rt.expandByPoint(Yn.max);
          }
        }
      }
      Rt.getCenter(n);
      let r = 0;
      for (let s = 0, o = e.count; s < o; s++) {
        pt.fromBufferAttribute(e, s);
        r = Math.max(r, n.distanceToSquared(pt));
      }
      if (t) {
        for (let s = 0, o = t.length; s < o; s++) {
          const a = t[s];
          const c = this.morphTargetsRelative;
          for (let l = 0, u = a.count; l < u; l++) {
            pt.fromBufferAttribute(a, l);
            if (c) {
              wn.fromBufferAttribute(e, l);
              pt.add(wn);
            }
            r = Math.max(r, n.distanceToSquared(pt));
          }
        }
      }
      this.boundingSphere.radius = Math.sqrt(r);
      if (isNaN(this.boundingSphere.radius)) {
        He("BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The \"position\" attribute is likely to have NaN values.", this);
      }
    }
  }
  computeTangents() {
    const e = this.index;
    const t = this.attributes;
    if (e === null || t.position === undefined || t.normal === undefined || t.uv === undefined) {
      He("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
      return;
    }
    const n = t.position;
    const r = t.normal;
    const s = t.uv;
    if (this.hasAttribute("tangent") === false) {
      this.setAttribute("tangent", new Bt(new Float32Array(n.count * 4), 4));
    }
    const o = this.getAttribute("tangent");
    const a = [];
    const c = [];
    for (let U = 0; U < n.count; U++) {
      a[U] = new B();
      c[U] = new B();
    }
    const l = new B();
    const u = new B();
    const f = new B();
    const d = new ke();
    const p = new ke();
    const x = new ke();
    const _ = new B();
    const m = new B();
    function h(U, v, M) {
      l.fromBufferAttribute(n, U);
      u.fromBufferAttribute(n, v);
      f.fromBufferAttribute(n, M);
      d.fromBufferAttribute(s, U);
      p.fromBufferAttribute(s, v);
      x.fromBufferAttribute(s, M);
      u.sub(l);
      f.sub(l);
      p.sub(d);
      x.sub(d);
      const D = 1 / (p.x * x.y - x.x * p.y);
      if (isFinite(D)) {
        _.copy(u).multiplyScalar(x.y).addScaledVector(f, -p.y).multiplyScalar(D);
        m.copy(f).multiplyScalar(p.x).addScaledVector(u, -x.x).multiplyScalar(D);
        a[U].add(_);
        a[v].add(_);
        a[M].add(_);
        c[U].add(m);
        c[v].add(m);
        c[M].add(m);
      }
    }
    let b = this.groups;
    if (b.length === 0) {
      b = [{
        start: 0,
        count: e.count
      }];
    }
    for (let U = 0, v = b.length; U < v; ++U) {
      const M = b[U];
      const D = M.start;
      const O = M.count;
      for (let N = D, H = D + O; N < H; N += 3) {
        h(e.getX(N + 0), e.getX(N + 1), e.getX(N + 2));
      }
    }
    const y = new B();
    const T = new B();
    const A = new B();
    const R = new B();
    function w(U) {
      A.fromBufferAttribute(r, U);
      R.copy(A);
      const v = a[U];
      y.copy(v);
      y.sub(A.multiplyScalar(A.dot(v))).normalize();
      T.crossVectors(R, v);
      const D = T.dot(c[U]) < 0 ? -1 : 1;
      o.setXYZW(U, y.x, y.y, y.z, D);
    }
    for (let U = 0, v = b.length; U < v; ++U) {
      const M = b[U];
      const D = M.start;
      const O = M.count;
      for (let N = D, H = D + O; N < H; N += 3) {
        w(e.getX(N + 0));
        w(e.getX(N + 1));
        w(e.getX(N + 2));
      }
    }
  }
  computeVertexNormals() {
    const e = this.index;
    const t = this.getAttribute("position");
    if (t !== undefined) {
      let n = this.getAttribute("normal");
      if (n === undefined) {
        n = new Bt(new Float32Array(t.count * 3), 3);
        this.setAttribute("normal", n);
      } else {
        for (let d = 0, p = n.count; d < p; d++) {
          n.setXYZ(d, 0, 0, 0);
        }
      }
      const r = new B();
      const s = new B();
      const o = new B();
      const a = new B();
      const c = new B();
      const l = new B();
      const u = new B();
      const f = new B();
      if (e) {
        for (let d = 0, p = e.count; d < p; d += 3) {
          const x = e.getX(d + 0);
          const _ = e.getX(d + 1);
          const m = e.getX(d + 2);
          r.fromBufferAttribute(t, x);
          s.fromBufferAttribute(t, _);
          o.fromBufferAttribute(t, m);
          u.subVectors(o, s);
          f.subVectors(r, s);
          u.cross(f);
          a.fromBufferAttribute(n, x);
          c.fromBufferAttribute(n, _);
          l.fromBufferAttribute(n, m);
          a.add(u);
          c.add(u);
          l.add(u);
          n.setXYZ(x, a.x, a.y, a.z);
          n.setXYZ(_, c.x, c.y, c.z);
          n.setXYZ(m, l.x, l.y, l.z);
        }
      } else {
        for (let d = 0, p = t.count; d < p; d += 3) {
          r.fromBufferAttribute(t, d + 0);
          s.fromBufferAttribute(t, d + 1);
          o.fromBufferAttribute(t, d + 2);
          u.subVectors(o, s);
          f.subVectors(r, s);
          u.cross(f);
          n.setXYZ(d + 0, u.x, u.y, u.z);
          n.setXYZ(d + 1, u.x, u.y, u.z);
          n.setXYZ(d + 2, u.x, u.y, u.z);
        }
      }
      this.normalizeNormals();
      n.needsUpdate = true;
    }
  }
  normalizeNormals() {
    const e = this.attributes.normal;
    for (let t = 0, n = e.count; t < n; t++) {
      pt.fromBufferAttribute(e, t);
      pt.normalize();
      e.setXYZ(t, pt.x, pt.y, pt.z);
    }
  }
  toNonIndexed() {
    function e(a, c) {
      const l = a.array;
      const u = a.itemSize;
      const f = a.normalized;
      const d = new l.constructor(c.length * u);
      let p = 0;
      let x = 0;
      for (let _ = 0, m = c.length; _ < m; _++) {
        if (a.isInterleavedBufferAttribute) {
          p = c[_] * a.data.stride + a.offset;
        } else {
          p = c[_] * u;
        }
        for (let h = 0; h < u; h++) {
          d[x++] = l[p++];
        }
      }
      return new Bt(d, u, f);
    }
    if (this.index === null) {
      Ce("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.");
      return this;
    }
    const t = new qt();
    const n = this.index.array;
    const r = this.attributes;
    for (const a in r) {
      const c = r[a];
      const l = e(c, n);
      t.setAttribute(a, l);
    }
    const s = this.morphAttributes;
    for (const a in s) {
      const c = [];
      const l = s[a];
      for (let u = 0, f = l.length; u < f; u++) {
        const d = l[u];
        const p = e(d, n);
        c.push(p);
      }
      t.morphAttributes[a] = c;
    }
    t.morphTargetsRelative = this.morphTargetsRelative;
    const o = this.groups;
    for (let a = 0, c = o.length; a < c; a++) {
      const l = o[a];
      t.addGroup(l.start, l.count, l.materialIndex);
    }
    return t;
  }
  toJSON() {
    const e = {
      metadata: {
        version: 4.7,
        type: "BufferGeometry",
        generator: "BufferGeometry.toJSON"
      }
    };
    e.uuid = this.uuid;
    e.type = this.type;
    if (this.name !== "") {
      e.name = this.name;
    }
    if (Object.keys(this.userData).length > 0) {
      e.userData = this.userData;
    }
    if (this.parameters !== undefined) {
      const c = this.parameters;
      for (const l in c) {
        if (c[l] !== undefined) {
          e[l] = c[l];
        }
      }
      return e;
    }
    e.data = {
      attributes: {}
    };
    const t = this.index;
    if (t !== null) {
      e.data.index = {
        type: t.array.constructor.name,
        array: Array.prototype.slice.call(t.array)
      };
    }
    const n = this.attributes;
    for (const c in n) {
      const l = n[c];
      e.data.attributes[c] = l.toJSON(e.data);
    }
    const r = {};
    let s = false;
    for (const c in this.morphAttributes) {
      const l = this.morphAttributes[c];
      const u = [];
      for (let f = 0, d = l.length; f < d; f++) {
        const p = l[f];
        u.push(p.toJSON(e.data));
      }
      if (u.length > 0) {
        r[c] = u;
        s = true;
      }
    }
    if (s) {
      e.data.morphAttributes = r;
      e.data.morphTargetsRelative = this.morphTargetsRelative;
    }
    const o = this.groups;
    if (o.length > 0) {
      e.data.groups = JSON.parse(JSON.stringify(o));
    }
    const a = this.boundingSphere;
    if (a !== null) {
      e.data.boundingSphere = a.toJSON();
    }
    return e;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.index = null;
    this.attributes = {};
    this.morphAttributes = {};
    this.groups = [];
    this.boundingBox = null;
    this.boundingSphere = null;
    const t = {};
    this.name = e.name;
    const n = e.index;
    if (n !== null) {
      this.setIndex(n.clone());
    }
    const r = e.attributes;
    for (const l in r) {
      const u = r[l];
      this.setAttribute(l, u.clone(t));
    }
    const s = e.morphAttributes;
    for (const l in s) {
      const u = [];
      const f = s[l];
      for (let d = 0, p = f.length; d < p; d++) {
        u.push(f[d].clone(t));
      }
      this.morphAttributes[l] = u;
    }
    this.morphTargetsRelative = e.morphTargetsRelative;
    const o = e.groups;
    for (let l = 0, u = o.length; l < u; l++) {
      const f = o[l];
      this.addGroup(f.start, f.count, f.materialIndex);
    }
    const a = e.boundingBox;
    if (a !== null) {
      this.boundingBox = a.clone();
    }
    const c = e.boundingSphere;
    if (c !== null) {
      this.boundingSphere = c.clone();
    }
    this.drawRange.start = e.drawRange.start;
    this.drawRange.count = e.drawRange.count;
    this.userData = e.userData;
    return this;
  }
  dispose() {
    this.dispatchEvent({
      type: "dispose"
    });
  }
}
const ns = new it();
const fn = new Va();
const Mi = new ai();
const is = new B();
const Ei = new B();
const Ti = new B();
const yi = new B();
const dr = new B();
const bi = new B();
const rs = new B();
const Ai = new B();
class Ot extends xt {
  constructor(e = new qt(), t = new qs()) {
    super();
    this.isMesh = true;
    this.type = "Mesh";
    this.geometry = e;
    this.material = t;
    this.morphTargetDictionary = undefined;
    this.morphTargetInfluences = undefined;
    this.count = 1;
    this.updateMorphTargets();
  }
  copy(e, t) {
    super.copy(e, t);
    if (e.morphTargetInfluences !== undefined) {
      this.morphTargetInfluences = e.morphTargetInfluences.slice();
    }
    if (e.morphTargetDictionary !== undefined) {
      this.morphTargetDictionary = Object.assign({}, e.morphTargetDictionary);
    }
    this.material = Array.isArray(e.material) ? e.material.slice() : e.material;
    this.geometry = e.geometry;
    return this;
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes;
    const n = Object.keys(t);
    if (n.length > 0) {
      const r = t[n[0]];
      if (r !== undefined) {
        this.morphTargetInfluences = [];
        this.morphTargetDictionary = {};
        for (let s = 0, o = r.length; s < o; s++) {
          const a = r[s].name || String(s);
          this.morphTargetInfluences.push(0);
          this.morphTargetDictionary[a] = s;
        }
      }
    }
  }
  getVertexPosition(e, t) {
    const n = this.geometry;
    const r = n.attributes.position;
    const s = n.morphAttributes.position;
    const o = n.morphTargetsRelative;
    t.fromBufferAttribute(r, e);
    const a = this.morphTargetInfluences;
    if (s && a) {
      bi.set(0, 0, 0);
      for (let c = 0, l = s.length; c < l; c++) {
        const u = a[c];
        const f = s[c];
        if (u !== 0) {
          dr.fromBufferAttribute(f, e);
          if (o) {
            bi.addScaledVector(dr, u);
          } else {
            bi.addScaledVector(dr.sub(t), u);
          }
        }
      }
      t.add(bi);
    }
    return t;
  }
  raycast(e, t) {
    const n = this.geometry;
    const r = this.material;
    const s = this.matrixWorld;
    if (r !== undefined) {
      if (n.boundingSphere === null) {
        n.computeBoundingSphere();
      }
      Mi.copy(n.boundingSphere);
      Mi.applyMatrix4(s);
      fn.copy(e.ray).recast(e.near);
      if (Mi.containsPoint(fn.origin) !== false || fn.intersectSphere(Mi, is) !== null && !(fn.origin.distanceToSquared(is) > (e.far - e.near) ** 2)) {
        ns.copy(s).invert();
        fn.copy(e.ray).applyMatrix4(ns);
        if (n.boundingBox === null || fn.intersectsBox(n.boundingBox) !== false) {
          this._computeIntersections(e, t, fn);
        }
      }
    }
  }
  _computeIntersections(e, t, n) {
    let r;
    const s = this.geometry;
    const o = this.material;
    const a = s.index;
    const c = s.attributes.position;
    const l = s.attributes.uv;
    const u = s.attributes.uv1;
    const f = s.attributes.normal;
    const d = s.groups;
    const p = s.drawRange;
    if (a !== null) {
      if (Array.isArray(o)) {
        for (let x = 0, _ = d.length; x < _; x++) {
          const m = d[x];
          const h = o[m.materialIndex];
          const b = Math.max(m.start, p.start);
          const y = Math.min(a.count, Math.min(m.start + m.count, p.start + p.count));
          for (let T = b, A = y; T < A; T += 3) {
            const R = a.getX(T);
            const w = a.getX(T + 1);
            const U = a.getX(T + 2);
            r = Ri(this, h, e, n, l, u, f, R, w, U);
            if (r) {
              r.faceIndex = Math.floor(T / 3);
              r.face.materialIndex = m.materialIndex;
              t.push(r);
            }
          }
        }
      } else {
        const x = Math.max(0, p.start);
        const _ = Math.min(a.count, p.start + p.count);
        for (let m = x, h = _; m < h; m += 3) {
          const b = a.getX(m);
          const y = a.getX(m + 1);
          const T = a.getX(m + 2);
          r = Ri(this, o, e, n, l, u, f, b, y, T);
          if (r) {
            r.faceIndex = Math.floor(m / 3);
            t.push(r);
          }
        }
      }
    } else if (c !== undefined) {
      if (Array.isArray(o)) {
        for (let x = 0, _ = d.length; x < _; x++) {
          const m = d[x];
          const h = o[m.materialIndex];
          const b = Math.max(m.start, p.start);
          const y = Math.min(c.count, Math.min(m.start + m.count, p.start + p.count));
          for (let T = b, A = y; T < A; T += 3) {
            const R = T;
            const w = T + 1;
            const U = T + 2;
            r = Ri(this, h, e, n, l, u, f, R, w, U);
            if (r) {
              r.faceIndex = Math.floor(T / 3);
              r.face.materialIndex = m.materialIndex;
              t.push(r);
            }
          }
        }
      } else {
        const x = Math.max(0, p.start);
        const _ = Math.min(c.count, p.start + p.count);
        for (let m = x, h = _; m < h; m += 3) {
          const b = m;
          const y = m + 1;
          const T = m + 2;
          r = Ri(this, o, e, n, l, u, f, b, y, T);
          if (r) {
            r.faceIndex = Math.floor(m / 3);
            t.push(r);
          }
        }
      }
    }
  }
}
function ja(i, e, t, n, r, s, o, a) {
  let c;
  if (e.side === 1) {
    c = n.intersectTriangle(o, s, r, true, a);
  } else {
    c = n.intersectTriangle(r, s, o, e.side === 0, a);
  }
  if (c === null) {
    return null;
  }
  Ai.copy(a);
  Ai.applyMatrix4(i.matrixWorld);
  const l = t.ray.origin.distanceTo(Ai);
  if (l < t.near || l > t.far) {
    return null;
  } else {
    return {
      distance: l,
      point: Ai.clone(),
      object: i
    };
  }
}
function Ri(i, e, t, n, r, s, o, a, c, l) {
  i.getVertexPosition(a, Ei);
  i.getVertexPosition(c, Ti);
  i.getVertexPosition(l, yi);
  const u = ja(i, e, t, n, Ei, Ti, yi, rs);
  if (u) {
    const f = new B();
    Nt.getBarycoord(rs, Ei, Ti, yi, f);
    if (r) {
      u.uv = Nt.getInterpolatedAttribute(r, a, c, l, f, new ke());
    }
    if (s) {
      u.uv1 = Nt.getInterpolatedAttribute(s, a, c, l, f, new ke());
    }
    if (o) {
      u.normal = Nt.getInterpolatedAttribute(o, a, c, l, f, new B());
      if (u.normal.dot(n.direction) > 0) {
        u.normal.multiplyScalar(-1);
      }
    }
    const d = {
      a,
      b: c,
      c: l,
      normal: new B(),
      materialIndex: 0
    };
    Nt.getNormal(Ei, Ti, yi, d.normal);
    u.face = d;
    u.barycoord = f;
  }
  return u;
}
class li extends qt {
  constructor(e = 1, t = 1, n = 1, r = 1, s = 1, o = 1) {
    super();
    this.type = "BoxGeometry";
    this.parameters = {
      width: e,
      height: t,
      depth: n,
      widthSegments: r,
      heightSegments: s,
      depthSegments: o
    };
    const a = this;
    r = Math.floor(r);
    s = Math.floor(s);
    o = Math.floor(o);
    const c = [];
    const l = [];
    const u = [];
    const f = [];
    let d = 0;
    let p = 0;
    x("z", "y", "x", -1, -1, n, t, e, o, s, 0);
    x("z", "y", "x", 1, -1, n, t, -e, o, s, 1);
    x("x", "z", "y", 1, 1, e, n, t, r, o, 2);
    x("x", "z", "y", 1, -1, e, n, -t, r, o, 3);
    x("x", "y", "z", 1, -1, e, t, n, r, s, 4);
    x("x", "y", "z", -1, -1, e, t, -n, r, s, 5);
    this.setIndex(c);
    this.setAttribute("position", new Dt(l, 3));
    this.setAttribute("normal", new Dt(u, 3));
    this.setAttribute("uv", new Dt(f, 2));
    function x(_, m, h, b, y, T, A, R, w, U, v) {
      const M = T / w;
      const D = A / U;
      const O = T / 2;
      const N = A / 2;
      const H = R / 2;
      const q = w + 1;
      const V = U + 1;
      let W = 0;
      let Z = 0;
      const ue = new B();
      for (let ae = 0; ae < V; ae++) {
        const he = ae * D - N;
        for (let Ue = 0; Ue < q; Ue++) {
          const Le = Ue * M - O;
          ue[_] = Le * b;
          ue[m] = he * y;
          ue[h] = H;
          l.push(ue.x, ue.y, ue.z);
          ue[_] = 0;
          ue[m] = 0;
          ue[h] = R > 0 ? 1 : -1;
          u.push(ue.x, ue.y, ue.z);
          f.push(Ue / w);
          f.push(1 - ae / U);
          W += 1;
        }
      }
      for (let ae = 0; ae < U; ae++) {
        for (let he = 0; he < w; he++) {
          const Ue = d + he + q * ae;
          const Le = d + he + q * (ae + 1);
          const rt = d + (he + 1) + q * (ae + 1);
          const nt = d + (he + 1) + q * ae;
          c.push(Ue, Le, nt);
          c.push(Le, rt, nt);
          Z += 6;
        }
      }
      a.addGroup(p, Z, v);
      p += Z;
      d += W;
    }
  }
  copy(e) {
    super.copy(e);
    this.parameters = Object.assign({}, e.parameters);
    return this;
  }
  static fromJSON(e) {
    return new li(e.width, e.height, e.depth, e.widthSegments, e.heightSegments, e.depthSegments);
  }
}
function Bn(i) {
  const e = {};
  for (const t in i) {
    e[t] = {};
    for (const n in i[t]) {
      const r = i[t][n];
      if (r && (r.isColor || r.isMatrix3 || r.isMatrix4 || r.isVector2 || r.isVector3 || r.isVector4 || r.isTexture || r.isQuaternion)) {
        if (r.isRenderTargetTexture) {
          Ce("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().");
          e[t][n] = null;
        } else {
          e[t][n] = r.clone();
        }
      } else if (Array.isArray(r)) {
        e[t][n] = r.slice();
      } else {
        e[t][n] = r;
      }
    }
  }
  return e;
}
function St(i) {
  const e = {};
  for (let t = 0; t < i.length; t++) {
    const n = Bn(i[t]);
    for (const r in n) {
      e[r] = n[r];
    }
  }
  return e;
}
function Ja(i) {
  const e = [];
  for (let t = 0; t < i.length; t++) {
    e.push(i[t].clone());
  }
  return e;
}
function Ks(i) {
  const e = i.getRenderTarget();
  if (e === null) {
    return i.outputColorSpace;
  } else if (e.isXRRenderTarget === true) {
    return e.texture.colorSpace;
  } else {
    return Ge.workingColorSpace;
  }
}
const Qa = {
  clone: Bn,
  merge: St
};
var eo = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`;
var to = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class Wt extends oi {
  constructor(e) {
    super();
    this.isShaderMaterial = true;
    this.type = "ShaderMaterial";
    this.defines = {};
    this.uniforms = {};
    this.uniformsGroups = [];
    this.vertexShader = eo;
    this.fragmentShader = to;
    this.linewidth = 1;
    this.wireframe = false;
    this.wireframeLinewidth = 1;
    this.fog = false;
    this.lights = false;
    this.clipping = false;
    this.forceSinglePass = true;
    this.extensions = {
      clipCullDistance: false,
      multiDraw: false
    };
    this.defaultAttributeValues = {
      color: [1, 1, 1],
      uv: [0, 0],
      uv1: [0, 0]
    };
    this.index0AttributeName = undefined;
    this.uniformsNeedUpdate = false;
    this.glslVersion = null;
    if (e !== undefined) {
      this.setValues(e);
    }
  }
  copy(e) {
    super.copy(e);
    this.fragmentShader = e.fragmentShader;
    this.vertexShader = e.vertexShader;
    this.uniforms = Bn(e.uniforms);
    this.uniformsGroups = Ja(e.uniformsGroups);
    this.defines = Object.assign({}, e.defines);
    this.wireframe = e.wireframe;
    this.wireframeLinewidth = e.wireframeLinewidth;
    this.fog = e.fog;
    this.lights = e.lights;
    this.clipping = e.clipping;
    this.extensions = Object.assign({}, e.extensions);
    this.glslVersion = e.glslVersion;
    this.defaultAttributeValues = Object.assign({}, e.defaultAttributeValues);
    this.index0AttributeName = e.index0AttributeName;
    this.uniformsNeedUpdate = e.uniformsNeedUpdate;
    return this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    t.glslVersion = this.glslVersion;
    t.uniforms = {};
    for (const r in this.uniforms) {
      const o = this.uniforms[r].value;
      if (o && o.isTexture) {
        t.uniforms[r] = {
          type: "t",
          value: o.toJSON(e).uuid
        };
      } else if (o && o.isColor) {
        t.uniforms[r] = {
          type: "c",
          value: o.getHex()
        };
      } else if (o && o.isVector2) {
        t.uniforms[r] = {
          type: "v2",
          value: o.toArray()
        };
      } else if (o && o.isVector3) {
        t.uniforms[r] = {
          type: "v3",
          value: o.toArray()
        };
      } else if (o && o.isVector4) {
        t.uniforms[r] = {
          type: "v4",
          value: o.toArray()
        };
      } else if (o && o.isMatrix3) {
        t.uniforms[r] = {
          type: "m3",
          value: o.toArray()
        };
      } else if (o && o.isMatrix4) {
        t.uniforms[r] = {
          type: "m4",
          value: o.toArray()
        };
      } else {
        t.uniforms[r] = {
          value: o
        };
      }
    }
    if (Object.keys(this.defines).length > 0) {
      t.defines = this.defines;
    }
    t.vertexShader = this.vertexShader;
    t.fragmentShader = this.fragmentShader;
    t.lights = this.lights;
    t.clipping = this.clipping;
    const n = {};
    for (const r in this.extensions) {
      if (this.extensions[r] === true) {
        n[r] = true;
      }
    }
    if (Object.keys(n).length > 0) {
      t.extensions = n;
    }
    return t;
  }
}
class Zs extends xt {
  constructor() {
    super();
    this.isCamera = true;
    this.type = "Camera";
    this.matrixWorldInverse = new it();
    this.projectionMatrix = new it();
    this.projectionMatrixInverse = new it();
    this.coordinateSystem = 2000;
    this._reversedDepth = false;
  }
  get reversedDepth() {
    return this._reversedDepth;
  }
  copy(e, t) {
    super.copy(e, t);
    this.matrixWorldInverse.copy(e.matrixWorldInverse);
    this.projectionMatrix.copy(e.projectionMatrix);
    this.projectionMatrixInverse.copy(e.projectionMatrixInverse);
    this.coordinateSystem = e.coordinateSystem;
    return this;
  }
  getWorldDirection(e) {
    return super.getWorldDirection(e).negate();
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e);
    this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  updateWorldMatrix(e, t) {
    super.updateWorldMatrix(e, t);
    this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const an = new B();
const ss = new ke();
const as = new ke();
class Ut extends Zs {
  constructor(e = 50, t = 1, n = 0.1, r = 2000) {
    super();
    this.isPerspectiveCamera = true;
    this.type = "PerspectiveCamera";
    this.fov = e;
    this.zoom = 1;
    this.near = n;
    this.far = r;
    this.focus = 10;
    this.aspect = t;
    this.view = null;
    this.filmGauge = 35;
    this.filmOffset = 0;
    this.updateProjectionMatrix();
  }
  copy(e, t) {
    super.copy(e, t);
    this.fov = e.fov;
    this.zoom = e.zoom;
    this.near = e.near;
    this.far = e.far;
    this.focus = e.focus;
    this.aspect = e.aspect;
    this.view = e.view === null ? null : Object.assign({}, e.view);
    this.filmGauge = e.filmGauge;
    this.filmOffset = e.filmOffset;
    return this;
  }
  setFocalLength(e) {
    const t = this.getFilmHeight() * 0.5 / e;
    this.fov = Tr * 2 * Math.atan(t);
    this.updateProjectionMatrix();
  }
  getFocalLength() {
    const e = Math.tan(qi * 0.5 * this.fov);
    return this.getFilmHeight() * 0.5 / e;
  }
  getEffectiveFOV() {
    return Tr * 2 * Math.atan(Math.tan(qi * 0.5 * this.fov) / this.zoom);
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  getViewBounds(e, t, n) {
    an.set(-1, -1, 0.5).applyMatrix4(this.projectionMatrixInverse);
    t.set(an.x, an.y).multiplyScalar(-e / an.z);
    an.set(1, 1, 0.5).applyMatrix4(this.projectionMatrixInverse);
    n.set(an.x, an.y).multiplyScalar(-e / an.z);
  }
  getViewSize(e, t) {
    this.getViewBounds(e, ss, as);
    return t.subVectors(as, ss);
  }
  setViewOffset(e, t, n, r, s, o) {
    this.aspect = e / t;
    if (this.view === null) {
      this.view = {
        enabled: true,
        fullWidth: 1,
        fullHeight: 1,
        offsetX: 0,
        offsetY: 0,
        width: 1,
        height: 1
      };
    }
    this.view.enabled = true;
    this.view.fullWidth = e;
    this.view.fullHeight = t;
    this.view.offsetX = n;
    this.view.offsetY = r;
    this.view.width = s;
    this.view.height = o;
    this.updateProjectionMatrix();
  }
  clearViewOffset() {
    if (this.view !== null) {
      this.view.enabled = false;
    }
    this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = this.near;
    let t = e * Math.tan(qi * 0.5 * this.fov) / this.zoom;
    let n = t * 2;
    let r = this.aspect * n;
    let s = r * -0.5;
    const o = this.view;
    if (this.view !== null && this.view.enabled) {
      const c = o.fullWidth;
      const l = o.fullHeight;
      s += o.offsetX * r / c;
      t -= o.offsetY * n / l;
      r *= o.width / c;
      n *= o.height / l;
    }
    const a = this.filmOffset;
    if (a !== 0) {
      s += e * a / this.getFilmWidth();
    }
    this.projectionMatrix.makePerspective(s, s + r, t, t - n, e, this.far, this.coordinateSystem, this.reversedDepth);
    this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    t.object.fov = this.fov;
    t.object.zoom = this.zoom;
    t.object.near = this.near;
    t.object.far = this.far;
    t.object.focus = this.focus;
    t.object.aspect = this.aspect;
    if (this.view !== null) {
      t.object.view = Object.assign({}, this.view);
    }
    t.object.filmGauge = this.filmGauge;
    t.object.filmOffset = this.filmOffset;
    return t;
  }
}
const Pn = -90;
const Dn = 1;
class no extends xt {
  constructor(e, t, n) {
    super();
    this.type = "CubeCamera";
    this.renderTarget = n;
    this.coordinateSystem = null;
    this.activeMipmapLevel = 0;
    const r = new Ut(Pn, Dn, e, t);
    r.layers = this.layers;
    this.add(r);
    const s = new Ut(Pn, Dn, e, t);
    s.layers = this.layers;
    this.add(s);
    const o = new Ut(Pn, Dn, e, t);
    o.layers = this.layers;
    this.add(o);
    const a = new Ut(Pn, Dn, e, t);
    a.layers = this.layers;
    this.add(a);
    const c = new Ut(Pn, Dn, e, t);
    c.layers = this.layers;
    this.add(c);
    const l = new Ut(Pn, Dn, e, t);
    l.layers = this.layers;
    this.add(l);
  }
  updateCoordinateSystem() {
    const e = this.coordinateSystem;
    const t = this.children.concat();
    const [n, r, s, o, a, c] = t;
    for (const l of t) {
      this.remove(l);
    }
    if (e === 2000) {
      n.up.set(0, 1, 0);
      n.lookAt(1, 0, 0);
      r.up.set(0, 1, 0);
      r.lookAt(-1, 0, 0);
      s.up.set(0, 0, -1);
      s.lookAt(0, 1, 0);
      o.up.set(0, 0, 1);
      o.lookAt(0, -1, 0);
      a.up.set(0, 1, 0);
      a.lookAt(0, 0, 1);
      c.up.set(0, 1, 0);
      c.lookAt(0, 0, -1);
    } else if (e === 2001) {
      n.up.set(0, -1, 0);
      n.lookAt(-1, 0, 0);
      r.up.set(0, -1, 0);
      r.lookAt(1, 0, 0);
      s.up.set(0, 0, 1);
      s.lookAt(0, 1, 0);
      o.up.set(0, 0, -1);
      o.lookAt(0, -1, 0);
      a.up.set(0, -1, 0);
      a.lookAt(0, 0, 1);
      c.up.set(0, -1, 0);
      c.lookAt(0, 0, -1);
    } else {
      throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " + e);
    }
    for (const l of t) {
      this.add(l);
      l.updateMatrixWorld();
    }
  }
  update(e, t) {
    if (this.parent === null) {
      this.updateMatrixWorld();
    }
    const {
      renderTarget: n,
      activeMipmapLevel: r
    } = this;
    if (this.coordinateSystem !== e.coordinateSystem) {
      this.coordinateSystem = e.coordinateSystem;
      this.updateCoordinateSystem();
    }
    const [s, o, a, c, l, u] = this.children;
    const f = e.getRenderTarget();
    const d = e.getActiveCubeFace();
    const p = e.getActiveMipmapLevel();
    const x = e.xr.enabled;
    e.xr.enabled = false;
    const _ = n.texture.generateMipmaps;
    n.texture.generateMipmaps = false;
    e.setRenderTarget(n, 0, r);
    e.render(t, s);
    e.setRenderTarget(n, 1, r);
    e.render(t, o);
    e.setRenderTarget(n, 2, r);
    e.render(t, a);
    e.setRenderTarget(n, 3, r);
    e.render(t, c);
    e.setRenderTarget(n, 4, r);
    e.render(t, l);
    n.texture.generateMipmaps = _;
    e.setRenderTarget(n, 5, r);
    e.render(t, u);
    e.setRenderTarget(f, d, p);
    e.xr.enabled = x;
    n.texture.needsPMREMUpdate = true;
  }
}
class js extends _t {
  constructor(e = [], t = 301, n, r, s, o, a, c, l, u) {
    super(e, t, n, r, s, o, a, c, l, u);
    this.isCubeTexture = true;
    this.flipY = false;
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}
class Js extends Ht {
  constructor(e = 1, t = {}) {
    super(e, e, t);
    this.isWebGLCubeRenderTarget = true;
    const n = {
      width: e,
      height: e,
      depth: 1
    };
    const r = [n, n, n, n, n, n];
    this.texture = new js(r);
    this._setTextureOptions(t);
    this.texture.isRenderTargetTexture = true;
  }
  fromEquirectangularTexture(e, t) {
    this.texture.type = t.type;
    this.texture.colorSpace = t.colorSpace;
    this.texture.generateMipmaps = t.generateMipmaps;
    this.texture.minFilter = t.minFilter;
    this.texture.magFilter = t.magFilter;
    const n = {
      uniforms: {
        tEquirect: {
          value: null
        }
      },
      vertexShader: `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,
      fragmentShader: `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`
    };
    const r = new li(5, 5, 5);
    const s = new Wt({
      name: "CubemapFromEquirect",
      uniforms: Bn(n.uniforms),
      vertexShader: n.vertexShader,
      fragmentShader: n.fragmentShader,
      side: 1,
      blending: 0
    });
    s.uniforms.tEquirect.value = t;
    const o = new Ot(r, s);
    const a = t.minFilter;
    if (t.minFilter === 1008) {
      t.minFilter = 1006;
    }
    new no(1, 10, this).update(e, o);
    t.minFilter = a;
    o.geometry.dispose();
    o.material.dispose();
    return this;
  }
  clear(e, t = true, n = true, r = true) {
    const s = e.getRenderTarget();
    for (let o = 0; o < 6; o++) {
      e.setRenderTarget(this, o);
      e.clear(t, n, r);
    }
    e.setRenderTarget(s);
  }
}
class Ci extends xt {
  constructor() {
    super();
    this.isGroup = true;
    this.type = "Group";
  }
}
const io = {
  type: "move"
};
class pr {
  constructor() {
    this._targetRay = null;
    this._grip = null;
    this._hand = null;
  }
  getHandSpace() {
    if (this._hand === null) {
      this._hand = new Ci();
      this._hand.matrixAutoUpdate = false;
      this._hand.visible = false;
      this._hand.joints = {};
      this._hand.inputState = {
        pinching: false
      };
    }
    return this._hand;
  }
  getTargetRaySpace() {
    if (this._targetRay === null) {
      this._targetRay = new Ci();
      this._targetRay.matrixAutoUpdate = false;
      this._targetRay.visible = false;
      this._targetRay.hasLinearVelocity = false;
      this._targetRay.linearVelocity = new B();
      this._targetRay.hasAngularVelocity = false;
      this._targetRay.angularVelocity = new B();
    }
    return this._targetRay;
  }
  getGripSpace() {
    if (this._grip === null) {
      this._grip = new Ci();
      this._grip.matrixAutoUpdate = false;
      this._grip.visible = false;
      this._grip.hasLinearVelocity = false;
      this._grip.linearVelocity = new B();
      this._grip.hasAngularVelocity = false;
      this._grip.angularVelocity = new B();
    }
    return this._grip;
  }
  dispatchEvent(e) {
    if (this._targetRay !== null) {
      this._targetRay.dispatchEvent(e);
    }
    if (this._grip !== null) {
      this._grip.dispatchEvent(e);
    }
    if (this._hand !== null) {
      this._hand.dispatchEvent(e);
    }
    return this;
  }
  connect(e) {
    if (e && e.hand) {
      const t = this._hand;
      if (t) {
        for (const n of e.hand.values()) {
          this._getHandJoint(t, n);
        }
      }
    }
    this.dispatchEvent({
      type: "connected",
      data: e
    });
    return this;
  }
  disconnect(e) {
    this.dispatchEvent({
      type: "disconnected",
      data: e
    });
    if (this._targetRay !== null) {
      this._targetRay.visible = false;
    }
    if (this._grip !== null) {
      this._grip.visible = false;
    }
    if (this._hand !== null) {
      this._hand.visible = false;
    }
    return this;
  }
  update(e, t, n) {
    let r = null;
    let s = null;
    let o = null;
    const a = this._targetRay;
    const c = this._grip;
    const l = this._hand;
    if (e && t.session.visibilityState !== "visible-blurred") {
      if (l && e.hand) {
        o = true;
        for (const _ of e.hand.values()) {
          const m = t.getJointPose(_, n);
          const h = this._getHandJoint(l, _);
          if (m !== null) {
            h.matrix.fromArray(m.transform.matrix);
            h.matrix.decompose(h.position, h.rotation, h.scale);
            h.matrixWorldNeedsUpdate = true;
            h.jointRadius = m.radius;
          }
          h.visible = m !== null;
        }
        const u = l.joints["index-finger-tip"];
        const f = l.joints["thumb-tip"];
        const d = u.position.distanceTo(f.position);
        const p = 0.02;
        const x = 0.005;
        if (l.inputState.pinching && d > p + x) {
          l.inputState.pinching = false;
          this.dispatchEvent({
            type: "pinchend",
            handedness: e.handedness,
            target: this
          });
        } else if (!l.inputState.pinching && d <= p - x) {
          l.inputState.pinching = true;
          this.dispatchEvent({
            type: "pinchstart",
            handedness: e.handedness,
            target: this
          });
        }
      } else if (c !== null && e.gripSpace) {
        s = t.getPose(e.gripSpace, n);
        if (s !== null) {
          c.matrix.fromArray(s.transform.matrix);
          c.matrix.decompose(c.position, c.rotation, c.scale);
          c.matrixWorldNeedsUpdate = true;
          if (s.linearVelocity) {
            c.hasLinearVelocity = true;
            c.linearVelocity.copy(s.linearVelocity);
          } else {
            c.hasLinearVelocity = false;
          }
          if (s.angularVelocity) {
            c.hasAngularVelocity = true;
            c.angularVelocity.copy(s.angularVelocity);
          } else {
            c.hasAngularVelocity = false;
          }
        }
      }
      if (a !== null) {
        r = t.getPose(e.targetRaySpace, n);
        if (r === null && s !== null) {
          r = s;
        }
        if (r !== null) {
          a.matrix.fromArray(r.transform.matrix);
          a.matrix.decompose(a.position, a.rotation, a.scale);
          a.matrixWorldNeedsUpdate = true;
          if (r.linearVelocity) {
            a.hasLinearVelocity = true;
            a.linearVelocity.copy(r.linearVelocity);
          } else {
            a.hasLinearVelocity = false;
          }
          if (r.angularVelocity) {
            a.hasAngularVelocity = true;
            a.angularVelocity.copy(r.angularVelocity);
          } else {
            a.hasAngularVelocity = false;
          }
          this.dispatchEvent(io);
        }
      }
    }
    if (a !== null) {
      a.visible = r !== null;
    }
    if (c !== null) {
      c.visible = s !== null;
    }
    if (l !== null) {
      l.visible = o !== null;
    }
    return this;
  }
  _getHandJoint(e, t) {
    if (e.joints[t.jointName] === undefined) {
      const n = new Ci();
      n.matrixAutoUpdate = false;
      n.visible = false;
      e.joints[t.jointName] = n;
      e.add(n);
    }
    return e.joints[t.jointName];
  }
}
class Sd extends xt {
  constructor() {
    super();
    this.isScene = true;
    this.type = "Scene";
    this.background = null;
    this.environment = null;
    this.fog = null;
    this.backgroundBlurriness = 0;
    this.backgroundIntensity = 1;
    this.backgroundRotation = new kt();
    this.environmentIntensity = 1;
    this.environmentRotation = new kt();
    this.overrideMaterial = null;
    if (typeof __THREE_DEVTOOLS__ !== "undefined") {
      __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", {
        detail: this
      }));
    }
  }
  copy(e, t) {
    super.copy(e, t);
    if (e.background !== null) {
      this.background = e.background.clone();
    }
    if (e.environment !== null) {
      this.environment = e.environment.clone();
    }
    if (e.fog !== null) {
      this.fog = e.fog.clone();
    }
    this.backgroundBlurriness = e.backgroundBlurriness;
    this.backgroundIntensity = e.backgroundIntensity;
    this.backgroundRotation.copy(e.backgroundRotation);
    this.environmentIntensity = e.environmentIntensity;
    this.environmentRotation.copy(e.environmentRotation);
    if (e.overrideMaterial !== null) {
      this.overrideMaterial = e.overrideMaterial.clone();
    }
    this.matrixAutoUpdate = e.matrixAutoUpdate;
    return this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    if (this.fog !== null) {
      t.object.fog = this.fog.toJSON();
    }
    if (this.backgroundBlurriness > 0) {
      t.object.backgroundBlurriness = this.backgroundBlurriness;
    }
    if (this.backgroundIntensity !== 1) {
      t.object.backgroundIntensity = this.backgroundIntensity;
    }
    t.object.backgroundRotation = this.backgroundRotation.toArray();
    if (this.environmentIntensity !== 1) {
      t.object.environmentIntensity = this.environmentIntensity;
    }
    t.object.environmentRotation = this.environmentRotation.toArray();
    return t;
  }
}
class Qs extends _t {
  constructor(e = null, t = 1, n = 1, r, s, o, a, c, l = 1003, u = 1003, f, d) {
    super(null, o, a, c, l, u, r, s, f, d);
    this.isDataTexture = true;
    this.image = {
      data: e,
      width: t,
      height: n
    };
    this.generateMipmaps = false;
    this.flipY = false;
    this.unpackAlignment = 1;
  }
}
class os extends Bt {
  constructor(e, t, n, r = 1) {
    super(e, t, n);
    this.isInstancedBufferAttribute = true;
    this.meshPerAttribute = r;
  }
  copy(e) {
    super.copy(e);
    this.meshPerAttribute = e.meshPerAttribute;
    return this;
  }
  toJSON() {
    const e = super.toJSON();
    e.meshPerAttribute = this.meshPerAttribute;
    e.isInstancedBufferAttribute = true;
    return e;
  }
}
const Ln = new it();
const ls = new it();
const wi = [];
const cs = new xn();
const ro = new it();
const $n = new Ot();
const Kn = new ai();
class Md extends Ot {
  constructor(e, t, n) {
    super(e, t);
    this.isInstancedMesh = true;
    this.instanceMatrix = new os(new Float32Array(n * 16), 16);
    this.instanceColor = null;
    this.morphTexture = null;
    this.count = n;
    this.boundingBox = null;
    this.boundingSphere = null;
    for (let r = 0; r < n; r++) {
      this.setMatrixAt(r, ro);
    }
  }
  computeBoundingBox() {
    const e = this.geometry;
    const t = this.count;
    if (this.boundingBox === null) {
      this.boundingBox = new xn();
    }
    if (e.boundingBox === null) {
      e.computeBoundingBox();
    }
    this.boundingBox.makeEmpty();
    for (let n = 0; n < t; n++) {
      this.getMatrixAt(n, Ln);
      cs.copy(e.boundingBox).applyMatrix4(Ln);
      this.boundingBox.union(cs);
    }
  }
  computeBoundingSphere() {
    const e = this.geometry;
    const t = this.count;
    if (this.boundingSphere === null) {
      this.boundingSphere = new ai();
    }
    if (e.boundingSphere === null) {
      e.computeBoundingSphere();
    }
    this.boundingSphere.makeEmpty();
    for (let n = 0; n < t; n++) {
      this.getMatrixAt(n, Ln);
      Kn.copy(e.boundingSphere).applyMatrix4(Ln);
      this.boundingSphere.union(Kn);
    }
  }
  copy(e, t) {
    super.copy(e, t);
    this.instanceMatrix.copy(e.instanceMatrix);
    if (e.morphTexture !== null) {
      this.morphTexture = e.morphTexture.clone();
    }
    if (e.instanceColor !== null) {
      this.instanceColor = e.instanceColor.clone();
    }
    this.count = e.count;
    if (e.boundingBox !== null) {
      this.boundingBox = e.boundingBox.clone();
    }
    if (e.boundingSphere !== null) {
      this.boundingSphere = e.boundingSphere.clone();
    }
    return this;
  }
  getColorAt(e, t) {
    t.fromArray(this.instanceColor.array, e * 3);
  }
  getMatrixAt(e, t) {
    t.fromArray(this.instanceMatrix.array, e * 16);
  }
  getMorphAt(e, t) {
    const n = t.morphTargetInfluences;
    const r = this.morphTexture.source.data.data;
    const s = n.length + 1;
    const o = e * s + 1;
    for (let a = 0; a < n.length; a++) {
      n[a] = r[o + a];
    }
  }
  raycast(e, t) {
    const n = this.matrixWorld;
    const r = this.count;
    $n.geometry = this.geometry;
    $n.material = this.material;
    if ($n.material !== undefined && (this.boundingSphere === null && this.computeBoundingSphere(), Kn.copy(this.boundingSphere), Kn.applyMatrix4(n), e.ray.intersectsSphere(Kn) !== false)) {
      for (let s = 0; s < r; s++) {
        this.getMatrixAt(s, Ln);
        ls.multiplyMatrices(n, Ln);
        $n.matrixWorld = ls;
        $n.raycast(e, wi);
        for (let o = 0, a = wi.length; o < a; o++) {
          const c = wi[o];
          c.instanceId = s;
          c.object = this;
          t.push(c);
        }
        wi.length = 0;
      }
    }
  }
  setColorAt(e, t) {
    if (this.instanceColor === null) {
      this.instanceColor = new os(new Float32Array(this.instanceMatrix.count * 3).fill(1), 3);
    }
    t.toArray(this.instanceColor.array, e * 3);
  }
  setMatrixAt(e, t) {
    t.toArray(this.instanceMatrix.array, e * 16);
  }
  setMorphAt(e, t) {
    const n = t.morphTargetInfluences;
    const r = n.length + 1;
    if (this.morphTexture === null) {
      this.morphTexture = new Qs(new Float32Array(r * this.count), r, this.count, 1028, 1015);
    }
    const s = this.morphTexture.source.data.data;
    let o = 0;
    for (let l = 0; l < n.length; l++) {
      o += n[l];
    }
    const a = this.geometry.morphTargetsRelative ? 1 : 1 - o;
    const c = r * e;
    s[c] = a;
    s.set(n, c + 1);
  }
  updateMorphTargets() {}
  dispose() {
    this.dispatchEvent({
      type: "dispose"
    });
    if (this.morphTexture !== null) {
      this.morphTexture.dispose();
      this.morphTexture = null;
    }
  }
}
const mr = new B();
const so = new B();
const ao = new Pe();
class gn {
  constructor(e = new B(1, 0, 0), t = 0) {
    this.isPlane = true;
    this.normal = e;
    this.constant = t;
  }
  set(e, t) {
    this.normal.copy(e);
    this.constant = t;
    return this;
  }
  setComponents(e, t, n, r) {
    this.normal.set(e, t, n);
    this.constant = r;
    return this;
  }
  setFromNormalAndCoplanarPoint(e, t) {
    this.normal.copy(e);
    this.constant = -t.dot(this.normal);
    return this;
  }
  setFromCoplanarPoints(e, t, n) {
    const r = mr.subVectors(n, t).cross(so.subVectors(e, t)).normalize();
    this.setFromNormalAndCoplanarPoint(r, e);
    return this;
  }
  copy(e) {
    this.normal.copy(e.normal);
    this.constant = e.constant;
    return this;
  }
  normalize() {
    const e = 1 / this.normal.length();
    this.normal.multiplyScalar(e);
    this.constant *= e;
    return this;
  }
  negate() {
    this.constant *= -1;
    this.normal.negate();
    return this;
  }
  distanceToPoint(e) {
    return this.normal.dot(e) + this.constant;
  }
  distanceToSphere(e) {
    return this.distanceToPoint(e.center) - e.radius;
  }
  projectPoint(e, t) {
    return t.copy(e).addScaledVector(this.normal, -this.distanceToPoint(e));
  }
  intersectLine(e, t) {
    const n = e.delta(mr);
    const r = this.normal.dot(n);
    if (r === 0) {
      if (this.distanceToPoint(e.start) === 0) {
        return t.copy(e.start);
      } else {
        return null;
      }
    }
    const s = -(e.start.dot(this.normal) + this.constant) / r;
    if (s < 0 || s > 1) {
      return null;
    } else {
      return t.copy(e.start).addScaledVector(n, s);
    }
  }
  intersectsLine(e) {
    const t = this.distanceToPoint(e.start);
    const n = this.distanceToPoint(e.end);
    return t < 0 && n > 0 || n < 0 && t > 0;
  }
  intersectsBox(e) {
    return e.intersectsPlane(this);
  }
  intersectsSphere(e) {
    return e.intersectsPlane(this);
  }
  coplanarPoint(e) {
    return e.copy(this.normal).multiplyScalar(-this.constant);
  }
  applyMatrix4(e, t) {
    const n = t || ao.getNormalMatrix(e);
    const r = this.coplanarPoint(mr).applyMatrix4(e);
    const s = this.normal.applyMatrix3(n).normalize();
    this.constant = -r.dot(s);
    return this;
  }
  translate(e) {
    this.constant -= e.dot(this.normal);
    return this;
  }
  equals(e) {
    return e.normal.equals(this.normal) && e.constant === this.constant;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const dn = new ai();
const oo = new ke(0.5, 0.5);
const Pi = new B();
class wr {
  constructor(e = new gn(), t = new gn(), n = new gn(), r = new gn(), s = new gn(), o = new gn()) {
    this.planes = [e, t, n, r, s, o];
  }
  set(e, t, n, r, s, o) {
    const a = this.planes;
    a[0].copy(e);
    a[1].copy(t);
    a[2].copy(n);
    a[3].copy(r);
    a[4].copy(s);
    a[5].copy(o);
    return this;
  }
  copy(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) {
      t[n].copy(e.planes[n]);
    }
    return this;
  }
  setFromProjectionMatrix(e, t = 2000, n = false) {
    const r = this.planes;
    const s = e.elements;
    const o = s[0];
    const a = s[1];
    const c = s[2];
    const l = s[3];
    const u = s[4];
    const f = s[5];
    const d = s[6];
    const p = s[7];
    const x = s[8];
    const _ = s[9];
    const m = s[10];
    const h = s[11];
    const b = s[12];
    const y = s[13];
    const T = s[14];
    const A = s[15];
    r[0].setComponents(l - o, p - u, h - x, A - b).normalize();
    r[1].setComponents(l + o, p + u, h + x, A + b).normalize();
    r[2].setComponents(l + a, p + f, h + _, A + y).normalize();
    r[3].setComponents(l - a, p - f, h - _, A - y).normalize();
    if (n) {
      r[4].setComponents(c, d, m, T).normalize();
      r[5].setComponents(l - c, p - d, h - m, A - T).normalize();
    } else {
      r[4].setComponents(l - c, p - d, h - m, A - T).normalize();
      if (t === 2000) {
        r[5].setComponents(l + c, p + d, h + m, A + T).normalize();
      } else if (t === 2001) {
        r[5].setComponents(c, d, m, T).normalize();
      } else {
        throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + t);
      }
    }
    return this;
  }
  intersectsObject(e) {
    if (e.boundingSphere !== undefined) {
      if (e.boundingSphere === null) {
        e.computeBoundingSphere();
      }
      dn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);
    } else {
      const t = e.geometry;
      if (t.boundingSphere === null) {
        t.computeBoundingSphere();
      }
      dn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld);
    }
    return this.intersectsSphere(dn);
  }
  intersectsSprite(e) {
    dn.center.set(0, 0, 0);
    const t = oo.distanceTo(e.center);
    dn.radius = 0.7071067811865476 + t;
    dn.applyMatrix4(e.matrixWorld);
    return this.intersectsSphere(dn);
  }
  intersectsSphere(e) {
    const t = this.planes;
    const n = e.center;
    const r = -e.radius;
    for (let s = 0; s < 6; s++) {
      if (t[s].distanceToPoint(n) < r) {
        return false;
      }
    }
    return true;
  }
  intersectsBox(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) {
      const r = t[n];
      Pi.x = r.normal.x > 0 ? e.max.x : e.min.x;
      Pi.y = r.normal.y > 0 ? e.max.y : e.min.y;
      Pi.z = r.normal.z > 0 ? e.max.z : e.min.z;
      if (r.distanceToPoint(Pi) < 0) {
        return false;
      }
    }
    return true;
  }
  containsPoint(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) {
      if (t[n].distanceToPoint(e) < 0) {
        return false;
      }
    }
    return true;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class Ed extends _t {
  constructor(e, t, n, r, s, o, a, c, l) {
    super(e, t, n, r, s, o, a, c, l);
    this.isCanvasTexture = true;
    this.needsUpdate = true;
  }
}
class ei extends _t {
  constructor(e, t, n = 1014, r, s, o, a = 1003, c = 1003, l, u = 1026, f = 1) {
    if (u !== 1026 && u !== 1027) {
      throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    }
    const d = {
      width: e,
      height: t,
      depth: f
    };
    super(d, r, s, o, a, c, u, n, l);
    this.isDepthTexture = true;
    this.flipY = false;
    this.generateMipmaps = false;
    this.compareFunction = null;
  }
  copy(e) {
    super.copy(e);
    this.source = new Cr(Object.assign({}, e.image));
    this.compareFunction = e.compareFunction;
    return this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    if (this.compareFunction !== null) {
      t.compareFunction = this.compareFunction;
    }
    return t;
  }
}
class lo extends ei {
  constructor(e, t = 1014, n = 301, r, s, o = 1003, a = 1003, c, l = 1026) {
    const u = {
      width: e,
      height: e,
      depth: 1
    };
    const f = [u, u, u, u, u, u];
    super(e, e, t, n, r, s, o, a, c, l);
    this.image = f;
    this.isCubeDepthTexture = true;
    this.isCubeTexture = true;
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}
class ea extends _t {
  constructor(e = null) {
    super();
    this.sourceTexture = e;
    this.isExternalTexture = true;
  }
  copy(e) {
    super.copy(e);
    this.sourceTexture = e.sourceTexture;
    return this;
  }
}
class ta extends qt {
  constructor(e = 1, t = 1, n = 1, r = 32, s = 1, o = false, a = 0, c = Math.PI * 2) {
    super();
    this.type = "CylinderGeometry";
    this.parameters = {
      radiusTop: e,
      radiusBottom: t,
      height: n,
      radialSegments: r,
      heightSegments: s,
      openEnded: o,
      thetaStart: a,
      thetaLength: c
    };
    const l = this;
    r = Math.floor(r);
    s = Math.floor(s);
    const u = [];
    const f = [];
    const d = [];
    const p = [];
    let x = 0;
    const _ = [];
    const m = n / 2;
    let h = 0;
    b();
    if (o === false) {
      if (e > 0) {
        y(true);
      }
      if (t > 0) {
        y(false);
      }
    }
    this.setIndex(u);
    this.setAttribute("position", new Dt(f, 3));
    this.setAttribute("normal", new Dt(d, 3));
    this.setAttribute("uv", new Dt(p, 2));
    function b() {
      const T = new B();
      const A = new B();
      let R = 0;
      const w = (t - e) / n;
      for (let U = 0; U <= s; U++) {
        const v = [];
        const M = U / s;
        const D = M * (t - e) + e;
        for (let O = 0; O <= r; O++) {
          const N = O / r;
          const H = N * c + a;
          const q = Math.sin(H);
          const V = Math.cos(H);
          A.x = D * q;
          A.y = -M * n + m;
          A.z = D * V;
          f.push(A.x, A.y, A.z);
          T.set(q, w, V).normalize();
          d.push(T.x, T.y, T.z);
          p.push(N, 1 - M);
          v.push(x++);
        }
        _.push(v);
      }
      for (let U = 0; U < r; U++) {
        for (let v = 0; v < s; v++) {
          const M = _[v][U];
          const D = _[v + 1][U];
          const O = _[v + 1][U + 1];
          const N = _[v][U + 1];
          if (e > 0 || v !== 0) {
            u.push(M, D, N);
            R += 3;
          }
          if (t > 0 || v !== s - 1) {
            u.push(D, O, N);
            R += 3;
          }
        }
      }
      l.addGroup(h, R, 0);
      h += R;
    }
    function y(T) {
      const A = x;
      const R = new ke();
      const w = new B();
      let U = 0;
      const v = T === true ? e : t;
      const M = T === true ? 1 : -1;
      for (let O = 1; O <= r; O++) {
        f.push(0, m * M, 0);
        d.push(0, M, 0);
        p.push(0.5, 0.5);
        x++;
      }
      const D = x;
      for (let O = 0; O <= r; O++) {
        const H = O / r * c + a;
        const q = Math.cos(H);
        const V = Math.sin(H);
        w.x = v * V;
        w.y = m * M;
        w.z = v * q;
        f.push(w.x, w.y, w.z);
        d.push(0, M, 0);
        R.x = q * 0.5 + 0.5;
        R.y = V * 0.5 * M + 0.5;
        p.push(R.x, R.y);
        x++;
      }
      for (let O = 0; O < r; O++) {
        const N = A + O;
        const H = D + O;
        if (T === true) {
          u.push(H, H + 1, N);
        } else {
          u.push(H + 1, H, N);
        }
        U += 3;
      }
      l.addGroup(h, U, T === true ? 1 : 2);
      h += U;
    }
  }
  copy(e) {
    super.copy(e);
    this.parameters = Object.assign({}, e.parameters);
    return this;
  }
  static fromJSON(e) {
    return new ta(e.radiusTop, e.radiusBottom, e.height, e.radialSegments, e.heightSegments, e.openEnded, e.thetaStart, e.thetaLength);
  }
}
class Bi extends qt {
  constructor(e = 1, t = 1, n = 1, r = 1) {
    super();
    this.type = "PlaneGeometry";
    this.parameters = {
      width: e,
      height: t,
      widthSegments: n,
      heightSegments: r
    };
    const s = e / 2;
    const o = t / 2;
    const a = Math.floor(n);
    const c = Math.floor(r);
    const l = a + 1;
    const u = c + 1;
    const f = e / a;
    const d = t / c;
    const p = [];
    const x = [];
    const _ = [];
    const m = [];
    for (let h = 0; h < u; h++) {
      const b = h * d - o;
      for (let y = 0; y < l; y++) {
        const T = y * f - s;
        x.push(T, -b, 0);
        _.push(0, 0, 1);
        m.push(y / a);
        m.push(1 - h / c);
      }
    }
    for (let h = 0; h < c; h++) {
      for (let b = 0; b < a; b++) {
        const y = b + l * h;
        const T = b + l * (h + 1);
        const A = b + 1 + l * (h + 1);
        const R = b + 1 + l * h;
        p.push(y, T, R);
        p.push(T, A, R);
      }
    }
    this.setIndex(p);
    this.setAttribute("position", new Dt(x, 3));
    this.setAttribute("normal", new Dt(_, 3));
    this.setAttribute("uv", new Dt(m, 2));
  }
  copy(e) {
    super.copy(e);
    this.parameters = Object.assign({}, e.parameters);
    return this;
  }
  static fromJSON(e) {
    return new Bi(e.width, e.height, e.widthSegments, e.heightSegments);
  }
}
class co extends Wt {
  constructor(e) {
    super(e);
    this.isRawShaderMaterial = true;
    this.type = "RawShaderMaterial";
  }
}
class Td extends oi {
  constructor(e) {
    super();
    this.isMeshStandardMaterial = true;
    this.type = "MeshStandardMaterial";
    this.defines = {
      STANDARD: ""
    };
    this.color = new We(16777215);
    this.roughness = 1;
    this.metalness = 0;
    this.map = null;
    this.lightMap = null;
    this.lightMapIntensity = 1;
    this.aoMap = null;
    this.aoMapIntensity = 1;
    this.emissive = new We(0);
    this.emissiveIntensity = 1;
    this.emissiveMap = null;
    this.bumpMap = null;
    this.bumpScale = 1;
    this.normalMap = null;
    this.normalMapType = 0;
    this.normalScale = new ke(1, 1);
    this.displacementMap = null;
    this.displacementScale = 1;
    this.displacementBias = 0;
    this.roughnessMap = null;
    this.metalnessMap = null;
    this.alphaMap = null;
    this.envMap = null;
    this.envMapRotation = new kt();
    this.envMapIntensity = 1;
    this.wireframe = false;
    this.wireframeLinewidth = 1;
    this.wireframeLinecap = "round";
    this.wireframeLinejoin = "round";
    this.flatShading = false;
    this.fog = true;
    this.setValues(e);
  }
  copy(e) {
    super.copy(e);
    this.defines = {
      STANDARD: ""
    };
    this.color.copy(e.color);
    this.roughness = e.roughness;
    this.metalness = e.metalness;
    this.map = e.map;
    this.lightMap = e.lightMap;
    this.lightMapIntensity = e.lightMapIntensity;
    this.aoMap = e.aoMap;
    this.aoMapIntensity = e.aoMapIntensity;
    this.emissive.copy(e.emissive);
    this.emissiveMap = e.emissiveMap;
    this.emissiveIntensity = e.emissiveIntensity;
    this.bumpMap = e.bumpMap;
    this.bumpScale = e.bumpScale;
    this.normalMap = e.normalMap;
    this.normalMapType = e.normalMapType;
    this.normalScale.copy(e.normalScale);
    this.displacementMap = e.displacementMap;
    this.displacementScale = e.displacementScale;
    this.displacementBias = e.displacementBias;
    this.roughnessMap = e.roughnessMap;
    this.metalnessMap = e.metalnessMap;
    this.alphaMap = e.alphaMap;
    this.envMap = e.envMap;
    this.envMapRotation.copy(e.envMapRotation);
    this.envMapIntensity = e.envMapIntensity;
    this.wireframe = e.wireframe;
    this.wireframeLinewidth = e.wireframeLinewidth;
    this.wireframeLinecap = e.wireframeLinecap;
    this.wireframeLinejoin = e.wireframeLinejoin;
    this.flatShading = e.flatShading;
    this.fog = e.fog;
    return this;
  }
}
class uo extends oi {
  constructor(e) {
    super();
    this.isMeshDepthMaterial = true;
    this.type = "MeshDepthMaterial";
    this.depthPacking = 3200;
    this.map = null;
    this.alphaMap = null;
    this.displacementMap = null;
    this.displacementScale = 1;
    this.displacementBias = 0;
    this.wireframe = false;
    this.wireframeLinewidth = 1;
    this.setValues(e);
  }
  copy(e) {
    super.copy(e);
    this.depthPacking = e.depthPacking;
    this.map = e.map;
    this.alphaMap = e.alphaMap;
    this.displacementMap = e.displacementMap;
    this.displacementScale = e.displacementScale;
    this.displacementBias = e.displacementBias;
    this.wireframe = e.wireframe;
    this.wireframeLinewidth = e.wireframeLinewidth;
    return this;
  }
}
class ho extends oi {
  constructor(e) {
    super();
    this.isMeshDistanceMaterial = true;
    this.type = "MeshDistanceMaterial";
    this.map = null;
    this.alphaMap = null;
    this.displacementMap = null;
    this.displacementScale = 1;
    this.displacementBias = 0;
    this.setValues(e);
  }
  copy(e) {
    super.copy(e);
    this.map = e.map;
    this.alphaMap = e.alphaMap;
    this.displacementMap = e.displacementMap;
    this.displacementScale = e.displacementScale;
    this.displacementBias = e.displacementBias;
    return this;
  }
}
class na extends xt {
  constructor(e, t = 1) {
    super();
    this.isLight = true;
    this.type = "Light";
    this.color = new We(e);
    this.intensity = t;
  }
  dispose() {
    this.dispatchEvent({
      type: "dispose"
    });
  }
  copy(e, t) {
    super.copy(e, t);
    this.color.copy(e.color);
    this.intensity = e.intensity;
    return this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    t.object.color = this.color.getHex();
    t.object.intensity = this.intensity;
    return t;
  }
}
const gr = new it();
const us = new B();
const hs = new B();
class fo {
  constructor(e) {
    this.camera = e;
    this.intensity = 1;
    this.bias = 0;
    this.normalBias = 0;
    this.radius = 1;
    this.blurSamples = 8;
    this.mapSize = new ke(512, 512);
    this.mapType = 1009;
    this.map = null;
    this.mapPass = null;
    this.matrix = new it();
    this.autoUpdate = true;
    this.needsUpdate = false;
    this._frustum = new wr();
    this._frameExtents = new ke(1, 1);
    this._viewportCount = 1;
    this._viewports = [new ot(0, 0, 1, 1)];
  }
  getViewportCount() {
    return this._viewportCount;
  }
  getFrustum() {
    return this._frustum;
  }
  updateMatrices(e) {
    const t = this.camera;
    const n = this.matrix;
    us.setFromMatrixPosition(e.matrixWorld);
    t.position.copy(us);
    hs.setFromMatrixPosition(e.target.matrixWorld);
    t.lookAt(hs);
    t.updateMatrixWorld();
    gr.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse);
    this._frustum.setFromProjectionMatrix(gr, t.coordinateSystem, t.reversedDepth);
    if (t.reversedDepth) {
      n.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 1, 0, 0, 0, 0, 1);
    } else {
      n.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1);
    }
    n.multiply(gr);
  }
  getViewport(e) {
    return this._viewports[e];
  }
  getFrameExtents() {
    return this._frameExtents;
  }
  dispose() {
    if (this.map) {
      this.map.dispose();
    }
    if (this.mapPass) {
      this.mapPass.dispose();
    }
  }
  copy(e) {
    this.camera = e.camera.clone();
    this.intensity = e.intensity;
    this.bias = e.bias;
    this.radius = e.radius;
    this.autoUpdate = e.autoUpdate;
    this.needsUpdate = e.needsUpdate;
    this.normalBias = e.normalBias;
    this.blurSamples = e.blurSamples;
    this.mapSize.copy(e.mapSize);
    return this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  toJSON() {
    const e = {};
    if (this.intensity !== 1) {
      e.intensity = this.intensity;
    }
    if (this.bias !== 0) {
      e.bias = this.bias;
    }
    if (this.normalBias !== 0) {
      e.normalBias = this.normalBias;
    }
    if (this.radius !== 1) {
      e.radius = this.radius;
    }
    if (this.mapSize.x !== 512 || this.mapSize.y !== 512) {
      e.mapSize = this.mapSize.toArray();
    }
    e.camera = this.camera.toJSON(false).object;
    delete e.camera.matrix;
    return e;
  }
}
class Pr extends Zs {
  constructor(e = -1, t = 1, n = 1, r = -1, s = 0.1, o = 2000) {
    super();
    this.isOrthographicCamera = true;
    this.type = "OrthographicCamera";
    this.zoom = 1;
    this.view = null;
    this.left = e;
    this.right = t;
    this.top = n;
    this.bottom = r;
    this.near = s;
    this.far = o;
    this.updateProjectionMatrix();
  }
  copy(e, t) {
    super.copy(e, t);
    this.left = e.left;
    this.right = e.right;
    this.top = e.top;
    this.bottom = e.bottom;
    this.near = e.near;
    this.far = e.far;
    this.zoom = e.zoom;
    this.view = e.view === null ? null : Object.assign({}, e.view);
    return this;
  }
  setViewOffset(e, t, n, r, s, o) {
    if (this.view === null) {
      this.view = {
        enabled: true,
        fullWidth: 1,
        fullHeight: 1,
        offsetX: 0,
        offsetY: 0,
        width: 1,
        height: 1
      };
    }
    this.view.enabled = true;
    this.view.fullWidth = e;
    this.view.fullHeight = t;
    this.view.offsetX = n;
    this.view.offsetY = r;
    this.view.width = s;
    this.view.height = o;
    this.updateProjectionMatrix();
  }
  clearViewOffset() {
    if (this.view !== null) {
      this.view.enabled = false;
    }
    this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = (this.right - this.left) / (this.zoom * 2);
    const t = (this.top - this.bottom) / (this.zoom * 2);
    const n = (this.right + this.left) / 2;
    const r = (this.top + this.bottom) / 2;
    let s = n - e;
    let o = n + e;
    let a = r + t;
    let c = r - t;
    if (this.view !== null && this.view.enabled) {
      const l = (this.right - this.left) / this.view.fullWidth / this.zoom;
      const u = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      s += l * this.view.offsetX;
      o = s + l * this.view.width;
      a -= u * this.view.offsetY;
      c = a - u * this.view.height;
    }
    this.projectionMatrix.makeOrthographic(s, o, a, c, this.near, this.far, this.coordinateSystem, this.reversedDepth);
    this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    t.object.zoom = this.zoom;
    t.object.left = this.left;
    t.object.right = this.right;
    t.object.top = this.top;
    t.object.bottom = this.bottom;
    t.object.near = this.near;
    t.object.far = this.far;
    if (this.view !== null) {
      t.object.view = Object.assign({}, this.view);
    }
    return t;
  }
}
class po extends fo {
  constructor() {
    super(new Pr(-5, 5, 5, -5, 0.5, 500));
    this.isDirectionalLightShadow = true;
  }
}
class yd extends na {
  constructor(e, t) {
    super(e, t);
    this.isDirectionalLight = true;
    this.type = "DirectionalLight";
    this.position.copy(xt.DEFAULT_UP);
    this.updateMatrix();
    this.target = new xt();
    this.shadow = new po();
  }
  dispose() {
    super.dispose();
    this.shadow.dispose();
  }
  copy(e) {
    super.copy(e);
    this.target = e.target.clone();
    this.shadow = e.shadow.clone();
    return this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    t.object.shadow = this.shadow.toJSON();
    t.object.target = this.target.uuid;
    return t;
  }
}
class bd extends na {
  constructor(e, t) {
    super(e, t);
    this.isAmbientLight = true;
    this.type = "AmbientLight";
  }
}
class mo extends Ut {
  constructor(e = []) {
    super();
    this.isArrayCamera = true;
    this.isMultiViewCamera = false;
    this.cameras = e;
  }
}
function fs(i, e, t, n) {
  const r = go(n);
  switch (t) {
    case 1021:
      return i * e;
    case 1028:
      return i * e / r.components * r.byteLength;
    case 1029:
      return i * e / r.components * r.byteLength;
    case 1030:
      return i * e * 2 / r.components * r.byteLength;
    case 1031:
      return i * e * 2 / r.components * r.byteLength;
    case 1022:
      return i * e * 3 / r.components * r.byteLength;
    case 1023:
      return i * e * 4 / r.components * r.byteLength;
    case 1033:
      return i * e * 4 / r.components * r.byteLength;
    case 33776:
    case 33777:
      return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 8;
    case 33778:
    case 33779:
      return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case 35841:
    case 35843:
      return Math.max(i, 16) * Math.max(e, 8) / 4;
    case 35840:
    case 35842:
      return Math.max(i, 8) * Math.max(e, 8) / 2;
    case 36196:
    case 37492:
    case 37488:
    case 37489:
      return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 8;
    case 37496:
    case 37490:
    case 37491:
      return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case 37808:
      return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case 37809:
      return Math.floor((i + 4) / 5) * Math.floor((e + 3) / 4) * 16;
    case 37810:
      return Math.floor((i + 4) / 5) * Math.floor((e + 4) / 5) * 16;
    case 37811:
      return Math.floor((i + 5) / 6) * Math.floor((e + 4) / 5) * 16;
    case 37812:
      return Math.floor((i + 5) / 6) * Math.floor((e + 5) / 6) * 16;
    case 37813:
      return Math.floor((i + 7) / 8) * Math.floor((e + 4) / 5) * 16;
    case 37814:
      return Math.floor((i + 7) / 8) * Math.floor((e + 5) / 6) * 16;
    case 37815:
      return Math.floor((i + 7) / 8) * Math.floor((e + 7) / 8) * 16;
    case 37816:
      return Math.floor((i + 9) / 10) * Math.floor((e + 4) / 5) * 16;
    case 37817:
      return Math.floor((i + 9) / 10) * Math.floor((e + 5) / 6) * 16;
    case 37818:
      return Math.floor((i + 9) / 10) * Math.floor((e + 7) / 8) * 16;
    case 37819:
      return Math.floor((i + 9) / 10) * Math.floor((e + 9) / 10) * 16;
    case 37820:
      return Math.floor((i + 11) / 12) * Math.floor((e + 9) / 10) * 16;
    case 37821:
      return Math.floor((i + 11) / 12) * Math.floor((e + 11) / 12) * 16;
    case 36492:
    case 36494:
    case 36495:
      return Math.ceil(i / 4) * Math.ceil(e / 4) * 16;
    case 36283:
    case 36284:
      return Math.ceil(i / 4) * Math.ceil(e / 4) * 8;
    case 36285:
    case 36286:
      return Math.ceil(i / 4) * Math.ceil(e / 4) * 16;
  }
  throw new Error(`Unable to determine texture byte length for ${t} format.`);
}
function go(i) {
  switch (i) {
    case 1009:
    case 1010:
      return {
        byteLength: 1,
        components: 1
      };
    case 1012:
    case 1011:
    case 1016:
      return {
        byteLength: 2,
        components: 1
      };
    case 1017:
    case 1018:
      return {
        byteLength: 2,
        components: 4
      };
    case 1014:
    case 1013:
    case 1015:
      return {
        byteLength: 4,
        components: 1
      };
    case 35902:
    case 35899:
      return {
        byteLength: 4,
        components: 3
      };
  }
  throw new Error(`Unknown texture type ${i}.`);
}
if (typeof __THREE_DEVTOOLS__ !== "undefined") {
  __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", {
    detail: {
      revision: "182"
    }
  }));
}
if (typeof window !== "undefined") {
  if (window.__THREE__) {
    Ce("WARNING: Multiple instances of Three.js being imported.");
  } else {
    window.__THREE__ = "182";
  }
}
function ia() {
  let i = null;
  let e = false;
  let t = null;
  let n = null;
  function r(s, o) {
    t(s, o);
    n = i.requestAnimationFrame(r);
  }
  return {
    start: function () {
      if (e !== true && t !== null) {
        n = i.requestAnimationFrame(r);
        e = true;
      }
    },
    stop: function () {
      i.cancelAnimationFrame(n);
      e = false;
    },
    setAnimationLoop: function (s) {
      t = s;
    },
    setContext: function (s) {
      i = s;
    }
  };
}
function _o(i) {
  const e = new WeakMap();
  function t(a, c) {
    const l = a.array;
    const u = a.usage;
    const f = l.byteLength;
    const d = i.createBuffer();
    i.bindBuffer(c, d);
    i.bufferData(c, l, u);
    a.onUploadCallback();
    let p;
    if (l instanceof Float32Array) {
      p = i.FLOAT;
    } else if (typeof Float16Array !== "undefined" && l instanceof Float16Array) {
      p = i.HALF_FLOAT;
    } else if (l instanceof Uint16Array) {
      if (a.isFloat16BufferAttribute) {
        p = i.HALF_FLOAT;
      } else {
        p = i.UNSIGNED_SHORT;
      }
    } else if (l instanceof Int16Array) {
      p = i.SHORT;
    } else if (l instanceof Uint32Array) {
      p = i.UNSIGNED_INT;
    } else if (l instanceof Int32Array) {
      p = i.INT;
    } else if (l instanceof Int8Array) {
      p = i.BYTE;
    } else if (l instanceof Uint8Array) {
      p = i.UNSIGNED_BYTE;
    } else if (l instanceof Uint8ClampedArray) {
      p = i.UNSIGNED_BYTE;
    } else {
      throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + l);
    }
    return {
      buffer: d,
      type: p,
      bytesPerElement: l.BYTES_PER_ELEMENT,
      version: a.version,
      size: f
    };
  }
  function n(a, c, l) {
    const u = c.array;
    const f = c.updateRanges;
    i.bindBuffer(l, a);
    if (f.length === 0) {
      i.bufferSubData(l, 0, u);
    } else {
      f.sort((p, x) => p.start - x.start);
      let d = 0;
      for (let p = 1; p < f.length; p++) {
        const x = f[d];
        const _ = f[p];
        if (_.start <= x.start + x.count + 1) {
          x.count = Math.max(x.count, _.start + _.count - x.start);
        } else {
          ++d;
          f[d] = _;
        }
      }
      f.length = d + 1;
      for (let p = 0, x = f.length; p < x; p++) {
        const _ = f[p];
        i.bufferSubData(l, _.start * u.BYTES_PER_ELEMENT, u, _.start, _.count);
      }
      c.clearUpdateRanges();
    }
    c.onUploadCallback();
  }
  function r(a) {
    if (a.isInterleavedBufferAttribute) {
      a = a.data;
    }
    return e.get(a);
  }
  function s(a) {
    if (a.isInterleavedBufferAttribute) {
      a = a.data;
    }
    const c = e.get(a);
    if (c) {
      i.deleteBuffer(c.buffer);
      e.delete(a);
    }
  }
  function o(a, c) {
    if (a.isInterleavedBufferAttribute) {
      a = a.data;
    }
    if (a.isGLBufferAttribute) {
      const u = e.get(a);
      if (!u || u.version < a.version) {
        e.set(a, {
          buffer: a.buffer,
          type: a.type,
          bytesPerElement: a.elementSize,
          version: a.version
        });
      }
      return;
    }
    const l = e.get(a);
    if (l === undefined) {
      e.set(a, t(a, c));
    } else if (l.version < a.version) {
      if (l.size !== a.array.byteLength) {
        throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");
      }
      n(l.buffer, a, c);
      l.version = a.version;
    }
  }
  return {
    get: r,
    remove: s,
    update: o
  };
}
var xo = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`;
var vo = `#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`;
var So = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`;
var Mo = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`;
var Eo = `#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`;
var To = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`;
var yo = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`;
var bo = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`;
var Ao = `#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`;
var Ro = `#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`;
var Co = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`;
var wo = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`;
var Po = `float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`;
var Do = `#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`;
var Lo = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`;
var Fo = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`;
var Io = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`;
var Uo = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`;
var No = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`;
var Bo = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`;
var Oo = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`;
var Go = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`;
var zo = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`;
var Vo = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`;
var Ho = `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`;
var ko = `vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`;
var Wo = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`;
var Xo = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`;
var qo = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`;
var Yo = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`;
var $o = "gl_FragColor = linearToOutputTexel( gl_FragColor );";
var Ko = `vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`;
var Zo = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`;
var jo = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`;
var Jo = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`;
var Qo = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`;
var el = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`;
var tl = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`;
var nl = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`;
var il = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`;
var rl = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`;
var sl = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`;
var al = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`;
var ol = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`;
var ll = `varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`;
var cl = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`;
var ul = `#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`;
var hl = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`;
var fl = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`;
var dl = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`;
var pl = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`;
var ml = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`;
var gl = `uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`;
var _l = `
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`;
var xl = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`;
var vl = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`;
var Sl = `#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`;
var Ml = `#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`;
var El = `#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`;
var Tl = `#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`;
var yl = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`;
var bl = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`;
var Al = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`;
var Rl = `#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`;
var Cl = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`;
var wl = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`;
var Pl = `#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`;
var Dl = `#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`;
var Ll = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`;
var Fl = `#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`;
var Il = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`;
var Ul = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`;
var Nl = `#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`;
var Bl = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`;
var Ol = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`;
var Gl = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`;
var zl = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`;
var Vl = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`;
var Hl = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`;
var kl = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`;
var Wl = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`;
var Xl = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`;
var ql = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`;
var Yl = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`;
var $l = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`;
var Kl = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`;
var Zl = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`;
var jl = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`;
var Jl = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`;
var Ql = `#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`;
var ec = `#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`;
var tc = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`;
var nc = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`;
var ic = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`;
var rc = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`;
var sc = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`;
var ac = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`;
var oc = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`;
var lc = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`;
var cc = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`;
var uc = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`;
var hc = `#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`;
var fc = `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`;
var dc = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`;
var pc = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`;
var mc = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`;
var gc = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const _c = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`;
const xc = `uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`;
const vc = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`;
const Sc = `#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`;
const Mc = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`;
const Ec = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`;
const Tc = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`;
const yc = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`;
const bc = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`;
const Ac = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`;
const Rc = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`;
const Cc = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`;
const wc = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`;
const Pc = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`;
const Dc = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`;
const Lc = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`;
const Fc = `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`;
const Ic = `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`;
const Uc = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`;
const Nc = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`;
const Bc = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`;
const Oc = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`;
const Gc = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`;
const zc = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`;
const Vc = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`;
const Hc = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`;
const kc = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`;
const Wc = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`;
const Xc = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`;
const qc = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`;
const Yc = `#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`;
const $c = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`;
const Kc = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`;
const Zc = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`;
const De = {
  alphahash_fragment: xo,
  alphahash_pars_fragment: vo,
  alphamap_fragment: So,
  alphamap_pars_fragment: Mo,
  alphatest_fragment: Eo,
  alphatest_pars_fragment: To,
  aomap_fragment: yo,
  aomap_pars_fragment: bo,
  batching_pars_vertex: Ao,
  batching_vertex: Ro,
  begin_vertex: Co,
  beginnormal_vertex: wo,
  bsdfs: Po,
  iridescence_fragment: Do,
  bumpmap_pars_fragment: Lo,
  clipping_planes_fragment: Fo,
  clipping_planes_pars_fragment: Io,
  clipping_planes_pars_vertex: Uo,
  clipping_planes_vertex: No,
  color_fragment: Bo,
  color_pars_fragment: Oo,
  color_pars_vertex: Go,
  color_vertex: zo,
  common: Vo,
  cube_uv_reflection_fragment: Ho,
  defaultnormal_vertex: ko,
  displacementmap_pars_vertex: Wo,
  displacementmap_vertex: Xo,
  emissivemap_fragment: qo,
  emissivemap_pars_fragment: Yo,
  colorspace_fragment: $o,
  colorspace_pars_fragment: Ko,
  envmap_fragment: Zo,
  envmap_common_pars_fragment: jo,
  envmap_pars_fragment: Jo,
  envmap_pars_vertex: Qo,
  envmap_physical_pars_fragment: ul,
  envmap_vertex: el,
  fog_vertex: tl,
  fog_pars_vertex: nl,
  fog_fragment: il,
  fog_pars_fragment: rl,
  gradientmap_pars_fragment: sl,
  lightmap_pars_fragment: al,
  lights_lambert_fragment: ol,
  lights_lambert_pars_fragment: ll,
  lights_pars_begin: cl,
  lights_toon_fragment: hl,
  lights_toon_pars_fragment: fl,
  lights_phong_fragment: dl,
  lights_phong_pars_fragment: pl,
  lights_physical_fragment: ml,
  lights_physical_pars_fragment: gl,
  lights_fragment_begin: _l,
  lights_fragment_maps: xl,
  lights_fragment_end: vl,
  logdepthbuf_fragment: Sl,
  logdepthbuf_pars_fragment: Ml,
  logdepthbuf_pars_vertex: El,
  logdepthbuf_vertex: Tl,
  map_fragment: yl,
  map_pars_fragment: bl,
  map_particle_fragment: Al,
  map_particle_pars_fragment: Rl,
  metalnessmap_fragment: Cl,
  metalnessmap_pars_fragment: wl,
  morphinstance_vertex: Pl,
  morphcolor_vertex: Dl,
  morphnormal_vertex: Ll,
  morphtarget_pars_vertex: Fl,
  morphtarget_vertex: Il,
  normal_fragment_begin: Ul,
  normal_fragment_maps: Nl,
  normal_pars_fragment: Bl,
  normal_pars_vertex: Ol,
  normal_vertex: Gl,
  normalmap_pars_fragment: zl,
  clearcoat_normal_fragment_begin: Vl,
  clearcoat_normal_fragment_maps: Hl,
  clearcoat_pars_fragment: kl,
  iridescence_pars_fragment: Wl,
  opaque_fragment: Xl,
  packing: ql,
  premultiplied_alpha_fragment: Yl,
  project_vertex: $l,
  dithering_fragment: Kl,
  dithering_pars_fragment: Zl,
  roughnessmap_fragment: jl,
  roughnessmap_pars_fragment: Jl,
  shadowmap_pars_fragment: Ql,
  shadowmap_pars_vertex: ec,
  shadowmap_vertex: tc,
  shadowmask_pars_fragment: nc,
  skinbase_vertex: ic,
  skinning_pars_vertex: rc,
  skinning_vertex: sc,
  skinnormal_vertex: ac,
  specularmap_fragment: oc,
  specularmap_pars_fragment: lc,
  tonemapping_fragment: cc,
  tonemapping_pars_fragment: uc,
  transmission_fragment: hc,
  transmission_pars_fragment: fc,
  uv_pars_fragment: dc,
  uv_pars_vertex: pc,
  uv_vertex: mc,
  worldpos_vertex: gc,
  background_vert: _c,
  background_frag: xc,
  backgroundCube_vert: vc,
  backgroundCube_frag: Sc,
  cube_vert: Mc,
  cube_frag: Ec,
  depth_vert: Tc,
  depth_frag: yc,
  distance_vert: bc,
  distance_frag: Ac,
  equirect_vert: Rc,
  equirect_frag: Cc,
  linedashed_vert: wc,
  linedashed_frag: Pc,
  meshbasic_vert: Dc,
  meshbasic_frag: Lc,
  meshlambert_vert: Fc,
  meshlambert_frag: Ic,
  meshmatcap_vert: Uc,
  meshmatcap_frag: Nc,
  meshnormal_vert: Bc,
  meshnormal_frag: Oc,
  meshphong_vert: Gc,
  meshphong_frag: zc,
  meshphysical_vert: Vc,
  meshphysical_frag: Hc,
  meshtoon_vert: kc,
  meshtoon_frag: Wc,
  points_vert: Xc,
  points_frag: qc,
  shadow_vert: Yc,
  shadow_frag: $c,
  sprite_vert: Kc,
  sprite_frag: Zc
};
const oe = {
  common: {
    diffuse: {
      value: new We(16777215)
    },
    opacity: {
      value: 1
    },
    map: {
      value: null
    },
    mapTransform: {
      value: new Pe()
    },
    alphaMap: {
      value: null
    },
    alphaMapTransform: {
      value: new Pe()
    },
    alphaTest: {
      value: 0
    }
  },
  specularmap: {
    specularMap: {
      value: null
    },
    specularMapTransform: {
      value: new Pe()
    }
  },
  envmap: {
    envMap: {
      value: null
    },
    envMapRotation: {
      value: new Pe()
    },
    flipEnvMap: {
      value: -1
    },
    reflectivity: {
      value: 1
    },
    ior: {
      value: 1.5
    },
    refractionRatio: {
      value: 0.98
    },
    dfgLUT: {
      value: null
    }
  },
  aomap: {
    aoMap: {
      value: null
    },
    aoMapIntensity: {
      value: 1
    },
    aoMapTransform: {
      value: new Pe()
    }
  },
  lightmap: {
    lightMap: {
      value: null
    },
    lightMapIntensity: {
      value: 1
    },
    lightMapTransform: {
      value: new Pe()
    }
  },
  bumpmap: {
    bumpMap: {
      value: null
    },
    bumpMapTransform: {
      value: new Pe()
    },
    bumpScale: {
      value: 1
    }
  },
  normalmap: {
    normalMap: {
      value: null
    },
    normalMapTransform: {
      value: new Pe()
    },
    normalScale: {
      value: new ke(1, 1)
    }
  },
  displacementmap: {
    displacementMap: {
      value: null
    },
    displacementMapTransform: {
      value: new Pe()
    },
    displacementScale: {
      value: 1
    },
    displacementBias: {
      value: 0
    }
  },
  emissivemap: {
    emissiveMap: {
      value: null
    },
    emissiveMapTransform: {
      value: new Pe()
    }
  },
  metalnessmap: {
    metalnessMap: {
      value: null
    },
    metalnessMapTransform: {
      value: new Pe()
    }
  },
  roughnessmap: {
    roughnessMap: {
      value: null
    },
    roughnessMapTransform: {
      value: new Pe()
    }
  },
  gradientmap: {
    gradientMap: {
      value: null
    }
  },
  fog: {
    fogDensity: {
      value: 0.00025
    },
    fogNear: {
      value: 1
    },
    fogFar: {
      value: 2000
    },
    fogColor: {
      value: new We(16777215)
    }
  },
  lights: {
    ambientLightColor: {
      value: []
    },
    lightProbe: {
      value: []
    },
    directionalLights: {
      value: [],
      properties: {
        direction: {},
        color: {}
      }
    },
    directionalLightShadows: {
      value: [],
      properties: {
        shadowIntensity: 1,
        shadowBias: {},
        shadowNormalBias: {},
        shadowRadius: {},
        shadowMapSize: {}
      }
    },
    directionalShadowMap: {
      value: []
    },
    directionalShadowMatrix: {
      value: []
    },
    spotLights: {
      value: [],
      properties: {
        color: {},
        position: {},
        direction: {},
        distance: {},
        coneCos: {},
        penumbraCos: {},
        decay: {}
      }
    },
    spotLightShadows: {
      value: [],
      properties: {
        shadowIntensity: 1,
        shadowBias: {},
        shadowNormalBias: {},
        shadowRadius: {},
        shadowMapSize: {}
      }
    },
    spotLightMap: {
      value: []
    },
    spotShadowMap: {
      value: []
    },
    spotLightMatrix: {
      value: []
    },
    pointLights: {
      value: [],
      properties: {
        color: {},
        position: {},
        decay: {},
        distance: {}
      }
    },
    pointLightShadows: {
      value: [],
      properties: {
        shadowIntensity: 1,
        shadowBias: {},
        shadowNormalBias: {},
        shadowRadius: {},
        shadowMapSize: {},
        shadowCameraNear: {},
        shadowCameraFar: {}
      }
    },
    pointShadowMap: {
      value: []
    },
    pointShadowMatrix: {
      value: []
    },
    hemisphereLights: {
      value: [],
      properties: {
        direction: {},
        skyColor: {},
        groundColor: {}
      }
    },
    rectAreaLights: {
      value: [],
      properties: {
        color: {},
        position: {},
        width: {},
        height: {}
      }
    },
    ltc_1: {
      value: null
    },
    ltc_2: {
      value: null
    }
  },
  points: {
    diffuse: {
      value: new We(16777215)
    },
    opacity: {
      value: 1
    },
    size: {
      value: 1
    },
    scale: {
      value: 1
    },
    map: {
      value: null
    },
    alphaMap: {
      value: null
    },
    alphaMapTransform: {
      value: new Pe()
    },
    alphaTest: {
      value: 0
    },
    uvTransform: {
      value: new Pe()
    }
  },
  sprite: {
    diffuse: {
      value: new We(16777215)
    },
    opacity: {
      value: 1
    },
    center: {
      value: new ke(0.5, 0.5)
    },
    rotation: {
      value: 0
    },
    map: {
      value: null
    },
    mapTransform: {
      value: new Pe()
    },
    alphaMap: {
      value: null
    },
    alphaMapTransform: {
      value: new Pe()
    },
    alphaTest: {
      value: 0
    }
  }
};
const Vt = {
  basic: {
    uniforms: St([oe.common, oe.specularmap, oe.envmap, oe.aomap, oe.lightmap, oe.fog]),
    vertexShader: De.meshbasic_vert,
    fragmentShader: De.meshbasic_frag
  },
  lambert: {
    uniforms: St([oe.common, oe.specularmap, oe.envmap, oe.aomap, oe.lightmap, oe.emissivemap, oe.bumpmap, oe.normalmap, oe.displacementmap, oe.fog, oe.lights, {
      emissive: {
        value: new We(0)
      }
    }]),
    vertexShader: De.meshlambert_vert,
    fragmentShader: De.meshlambert_frag
  },
  phong: {
    uniforms: St([oe.common, oe.specularmap, oe.envmap, oe.aomap, oe.lightmap, oe.emissivemap, oe.bumpmap, oe.normalmap, oe.displacementmap, oe.fog, oe.lights, {
      emissive: {
        value: new We(0)
      },
      specular: {
        value: new We(1118481)
      },
      shininess: {
        value: 30
      }
    }]),
    vertexShader: De.meshphong_vert,
    fragmentShader: De.meshphong_frag
  },
  standard: {
    uniforms: St([oe.common, oe.envmap, oe.aomap, oe.lightmap, oe.emissivemap, oe.bumpmap, oe.normalmap, oe.displacementmap, oe.roughnessmap, oe.metalnessmap, oe.fog, oe.lights, {
      emissive: {
        value: new We(0)
      },
      roughness: {
        value: 1
      },
      metalness: {
        value: 0
      },
      envMapIntensity: {
        value: 1
      }
    }]),
    vertexShader: De.meshphysical_vert,
    fragmentShader: De.meshphysical_frag
  },
  toon: {
    uniforms: St([oe.common, oe.aomap, oe.lightmap, oe.emissivemap, oe.bumpmap, oe.normalmap, oe.displacementmap, oe.gradientmap, oe.fog, oe.lights, {
      emissive: {
        value: new We(0)
      }
    }]),
    vertexShader: De.meshtoon_vert,
    fragmentShader: De.meshtoon_frag
  },
  matcap: {
    uniforms: St([oe.common, oe.bumpmap, oe.normalmap, oe.displacementmap, oe.fog, {
      matcap: {
        value: null
      }
    }]),
    vertexShader: De.meshmatcap_vert,
    fragmentShader: De.meshmatcap_frag
  },
  points: {
    uniforms: St([oe.points, oe.fog]),
    vertexShader: De.points_vert,
    fragmentShader: De.points_frag
  },
  dashed: {
    uniforms: St([oe.common, oe.fog, {
      scale: {
        value: 1
      },
      dashSize: {
        value: 1
      },
      totalSize: {
        value: 2
      }
    }]),
    vertexShader: De.linedashed_vert,
    fragmentShader: De.linedashed_frag
  },
  depth: {
    uniforms: St([oe.common, oe.displacementmap]),
    vertexShader: De.depth_vert,
    fragmentShader: De.depth_frag
  },
  normal: {
    uniforms: St([oe.common, oe.bumpmap, oe.normalmap, oe.displacementmap, {
      opacity: {
        value: 1
      }
    }]),
    vertexShader: De.meshnormal_vert,
    fragmentShader: De.meshnormal_frag
  },
  sprite: {
    uniforms: St([oe.sprite, oe.fog]),
    vertexShader: De.sprite_vert,
    fragmentShader: De.sprite_frag
  },
  background: {
    uniforms: {
      uvTransform: {
        value: new Pe()
      },
      t2D: {
        value: null
      },
      backgroundIntensity: {
        value: 1
      }
    },
    vertexShader: De.background_vert,
    fragmentShader: De.background_frag
  },
  backgroundCube: {
    uniforms: {
      envMap: {
        value: null
      },
      flipEnvMap: {
        value: -1
      },
      backgroundBlurriness: {
        value: 0
      },
      backgroundIntensity: {
        value: 1
      },
      backgroundRotation: {
        value: new Pe()
      }
    },
    vertexShader: De.backgroundCube_vert,
    fragmentShader: De.backgroundCube_frag
  },
  cube: {
    uniforms: {
      tCube: {
        value: null
      },
      tFlip: {
        value: -1
      },
      opacity: {
        value: 1
      }
    },
    vertexShader: De.cube_vert,
    fragmentShader: De.cube_frag
  },
  equirect: {
    uniforms: {
      tEquirect: {
        value: null
      }
    },
    vertexShader: De.equirect_vert,
    fragmentShader: De.equirect_frag
  },
  distance: {
    uniforms: St([oe.common, oe.displacementmap, {
      referencePosition: {
        value: new B()
      },
      nearDistance: {
        value: 1
      },
      farDistance: {
        value: 1000
      }
    }]),
    vertexShader: De.distance_vert,
    fragmentShader: De.distance_frag
  },
  shadow: {
    uniforms: St([oe.lights, oe.fog, {
      color: {
        value: new We(0)
      },
      opacity: {
        value: 1
      }
    }]),
    vertexShader: De.shadow_vert,
    fragmentShader: De.shadow_frag
  }
};
Vt.physical = {
  uniforms: St([Vt.standard.uniforms, {
    clearcoat: {
      value: 0
    },
    clearcoatMap: {
      value: null
    },
    clearcoatMapTransform: {
      value: new Pe()
    },
    clearcoatNormalMap: {
      value: null
    },
    clearcoatNormalMapTransform: {
      value: new Pe()
    },
    clearcoatNormalScale: {
      value: new ke(1, 1)
    },
    clearcoatRoughness: {
      value: 0
    },
    clearcoatRoughnessMap: {
      value: null
    },
    clearcoatRoughnessMapTransform: {
      value: new Pe()
    },
    dispersion: {
      value: 0
    },
    iridescence: {
      value: 0
    },
    iridescenceMap: {
      value: null
    },
    iridescenceMapTransform: {
      value: new Pe()
    },
    iridescenceIOR: {
      value: 1.3
    },
    iridescenceThicknessMinimum: {
      value: 100
    },
    iridescenceThicknessMaximum: {
      value: 400
    },
    iridescenceThicknessMap: {
      value: null
    },
    iridescenceThicknessMapTransform: {
      value: new Pe()
    },
    sheen: {
      value: 0
    },
    sheenColor: {
      value: new We(0)
    },
    sheenColorMap: {
      value: null
    },
    sheenColorMapTransform: {
      value: new Pe()
    },
    sheenRoughness: {
      value: 1
    },
    sheenRoughnessMap: {
      value: null
    },
    sheenRoughnessMapTransform: {
      value: new Pe()
    },
    transmission: {
      value: 0
    },
    transmissionMap: {
      value: null
    },
    transmissionMapTransform: {
      value: new Pe()
    },
    transmissionSamplerSize: {
      value: new ke()
    },
    transmissionSamplerMap: {
      value: null
    },
    thickness: {
      value: 0
    },
    thicknessMap: {
      value: null
    },
    thicknessMapTransform: {
      value: new Pe()
    },
    attenuationDistance: {
      value: 0
    },
    attenuationColor: {
      value: new We(0)
    },
    specularColor: {
      value: new We(1, 1, 1)
    },
    specularColorMap: {
      value: null
    },
    specularColorMapTransform: {
      value: new Pe()
    },
    specularIntensity: {
      value: 1
    },
    specularIntensityMap: {
      value: null
    },
    specularIntensityMapTransform: {
      value: new Pe()
    },
    anisotropyVector: {
      value: new ke()
    },
    anisotropyMap: {
      value: null
    },
    anisotropyMapTransform: {
      value: new Pe()
    }
  }]),
  vertexShader: De.meshphysical_vert,
  fragmentShader: De.meshphysical_frag
};
const Di = {
  r: 0,
  b: 0,
  g: 0
};
const pn = new kt();
const jc = new it();
function Jc(i, e, t, n, r, s, o) {
  const a = new We(0);
  let c = s === true ? 0 : 1;
  let l;
  let u;
  let f = null;
  let d = 0;
  let p = null;
  function x(y) {
    let T = y.isScene === true ? y.background : null;
    if (T && T.isTexture) {
      T = (y.backgroundBlurriness > 0 ? t : e).get(T);
    }
    return T;
  }
  function _(y) {
    let T = false;
    const A = x(y);
    if (A === null) {
      h(a, c);
    } else if (A && A.isColor) {
      h(A, 1);
      T = true;
    }
    const R = i.xr.getEnvironmentBlendMode();
    if (R === "additive") {
      n.buffers.color.setClear(0, 0, 0, 1, o);
    } else if (R === "alpha-blend") {
      n.buffers.color.setClear(0, 0, 0, 0, o);
    }
    if (i.autoClear || T) {
      n.buffers.depth.setTest(true);
      n.buffers.depth.setMask(true);
      n.buffers.color.setMask(true);
      i.clear(i.autoClearColor, i.autoClearDepth, i.autoClearStencil);
    }
  }
  function m(y, T) {
    const A = x(T);
    if (A && (A.isCubeTexture || A.mapping === 306)) {
      if (u === undefined) {
        u = new Ot(new li(1, 1, 1), new Wt({
          name: "BackgroundCubeMaterial",
          uniforms: Bn(Vt.backgroundCube.uniforms),
          vertexShader: Vt.backgroundCube.vertexShader,
          fragmentShader: Vt.backgroundCube.fragmentShader,
          side: 1,
          depthTest: false,
          depthWrite: false,
          fog: false,
          allowOverride: false
        }));
        u.geometry.deleteAttribute("normal");
        u.geometry.deleteAttribute("uv");
        u.onBeforeRender = function (R, w, U) {
          this.matrixWorld.copyPosition(U.matrixWorld);
        };
        Object.defineProperty(u.material, "envMap", {
          get: function () {
            return this.uniforms.envMap.value;
          }
        });
        r.update(u);
      }
      pn.copy(T.backgroundRotation);
      pn.x *= -1;
      pn.y *= -1;
      pn.z *= -1;
      if (A.isCubeTexture && A.isRenderTargetTexture === false) {
        pn.y *= -1;
        pn.z *= -1;
      }
      u.material.uniforms.envMap.value = A;
      u.material.uniforms.flipEnvMap.value = A.isCubeTexture && A.isRenderTargetTexture === false ? -1 : 1;
      u.material.uniforms.backgroundBlurriness.value = T.backgroundBlurriness;
      u.material.uniforms.backgroundIntensity.value = T.backgroundIntensity;
      u.material.uniforms.backgroundRotation.value.setFromMatrix4(jc.makeRotationFromEuler(pn));
      u.material.toneMapped = Ge.getTransfer(A.colorSpace) !== Ke;
      if (f !== A || d !== A.version || p !== i.toneMapping) {
        u.material.needsUpdate = true;
        f = A;
        d = A.version;
        p = i.toneMapping;
      }
      u.layers.enableAll();
      y.unshift(u, u.geometry, u.material, 0, 0, null);
    } else if (A && A.isTexture) {
      if (l === undefined) {
        l = new Ot(new Bi(2, 2), new Wt({
          name: "BackgroundMaterial",
          uniforms: Bn(Vt.background.uniforms),
          vertexShader: Vt.background.vertexShader,
          fragmentShader: Vt.background.fragmentShader,
          side: 0,
          depthTest: false,
          depthWrite: false,
          fog: false,
          allowOverride: false
        }));
        l.geometry.deleteAttribute("normal");
        Object.defineProperty(l.material, "map", {
          get: function () {
            return this.uniforms.t2D.value;
          }
        });
        r.update(l);
      }
      l.material.uniforms.t2D.value = A;
      l.material.uniforms.backgroundIntensity.value = T.backgroundIntensity;
      l.material.toneMapped = Ge.getTransfer(A.colorSpace) !== Ke;
      if (A.matrixAutoUpdate === true) {
        A.updateMatrix();
      }
      l.material.uniforms.uvTransform.value.copy(A.matrix);
      if (f !== A || d !== A.version || p !== i.toneMapping) {
        l.material.needsUpdate = true;
        f = A;
        d = A.version;
        p = i.toneMapping;
      }
      l.layers.enableAll();
      y.unshift(l, l.geometry, l.material, 0, 0, null);
    }
  }
  function h(y, T) {
    y.getRGB(Di, Ks(i));
    n.buffers.color.setClear(Di.r, Di.g, Di.b, T, o);
  }
  function b() {
    if (u !== undefined) {
      u.geometry.dispose();
      u.material.dispose();
      u = undefined;
    }
    if (l !== undefined) {
      l.geometry.dispose();
      l.material.dispose();
      l = undefined;
    }
  }
  return {
    getClearColor: function () {
      return a;
    },
    setClearColor: function (y, T = 1) {
      a.set(y);
      c = T;
      h(a, c);
    },
    getClearAlpha: function () {
      return c;
    },
    setClearAlpha: function (y) {
      c = y;
      h(a, c);
    },
    render: _,
    addToRenderList: m,
    dispose: b
  };
}
function Qc(i, e) {
  const t = i.getParameter(i.MAX_VERTEX_ATTRIBS);
  const n = {};
  const r = d(null);
  let s = r;
  let o = false;
  function a(M, D, O, N, H) {
    let q = false;
    const V = f(N, O, D);
    if (s !== V) {
      s = V;
      l(s.object);
    }
    q = p(M, N, O, H);
    if (q) {
      x(M, N, O, H);
    }
    if (H !== null) {
      e.update(H, i.ELEMENT_ARRAY_BUFFER);
    }
    if (q || o) {
      o = false;
      T(M, D, O, N);
      if (H !== null) {
        i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, e.get(H).buffer);
      }
    }
  }
  function c() {
    return i.createVertexArray();
  }
  function l(M) {
    return i.bindVertexArray(M);
  }
  function u(M) {
    return i.deleteVertexArray(M);
  }
  function f(M, D, O) {
    const N = O.wireframe === true;
    let H = n[M.id];
    if (H === undefined) {
      H = {};
      n[M.id] = H;
    }
    let q = H[D.id];
    if (q === undefined) {
      q = {};
      H[D.id] = q;
    }
    let V = q[N];
    if (V === undefined) {
      V = d(c());
      q[N] = V;
    }
    return V;
  }
  function d(M) {
    const D = [];
    const O = [];
    const N = [];
    for (let H = 0; H < t; H++) {
      D[H] = 0;
      O[H] = 0;
      N[H] = 0;
    }
    return {
      geometry: null,
      program: null,
      wireframe: false,
      newAttributes: D,
      enabledAttributes: O,
      attributeDivisors: N,
      object: M,
      attributes: {},
      index: null
    };
  }
  function p(M, D, O, N) {
    const H = s.attributes;
    const q = D.attributes;
    let V = 0;
    const W = O.getAttributes();
    for (const Z in W) {
      if (W[Z].location >= 0) {
        const ae = H[Z];
        let he = q[Z];
        if (he === undefined) {
          if (Z === "instanceMatrix" && M.instanceMatrix) {
            he = M.instanceMatrix;
          }
          if (Z === "instanceColor" && M.instanceColor) {
            he = M.instanceColor;
          }
        }
        if (ae === undefined || ae.attribute !== he || he && ae.data !== he.data) {
          return true;
        }
        V++;
      }
    }
    return s.attributesNum !== V || s.index !== N;
  }
  function x(M, D, O, N) {
    const H = {};
    const q = D.attributes;
    let V = 0;
    const W = O.getAttributes();
    for (const Z in W) {
      if (W[Z].location >= 0) {
        let ae = q[Z];
        if (ae === undefined) {
          if (Z === "instanceMatrix" && M.instanceMatrix) {
            ae = M.instanceMatrix;
          }
          if (Z === "instanceColor" && M.instanceColor) {
            ae = M.instanceColor;
          }
        }
        const he = {
          attribute: ae
        };
        if (ae && ae.data) {
          he.data = ae.data;
        }
        H[Z] = he;
        V++;
      }
    }
    s.attributes = H;
    s.attributesNum = V;
    s.index = N;
  }
  function _() {
    const M = s.newAttributes;
    for (let D = 0, O = M.length; D < O; D++) {
      M[D] = 0;
    }
  }
  function m(M) {
    h(M, 0);
  }
  function h(M, D) {
    const O = s.newAttributes;
    const N = s.enabledAttributes;
    const H = s.attributeDivisors;
    O[M] = 1;
    if (N[M] === 0) {
      i.enableVertexAttribArray(M);
      N[M] = 1;
    }
    if (H[M] !== D) {
      i.vertexAttribDivisor(M, D);
      H[M] = D;
    }
  }
  function b() {
    const M = s.newAttributes;
    const D = s.enabledAttributes;
    for (let O = 0, N = D.length; O < N; O++) {
      if (D[O] !== M[O]) {
        i.disableVertexAttribArray(O);
        D[O] = 0;
      }
    }
  }
  function y(M, D, O, N, H, q, V) {
    if (V === true) {
      i.vertexAttribIPointer(M, D, O, H, q);
    } else {
      i.vertexAttribPointer(M, D, O, N, H, q);
    }
  }
  function T(M, D, O, N) {
    _();
    const H = N.attributes;
    const q = O.getAttributes();
    const V = D.defaultAttributeValues;
    for (const W in q) {
      const Z = q[W];
      if (Z.location >= 0) {
        let ue = H[W];
        if (ue === undefined) {
          if (W === "instanceMatrix" && M.instanceMatrix) {
            ue = M.instanceMatrix;
          }
          if (W === "instanceColor" && M.instanceColor) {
            ue = M.instanceColor;
          }
        }
        if (ue !== undefined) {
          const ae = ue.normalized;
          const he = ue.itemSize;
          const Ue = e.get(ue);
          if (Ue === undefined) {
            continue;
          }
          const Le = Ue.buffer;
          const rt = Ue.type;
          const nt = Ue.bytesPerElement;
          const Y = rt === i.INT || rt === i.UNSIGNED_INT || ue.gpuType === 1013;
          if (ue.isInterleavedBufferAttribute) {
            const j = ue.data;
            const pe = j.stride;
            const we = ue.offset;
            if (j.isInstancedInterleavedBuffer) {
              for (let _e = 0; _e < Z.locationSize; _e++) {
                h(Z.location + _e, j.meshPerAttribute);
              }
              if (M.isInstancedMesh !== true && N._maxInstanceCount === undefined) {
                N._maxInstanceCount = j.meshPerAttribute * j.count;
              }
            } else {
              for (let _e = 0; _e < Z.locationSize; _e++) {
                m(Z.location + _e);
              }
            }
            i.bindBuffer(i.ARRAY_BUFFER, Le);
            for (let _e = 0; _e < Z.locationSize; _e++) {
              y(Z.location + _e, he / Z.locationSize, rt, ae, pe * nt, (we + he / Z.locationSize * _e) * nt, Y);
            }
          } else {
            if (ue.isInstancedBufferAttribute) {
              for (let j = 0; j < Z.locationSize; j++) {
                h(Z.location + j, ue.meshPerAttribute);
              }
              if (M.isInstancedMesh !== true && N._maxInstanceCount === undefined) {
                N._maxInstanceCount = ue.meshPerAttribute * ue.count;
              }
            } else {
              for (let j = 0; j < Z.locationSize; j++) {
                m(Z.location + j);
              }
            }
            i.bindBuffer(i.ARRAY_BUFFER, Le);
            for (let j = 0; j < Z.locationSize; j++) {
              y(Z.location + j, he / Z.locationSize, rt, ae, he * nt, he / Z.locationSize * j * nt, Y);
            }
          }
        } else if (V !== undefined) {
          const ae = V[W];
          if (ae !== undefined) {
            switch (ae.length) {
              case 2:
                i.vertexAttrib2fv(Z.location, ae);
                break;
              case 3:
                i.vertexAttrib3fv(Z.location, ae);
                break;
              case 4:
                i.vertexAttrib4fv(Z.location, ae);
                break;
              default:
                i.vertexAttrib1fv(Z.location, ae);
            }
          }
        }
      }
    }
    b();
  }
  function A() {
    U();
    for (const M in n) {
      const D = n[M];
      for (const O in D) {
        const N = D[O];
        for (const H in N) {
          u(N[H].object);
          delete N[H];
        }
        delete D[O];
      }
      delete n[M];
    }
  }
  function R(M) {
    if (n[M.id] === undefined) {
      return;
    }
    const D = n[M.id];
    for (const O in D) {
      const N = D[O];
      for (const H in N) {
        u(N[H].object);
        delete N[H];
      }
      delete D[O];
    }
    delete n[M.id];
  }
  function w(M) {
    for (const D in n) {
      const O = n[D];
      if (O[M.id] === undefined) {
        continue;
      }
      const N = O[M.id];
      for (const H in N) {
        u(N[H].object);
        delete N[H];
      }
      delete O[M.id];
    }
  }
  function U() {
    v();
    o = true;
    if (s !== r) {
      s = r;
      l(s.object);
    }
  }
  function v() {
    r.geometry = null;
    r.program = null;
    r.wireframe = false;
  }
  return {
    setup: a,
    reset: U,
    resetDefaultState: v,
    dispose: A,
    releaseStatesOfGeometry: R,
    releaseStatesOfProgram: w,
    initAttributes: _,
    enableAttribute: m,
    disableUnusedAttributes: b
  };
}
function eu(i, e, t) {
  let n;
  function r(l) {
    n = l;
  }
  function s(l, u) {
    i.drawArrays(n, l, u);
    t.update(u, n, 1);
  }
  function o(l, u, f) {
    if (f !== 0) {
      i.drawArraysInstanced(n, l, u, f);
      t.update(u, n, f);
    }
  }
  function a(l, u, f) {
    if (f === 0) {
      return;
    }
    e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n, l, 0, u, 0, f);
    let p = 0;
    for (let x = 0; x < f; x++) {
      p += u[x];
    }
    t.update(p, n, 1);
  }
  function c(l, u, f, d) {
    if (f === 0) {
      return;
    }
    const p = e.get("WEBGL_multi_draw");
    if (p === null) {
      for (let x = 0; x < l.length; x++) {
        o(l[x], u[x], d[x]);
      }
    } else {
      p.multiDrawArraysInstancedWEBGL(n, l, 0, u, 0, d, 0, f);
      let x = 0;
      for (let _ = 0; _ < f; _++) {
        x += u[_] * d[_];
      }
      t.update(x, n, 1);
    }
  }
  this.setMode = r;
  this.render = s;
  this.renderInstances = o;
  this.renderMultiDraw = a;
  this.renderMultiDrawInstances = c;
}
function tu(i, e, t, n) {
  let r;
  function s() {
    if (r !== undefined) {
      return r;
    }
    if (e.has("EXT_texture_filter_anisotropic") === true) {
      const w = e.get("EXT_texture_filter_anisotropic");
      r = i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else {
      r = 0;
    }
    return r;
  }
  function o(w) {
    return w === 1023 || n.convert(w) === i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT);
  }
  function a(w) {
    const U = w === 1016 && (e.has("EXT_color_buffer_half_float") || e.has("EXT_color_buffer_float"));
    return w === 1009 || n.convert(w) === i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE) || w === 1015 || !!U;
  }
  function c(w) {
    if (w === "highp") {
      if (i.getShaderPrecisionFormat(i.VERTEX_SHADER, i.HIGH_FLOAT).precision > 0 && i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.HIGH_FLOAT).precision > 0) {
        return "highp";
      }
      w = "mediump";
    }
    if (w === "mediump" && i.getShaderPrecisionFormat(i.VERTEX_SHADER, i.MEDIUM_FLOAT).precision > 0 && i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.MEDIUM_FLOAT).precision > 0) {
      return "mediump";
    } else {
      return "lowp";
    }
  }
  let l = t.precision !== undefined ? t.precision : "highp";
  const u = c(l);
  if (u !== l) {
    Ce("WebGLRenderer:", l, "not supported, using", u, "instead.");
    l = u;
  }
  const f = t.logarithmicDepthBuffer === true;
  const d = t.reversedDepthBuffer === true && e.has("EXT_clip_control");
  const p = i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS);
  const x = i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS);
  const _ = i.getParameter(i.MAX_TEXTURE_SIZE);
  const m = i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE);
  const h = i.getParameter(i.MAX_VERTEX_ATTRIBS);
  const b = i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS);
  const y = i.getParameter(i.MAX_VARYING_VECTORS);
  const T = i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS);
  const A = i.getParameter(i.MAX_SAMPLES);
  const R = i.getParameter(i.SAMPLES);
  return {
    isWebGL2: true,
    getMaxAnisotropy: s,
    getMaxPrecision: c,
    textureFormatReadable: o,
    textureTypeReadable: a,
    precision: l,
    logarithmicDepthBuffer: f,
    reversedDepthBuffer: d,
    maxTextures: p,
    maxVertexTextures: x,
    maxTextureSize: _,
    maxCubemapSize: m,
    maxAttributes: h,
    maxVertexUniforms: b,
    maxVaryings: y,
    maxFragmentUniforms: T,
    maxSamples: A,
    samples: R
  };
}
function nu(i) {
  const e = this;
  let t = null;
  let n = 0;
  let r = false;
  let s = false;
  const o = new gn();
  const a = new Pe();
  const c = {
    value: null,
    needsUpdate: false
  };
  this.uniform = c;
  this.numPlanes = 0;
  this.numIntersection = 0;
  this.init = function (f, d) {
    const p = f.length !== 0 || d || n !== 0 || r;
    r = d;
    n = f.length;
    return p;
  };
  this.beginShadows = function () {
    s = true;
    u(null);
  };
  this.endShadows = function () {
    s = false;
  };
  this.setGlobalState = function (f, d) {
    t = u(f, d, 0);
  };
  this.setState = function (f, d, p) {
    const x = f.clippingPlanes;
    const _ = f.clipIntersection;
    const m = f.clipShadows;
    const h = i.get(f);
    if (!r || x === null || x.length === 0 || s && !m) {
      if (s) {
        u(null);
      } else {
        l();
      }
    } else {
      const b = s ? 0 : n;
      const y = b * 4;
      let T = h.clippingState || null;
      c.value = T;
      T = u(x, d, y, p);
      for (let A = 0; A !== y; ++A) {
        T[A] = t[A];
      }
      h.clippingState = T;
      this.numIntersection = _ ? this.numPlanes : 0;
      this.numPlanes += b;
    }
  };
  function l() {
    if (c.value !== t) {
      c.value = t;
      c.needsUpdate = n > 0;
    }
    e.numPlanes = n;
    e.numIntersection = 0;
  }
  function u(f, d, p, x) {
    const _ = f !== null ? f.length : 0;
    let m = null;
    if (_ !== 0) {
      m = c.value;
      if (x !== true || m === null) {
        const h = p + _ * 4;
        const b = d.matrixWorldInverse;
        a.getNormalMatrix(b);
        if (m === null || m.length < h) {
          m = new Float32Array(h);
        }
        for (let y = 0, T = p; y !== _; ++y, T += 4) {
          o.copy(f[y]).applyMatrix4(b, a);
          o.normal.toArray(m, T);
          m[T + 3] = o.constant;
        }
      }
      c.value = m;
      c.needsUpdate = true;
    }
    e.numPlanes = _;
    e.numIntersection = 0;
    return m;
  }
}
function iu(i) {
  let e = new WeakMap();
  function t(o, a) {
    if (a === 303) {
      o.mapping = 301;
    } else if (a === 304) {
      o.mapping = 302;
    }
    return o;
  }
  function n(o) {
    if (o && o.isTexture) {
      const a = o.mapping;
      if (a === 303 || a === 304) {
        if (e.has(o)) {
          const c = e.get(o).texture;
          return t(c, o.mapping);
        } else {
          const c = o.image;
          if (c && c.height > 0) {
            const l = new Js(c.height);
            l.fromEquirectangularTexture(i, o);
            e.set(o, l);
            o.addEventListener("dispose", r);
            return t(l.texture, o.mapping);
          } else {
            return null;
          }
        }
      }
    }
    return o;
  }
  function r(o) {
    const a = o.target;
    a.removeEventListener("dispose", r);
    const c = e.get(a);
    if (c !== undefined) {
      e.delete(a);
      c.dispose();
    }
  }
  function s() {
    e = new WeakMap();
  }
  return {
    get: n,
    dispose: s
  };
}
const on = 4;
const ds = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582];
const _n = 20;
const ru = 256;
const Zn = new Pr();
const ps = new We();
let _r = null;
let xr = 0;
let vr = 0;
let Sr = false;
const su = new B();
class ms {
  constructor(e) {
    this._renderer = e;
    this._pingPongRenderTarget = null;
    this._lodMax = 0;
    this._cubeSize = 0;
    this._sizeLods = [];
    this._sigmas = [];
    this._lodMeshes = [];
    this._backgroundBox = null;
    this._cubemapMaterial = null;
    this._equirectMaterial = null;
    this._blurMaterial = null;
    this._ggxMaterial = null;
  }
  fromScene(e, t = 0, n = 0.1, r = 100, s = {}) {
    const {
      size: o = 256,
      position: a = su
    } = s;
    _r = this._renderer.getRenderTarget();
    xr = this._renderer.getActiveCubeFace();
    vr = this._renderer.getActiveMipmapLevel();
    Sr = this._renderer.xr.enabled;
    this._renderer.xr.enabled = false;
    this._setSize(o);
    const c = this._allocateTargets();
    c.depthBuffer = true;
    this._sceneToCubeUV(e, n, r, c, a);
    if (t > 0) {
      this._blur(c, 0, 0, t);
    }
    this._applyPMREM(c);
    this._cleanup(c);
    return c;
  }
  fromEquirectangular(e, t = null) {
    return this._fromTexture(e, t);
  }
  fromCubemap(e, t = null) {
    return this._fromTexture(e, t);
  }
  compileCubemapShader() {
    if (this._cubemapMaterial === null) {
      this._cubemapMaterial = xs();
      this._compileMaterial(this._cubemapMaterial);
    }
  }
  compileEquirectangularShader() {
    if (this._equirectMaterial === null) {
      this._equirectMaterial = _s();
      this._compileMaterial(this._equirectMaterial);
    }
  }
  dispose() {
    this._dispose();
    if (this._cubemapMaterial !== null) {
      this._cubemapMaterial.dispose();
    }
    if (this._equirectMaterial !== null) {
      this._equirectMaterial.dispose();
    }
    if (this._backgroundBox !== null) {
      this._backgroundBox.geometry.dispose();
      this._backgroundBox.material.dispose();
    }
  }
  _setSize(e) {
    this._lodMax = Math.floor(Math.log2(e));
    this._cubeSize = Math.pow(2, this._lodMax);
  }
  _dispose() {
    if (this._blurMaterial !== null) {
      this._blurMaterial.dispose();
    }
    if (this._ggxMaterial !== null) {
      this._ggxMaterial.dispose();
    }
    if (this._pingPongRenderTarget !== null) {
      this._pingPongRenderTarget.dispose();
    }
    for (let e = 0; e < this._lodMeshes.length; e++) {
      this._lodMeshes[e].geometry.dispose();
    }
  }
  _cleanup(e) {
    this._renderer.setRenderTarget(_r, xr, vr);
    this._renderer.xr.enabled = Sr;
    e.scissorTest = false;
    Fn(e, 0, 0, e.width, e.height);
  }
  _fromTexture(e, t) {
    if (e.mapping === 301 || e.mapping === 302) {
      this._setSize(e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width);
    } else {
      this._setSize(e.image.width / 4);
    }
    _r = this._renderer.getRenderTarget();
    xr = this._renderer.getActiveCubeFace();
    vr = this._renderer.getActiveMipmapLevel();
    Sr = this._renderer.xr.enabled;
    this._renderer.xr.enabled = false;
    const n = t || this._allocateTargets();
    this._textureToCubeUV(e, n);
    this._applyPMREM(n);
    this._cleanup(n);
    return n;
  }
  _allocateTargets() {
    const e = Math.max(this._cubeSize, 112) * 3;
    const t = this._cubeSize * 4;
    const n = {
      magFilter: 1006,
      minFilter: 1006,
      generateMipmaps: false,
      type: 1016,
      format: 1023,
      colorSpace: Nn,
      depthBuffer: false
    };
    const r = gs(e, t, n);
    if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== e || this._pingPongRenderTarget.height !== t) {
      if (this._pingPongRenderTarget !== null) {
        this._dispose();
      }
      this._pingPongRenderTarget = gs(e, t, n);
      const {
        _lodMax: s
      } = this;
      ({
        lodMeshes: this._lodMeshes,
        sizeLods: this._sizeLods,
        sigmas: this._sigmas
      } = au(s));
      this._blurMaterial = lu(s, e, t);
      this._ggxMaterial = ou(s, e, t);
    }
    return r;
  }
  _compileMaterial(e) {
    const t = new Ot(new qt(), e);
    this._renderer.compile(t, Zn);
  }
  _sceneToCubeUV(e, t, n, r, s) {
    const c = new Ut(90, 1, t, n);
    const l = [1, -1, 1, 1, 1, 1];
    const u = [1, 1, 1, -1, -1, -1];
    const f = this._renderer;
    const d = f.autoClear;
    const p = f.toneMapping;
    f.getClearColor(ps);
    f.toneMapping = 0;
    f.autoClear = false;
    if (f.state.buffers.depth.getReversed()) {
      f.setRenderTarget(r);
      f.clearDepth();
      f.setRenderTarget(null);
    }
    if (this._backgroundBox === null) {
      this._backgroundBox = new Ot(new li(), new qs({
        name: "PMREM.Background",
        side: 1,
        depthWrite: false,
        depthTest: false
      }));
    }
    const _ = this._backgroundBox;
    const m = _.material;
    let h = false;
    const b = e.background;
    if (b) {
      if (b.isColor) {
        m.color.copy(b);
        e.background = null;
        h = true;
      }
    } else {
      m.color.copy(ps);
      h = true;
    }
    for (let y = 0; y < 6; y++) {
      const T = y % 3;
      if (T === 0) {
        c.up.set(0, l[y], 0);
        c.position.set(s.x, s.y, s.z);
        c.lookAt(s.x + u[y], s.y, s.z);
      } else if (T === 1) {
        c.up.set(0, 0, l[y]);
        c.position.set(s.x, s.y, s.z);
        c.lookAt(s.x, s.y + u[y], s.z);
      } else {
        c.up.set(0, l[y], 0);
        c.position.set(s.x, s.y, s.z);
        c.lookAt(s.x, s.y, s.z + u[y]);
      }
      const A = this._cubeSize;
      Fn(r, T * A, y > 2 ? A : 0, A, A);
      f.setRenderTarget(r);
      if (h) {
        f.render(_, c);
      }
      f.render(e, c);
    }
    f.toneMapping = p;
    f.autoClear = d;
    e.background = b;
  }
  _textureToCubeUV(e, t) {
    const n = this._renderer;
    const r = e.mapping === 301 || e.mapping === 302;
    if (r) {
      if (this._cubemapMaterial === null) {
        this._cubemapMaterial = xs();
      }
      this._cubemapMaterial.uniforms.flipEnvMap.value = e.isRenderTargetTexture === false ? -1 : 1;
    } else if (this._equirectMaterial === null) {
      this._equirectMaterial = _s();
    }
    const s = r ? this._cubemapMaterial : this._equirectMaterial;
    const o = this._lodMeshes[0];
    o.material = s;
    const a = s.uniforms;
    a.envMap.value = e;
    const c = this._cubeSize;
    Fn(t, 0, 0, c * 3, c * 2);
    n.setRenderTarget(t);
    n.render(o, Zn);
  }
  _applyPMREM(e) {
    const t = this._renderer;
    const n = t.autoClear;
    t.autoClear = false;
    const r = this._lodMeshes.length;
    for (let s = 1; s < r; s++) {
      this._applyGGXFilter(e, s - 1, s);
    }
    t.autoClear = n;
  }
  _applyGGXFilter(e, t, n) {
    const r = this._renderer;
    const s = this._pingPongRenderTarget;
    const o = this._ggxMaterial;
    const a = this._lodMeshes[n];
    a.material = o;
    const c = o.uniforms;
    const l = n / (this._lodMeshes.length - 1);
    const u = t / (this._lodMeshes.length - 1);
    const f = Math.sqrt(l * l - u * u);
    const d = 0 + l * 1.25;
    const p = f * d;
    const {
      _lodMax: x
    } = this;
    const _ = this._sizeLods[n];
    const m = _ * 3 * (n > x - on ? n - x + on : 0);
    const h = (this._cubeSize - _) * 4;
    c.envMap.value = e.texture;
    c.roughness.value = p;
    c.mipInt.value = x - t;
    Fn(s, m, h, _ * 3, _ * 2);
    r.setRenderTarget(s);
    r.render(a, Zn);
    c.envMap.value = s.texture;
    c.roughness.value = 0;
    c.mipInt.value = x - n;
    Fn(e, m, h, _ * 3, _ * 2);
    r.setRenderTarget(e);
    r.render(a, Zn);
  }
  _blur(e, t, n, r, s) {
    const o = this._pingPongRenderTarget;
    this._halfBlur(e, o, t, n, r, "latitudinal", s);
    this._halfBlur(o, e, n, n, r, "longitudinal", s);
  }
  _halfBlur(e, t, n, r, s, o, a) {
    const c = this._renderer;
    const l = this._blurMaterial;
    if (o !== "latitudinal" && o !== "longitudinal") {
      He("blur direction must be either latitudinal or longitudinal!");
    }
    const u = 3;
    const f = this._lodMeshes[r];
    f.material = l;
    const d = l.uniforms;
    const p = this._sizeLods[n] - 1;
    const x = isFinite(s) ? Math.PI / (p * 2) : Math.PI * 2 / (_n * 2 - 1);
    const _ = s / x;
    const m = isFinite(s) ? 1 + Math.floor(u * _) : _n;
    if (m > _n) {
      Ce(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${_n}`);
    }
    const h = [];
    let b = 0;
    for (let w = 0; w < _n; ++w) {
      const U = w / _;
      const v = Math.exp(-U * U / 2);
      h.push(v);
      if (w === 0) {
        b += v;
      } else if (w < m) {
        b += v * 2;
      }
    }
    for (let w = 0; w < h.length; w++) {
      h[w] = h[w] / b;
    }
    d.envMap.value = e.texture;
    d.samples.value = m;
    d.weights.value = h;
    d.latitudinal.value = o === "latitudinal";
    if (a) {
      d.poleAxis.value = a;
    }
    const {
      _lodMax: y
    } = this;
    d.dTheta.value = x;
    d.mipInt.value = y - n;
    const T = this._sizeLods[r];
    const A = T * 3 * (r > y - on ? r - y + on : 0);
    const R = (this._cubeSize - T) * 4;
    Fn(t, A, R, T * 3, T * 2);
    c.setRenderTarget(t);
    c.render(f, Zn);
  }
}
function au(i) {
  const e = [];
  const t = [];
  const n = [];
  let r = i;
  const s = i - on + 1 + ds.length;
  for (let o = 0; o < s; o++) {
    const a = Math.pow(2, r);
    e.push(a);
    let c = 1 / a;
    if (o > i - on) {
      c = ds[o - i + on - 1];
    } else if (o === 0) {
      c = 0;
    }
    t.push(c);
    const l = 1 / (a - 2);
    const u = -l;
    const f = 1 + l;
    const d = [u, u, f, u, f, f, u, u, f, f, u, f];
    const p = 6;
    const x = 6;
    const _ = 3;
    const m = 2;
    const h = 1;
    const b = new Float32Array(_ * x * p);
    const y = new Float32Array(m * x * p);
    const T = new Float32Array(h * x * p);
    for (let R = 0; R < p; R++) {
      const w = R % 3 * 2 / 3 - 1;
      const U = R > 2 ? 0 : -1;
      const v = [w, U, 0, w + 2 / 3, U, 0, w + 2 / 3, U + 1, 0, w, U, 0, w + 2 / 3, U + 1, 0, w, U + 1, 0];
      b.set(v, _ * x * R);
      y.set(d, m * x * R);
      const M = [R, R, R, R, R, R];
      T.set(M, h * x * R);
    }
    const A = new qt();
    A.setAttribute("position", new Bt(b, _));
    A.setAttribute("uv", new Bt(y, m));
    A.setAttribute("faceIndex", new Bt(T, h));
    n.push(new Ot(A, null));
    if (r > on) {
      r--;
    }
  }
  return {
    lodMeshes: n,
    sizeLods: e,
    sigmas: t
  };
}
function gs(i, e, t) {
  const n = new Ht(i, e, t);
  n.texture.mapping = 306;
  n.texture.name = "PMREM.cubeUv";
  n.scissorTest = true;
  return n;
}
function Fn(i, e, t, n, r) {
  i.viewport.set(e, t, n, r);
  i.scissor.set(e, t, n, r);
}
function ou(i, e, t) {
  return new Wt({
    name: "PMREMGGXConvolution",
    defines: {
      GGX_SAMPLES: ru,
      CUBEUV_TEXEL_WIDTH: 1 / e,
      CUBEUV_TEXEL_HEIGHT: 1 / t,
      CUBEUV_MAX_MIP: `${i}.0`
    },
    uniforms: {
      envMap: {
        value: null
      },
      roughness: {
        value: 0
      },
      mipInt: {
        value: 0
      }
    },
    vertexShader: Oi(),
    fragmentShader: `

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,
    blending: 0,
    depthTest: false,
    depthWrite: false
  });
}
function lu(i, e, t) {
  const n = new Float32Array(_n);
  const r = new B(0, 1, 0);
  return new Wt({
    name: "SphericalGaussianBlur",
    defines: {
      n: _n,
      CUBEUV_TEXEL_WIDTH: 1 / e,
      CUBEUV_TEXEL_HEIGHT: 1 / t,
      CUBEUV_MAX_MIP: `${i}.0`
    },
    uniforms: {
      envMap: {
        value: null
      },
      samples: {
        value: 1
      },
      weights: {
        value: n
      },
      latitudinal: {
        value: false
      },
      dTheta: {
        value: 0
      },
      mipInt: {
        value: 0
      },
      poleAxis: {
        value: r
      }
    },
    vertexShader: Oi(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,
    blending: 0,
    depthTest: false,
    depthWrite: false
  });
}
function _s() {
  return new Wt({
    name: "EquirectangularToCubeUV",
    uniforms: {
      envMap: {
        value: null
      }
    },
    vertexShader: Oi(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,
    blending: 0,
    depthTest: false,
    depthWrite: false
  });
}
function xs() {
  return new Wt({
    name: "CubemapToCubeUV",
    uniforms: {
      envMap: {
        value: null
      },
      flipEnvMap: {
        value: -1
      }
    },
    vertexShader: Oi(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,
    blending: 0,
    depthTest: false,
    depthWrite: false
  });
}
function Oi() {
  return `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`;
}
function cu(i) {
  let e = new WeakMap();
  let t = null;
  function n(a) {
    if (a && a.isTexture) {
      const c = a.mapping;
      const l = c === 303 || c === 304;
      const u = c === 301 || c === 302;
      if (l || u) {
        let f = e.get(a);
        const d = f !== undefined ? f.texture.pmremVersion : 0;
        if (a.isRenderTargetTexture && a.pmremVersion !== d) {
          if (t === null) {
            t = new ms(i);
          }
          f = l ? t.fromEquirectangular(a, f) : t.fromCubemap(a, f);
          f.texture.pmremVersion = a.pmremVersion;
          e.set(a, f);
          return f.texture;
        }
        if (f !== undefined) {
          return f.texture;
        }
        {
          const p = a.image;
          if (l && p && p.height > 0 || u && p && r(p)) {
            if (t === null) {
              t = new ms(i);
            }
            f = l ? t.fromEquirectangular(a) : t.fromCubemap(a);
            f.texture.pmremVersion = a.pmremVersion;
            e.set(a, f);
            a.addEventListener("dispose", s);
            return f.texture;
          } else {
            return null;
          }
        }
      }
    }
    return a;
  }
  function r(a) {
    let c = 0;
    const l = 6;
    for (let u = 0; u < l; u++) {
      if (a[u] !== undefined) {
        c++;
      }
    }
    return c === l;
  }
  function s(a) {
    const c = a.target;
    c.removeEventListener("dispose", s);
    const l = e.get(c);
    if (l !== undefined) {
      e.delete(c);
      l.dispose();
    }
  }
  function o() {
    e = new WeakMap();
    if (t !== null) {
      t.dispose();
      t = null;
    }
  }
  return {
    get: n,
    dispose: o
  };
}
function uu(i) {
  const e = {};
  function t(n) {
    if (e[n] !== undefined) {
      return e[n];
    }
    const r = i.getExtension(n);
    e[n] = r;
    return r;
  }
  return {
    has: function (n) {
      return t(n) !== null;
    },
    init: function () {
      t("EXT_color_buffer_float");
      t("WEBGL_clip_cull_distance");
      t("OES_texture_float_linear");
      t("EXT_color_buffer_half_float");
      t("WEBGL_multisampled_render_to_texture");
      t("WEBGL_render_shared_exponent");
    },
    get: function (n) {
      const r = t(n);
      if (r === null) {
        Qn("WebGLRenderer: " + n + " extension not supported.");
      }
      return r;
    }
  };
}
function hu(i, e, t, n) {
  const r = {};
  const s = new WeakMap();
  function o(f) {
    const d = f.target;
    if (d.index !== null) {
      e.remove(d.index);
    }
    for (const x in d.attributes) {
      e.remove(d.attributes[x]);
    }
    d.removeEventListener("dispose", o);
    delete r[d.id];
    const p = s.get(d);
    if (p) {
      e.remove(p);
      s.delete(d);
    }
    n.releaseStatesOfGeometry(d);
    if (d.isInstancedBufferGeometry === true) {
      delete d._maxInstanceCount;
    }
    t.memory.geometries--;
  }
  function a(f, d) {
    if (r[d.id] !== true) {
      d.addEventListener("dispose", o);
      r[d.id] = true;
      t.memory.geometries++;
    }
    return d;
  }
  function c(f) {
    const d = f.attributes;
    for (const p in d) {
      e.update(d[p], i.ARRAY_BUFFER);
    }
  }
  function l(f) {
    const d = [];
    const p = f.index;
    const x = f.attributes.position;
    let _ = 0;
    if (p !== null) {
      const b = p.array;
      _ = p.version;
      for (let y = 0, T = b.length; y < T; y += 3) {
        const A = b[y + 0];
        const R = b[y + 1];
        const w = b[y + 2];
        d.push(A, R, R, w, w, A);
      }
    } else if (x !== undefined) {
      const b = x.array;
      _ = x.version;
      for (let y = 0, T = b.length / 3 - 1; y < T; y += 3) {
        const A = y + 0;
        const R = y + 1;
        const w = y + 2;
        d.push(A, R, R, w, w, A);
      }
    } else {
      return;
    }
    const m = new (Hs(d) ? $s : Ys)(d, 1);
    m.version = _;
    const h = s.get(f);
    if (h) {
      e.remove(h);
    }
    s.set(f, m);
  }
  function u(f) {
    const d = s.get(f);
    if (d) {
      const p = f.index;
      if (p !== null && d.version < p.version) {
        l(f);
      }
    } else {
      l(f);
    }
    return s.get(f);
  }
  return {
    get: a,
    update: c,
    getWireframeAttribute: u
  };
}
function fu(i, e, t) {
  let n;
  function r(d) {
    n = d;
  }
  let s;
  let o;
  function a(d) {
    s = d.type;
    o = d.bytesPerElement;
  }
  function c(d, p) {
    i.drawElements(n, p, s, d * o);
    t.update(p, n, 1);
  }
  function l(d, p, x) {
    if (x !== 0) {
      i.drawElementsInstanced(n, p, s, d * o, x);
      t.update(p, n, x);
    }
  }
  function u(d, p, x) {
    if (x === 0) {
      return;
    }
    e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n, p, 0, s, d, 0, x);
    let m = 0;
    for (let h = 0; h < x; h++) {
      m += p[h];
    }
    t.update(m, n, 1);
  }
  function f(d, p, x, _) {
    if (x === 0) {
      return;
    }
    const m = e.get("WEBGL_multi_draw");
    if (m === null) {
      for (let h = 0; h < d.length; h++) {
        l(d[h] / o, p[h], _[h]);
      }
    } else {
      m.multiDrawElementsInstancedWEBGL(n, p, 0, s, d, 0, _, 0, x);
      let h = 0;
      for (let b = 0; b < x; b++) {
        h += p[b] * _[b];
      }
      t.update(h, n, 1);
    }
  }
  this.setMode = r;
  this.setIndex = a;
  this.render = c;
  this.renderInstances = l;
  this.renderMultiDraw = u;
  this.renderMultiDrawInstances = f;
}
function du(i) {
  const e = {
    geometries: 0,
    textures: 0
  };
  const t = {
    frame: 0,
    calls: 0,
    triangles: 0,
    points: 0,
    lines: 0
  };
  function n(s, o, a) {
    t.calls++;
    switch (o) {
      case i.TRIANGLES:
        t.triangles += a * (s / 3);
        break;
      case i.LINES:
        t.lines += a * (s / 2);
        break;
      case i.LINE_STRIP:
        t.lines += a * (s - 1);
        break;
      case i.LINE_LOOP:
        t.lines += a * s;
        break;
      case i.POINTS:
        t.points += a * s;
        break;
      default:
        He("WebGLInfo: Unknown draw mode:", o);
        break;
    }
  }
  function r() {
    t.calls = 0;
    t.triangles = 0;
    t.points = 0;
    t.lines = 0;
  }
  return {
    memory: e,
    render: t,
    programs: null,
    autoReset: true,
    reset: r,
    update: n
  };
}
function pu(i, e, t) {
  const n = new WeakMap();
  const r = new ot();
  function s(o, a, c) {
    const l = o.morphTargetInfluences;
    const u = a.morphAttributes.position || a.morphAttributes.normal || a.morphAttributes.color;
    const f = u !== undefined ? u.length : 0;
    let d = n.get(a);
    if (d === undefined || d.count !== f) {
      let v = function () {
        w.dispose();
        n.delete(a);
        a.removeEventListener("dispose", v);
      };
      if (d !== undefined) {
        d.texture.dispose();
      }
      const p = a.morphAttributes.position !== undefined;
      const x = a.morphAttributes.normal !== undefined;
      const _ = a.morphAttributes.color !== undefined;
      const m = a.morphAttributes.position || [];
      const h = a.morphAttributes.normal || [];
      const b = a.morphAttributes.color || [];
      let y = 0;
      if (p === true) {
        y = 1;
      }
      if (x === true) {
        y = 2;
      }
      if (_ === true) {
        y = 3;
      }
      let T = a.attributes.position.count * y;
      let A = 1;
      if (T > e.maxTextureSize) {
        A = Math.ceil(T / e.maxTextureSize);
        T = e.maxTextureSize;
      }
      const R = new Float32Array(T * A * 4 * f);
      const w = new ks(R, T, A, f);
      w.type = 1015;
      w.needsUpdate = true;
      const U = y * 4;
      for (let M = 0; M < f; M++) {
        const D = m[M];
        const O = h[M];
        const N = b[M];
        const H = T * A * 4 * M;
        for (let q = 0; q < D.count; q++) {
          const V = q * U;
          if (p === true) {
            r.fromBufferAttribute(D, q);
            R[H + V + 0] = r.x;
            R[H + V + 1] = r.y;
            R[H + V + 2] = r.z;
            R[H + V + 3] = 0;
          }
          if (x === true) {
            r.fromBufferAttribute(O, q);
            R[H + V + 4] = r.x;
            R[H + V + 5] = r.y;
            R[H + V + 6] = r.z;
            R[H + V + 7] = 0;
          }
          if (_ === true) {
            r.fromBufferAttribute(N, q);
            R[H + V + 8] = r.x;
            R[H + V + 9] = r.y;
            R[H + V + 10] = r.z;
            R[H + V + 11] = N.itemSize === 4 ? r.w : 1;
          }
        }
      }
      d = {
        count: f,
        texture: w,
        size: new ke(T, A)
      };
      n.set(a, d);
      a.addEventListener("dispose", v);
    }
    if (o.isInstancedMesh === true && o.morphTexture !== null) {
      c.getUniforms().setValue(i, "morphTexture", o.morphTexture, t);
    } else {
      let p = 0;
      for (let _ = 0; _ < l.length; _++) {
        p += l[_];
      }
      const x = a.morphTargetsRelative ? 1 : 1 - p;
      c.getUniforms().setValue(i, "morphTargetBaseInfluence", x);
      c.getUniforms().setValue(i, "morphTargetInfluences", l);
    }
    c.getUniforms().setValue(i, "morphTargetsTexture", d.texture, t);
    c.getUniforms().setValue(i, "morphTargetsTextureSize", d.size);
  }
  return {
    update: s
  };
}
function mu(i, e, t, n) {
  let r = new WeakMap();
  function s(c) {
    const l = n.render.frame;
    const u = c.geometry;
    const f = e.get(c, u);
    if (r.get(f) !== l) {
      e.update(f);
      r.set(f, l);
    }
    if (c.isInstancedMesh) {
      if (c.hasEventListener("dispose", a) === false) {
        c.addEventListener("dispose", a);
      }
      if (r.get(c) !== l) {
        t.update(c.instanceMatrix, i.ARRAY_BUFFER);
        if (c.instanceColor !== null) {
          t.update(c.instanceColor, i.ARRAY_BUFFER);
        }
        r.set(c, l);
      }
    }
    if (c.isSkinnedMesh) {
      const d = c.skeleton;
      if (r.get(d) !== l) {
        d.update();
        r.set(d, l);
      }
    }
    return f;
  }
  function o() {
    r = new WeakMap();
  }
  function a(c) {
    const l = c.target;
    l.removeEventListener("dispose", a);
    t.remove(l.instanceMatrix);
    if (l.instanceColor !== null) {
      t.remove(l.instanceColor);
    }
  }
  return {
    update: s,
    dispose: o
  };
}
const gu = {
  1: "LINEAR_TONE_MAPPING",
  2: "REINHARD_TONE_MAPPING",
  3: "CINEON_TONE_MAPPING",
  4: "ACES_FILMIC_TONE_MAPPING",
  6: "AGX_TONE_MAPPING",
  7: "NEUTRAL_TONE_MAPPING",
  5: "CUSTOM_TONE_MAPPING"
};
function _u(i, e, t, n, r) {
  const s = new Ht(e, t, {
    type: i,
    depthBuffer: n,
    stencilBuffer: r
  });
  const o = new Ht(e, t, {
    type: 1016,
    depthBuffer: false,
    stencilBuffer: false
  });
  const a = new qt();
  a.setAttribute("position", new Dt([-1, 3, 0, -1, -1, 0, 3, -1, 0], 3));
  a.setAttribute("uv", new Dt([0, 2, 0, 0, 2, 0], 2));
  const c = new co({
    uniforms: {
      tDiffuse: {
        value: null
      }
    },
    vertexShader: `
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,
    fragmentShader: `
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,
    depthTest: false,
    depthWrite: false
  });
  const l = new Ot(a, c);
  const u = new Pr(-1, 1, 1, -1, 0, 1);
  let f = null;
  let d = null;
  let p = false;
  let x;
  let _ = null;
  let m = [];
  let h = false;
  this.setSize = function (b, y) {
    s.setSize(b, y);
    o.setSize(b, y);
    for (let T = 0; T < m.length; T++) {
      const A = m[T];
      if (A.setSize) {
        A.setSize(b, y);
      }
    }
  };
  this.setEffects = function (b) {
    m = b;
    h = m.length > 0 && m[0].isRenderPass === true;
    const y = s.width;
    const T = s.height;
    for (let A = 0; A < m.length; A++) {
      const R = m[A];
      if (R.setSize) {
        R.setSize(y, T);
      }
    }
  };
  this.begin = function (b, y) {
    if (p || b.toneMapping === 0 && m.length === 0) {
      return false;
    }
    _ = y;
    if (y !== null) {
      const T = y.width;
      const A = y.height;
      if (s.width !== T || s.height !== A) {
        this.setSize(T, A);
      }
    }
    if (h === false) {
      b.setRenderTarget(s);
    }
    x = b.toneMapping;
    b.toneMapping = 0;
    return true;
  };
  this.hasRenderPass = function () {
    return h;
  };
  this.end = function (b, y) {
    b.toneMapping = x;
    p = true;
    let T = s;
    let A = o;
    for (let R = 0; R < m.length; R++) {
      const w = m[R];
      if (w.enabled !== false && (w.render(b, A, T, y), w.needsSwap !== false)) {
        const U = T;
        T = A;
        A = U;
      }
    }
    if (f !== b.outputColorSpace || d !== b.toneMapping) {
      f = b.outputColorSpace;
      d = b.toneMapping;
      c.defines = {};
      if (Ge.getTransfer(f) === Ke) {
        c.defines.SRGB_TRANSFER = "";
      }
      const R = gu[d];
      if (R) {
        c.defines[R] = "";
      }
      c.needsUpdate = true;
    }
    c.uniforms.tDiffuse.value = T.texture;
    b.setRenderTarget(_);
    b.render(l, u);
    _ = null;
    p = false;
  };
  this.isCompositing = function () {
    return p;
  };
  this.dispose = function () {
    s.dispose();
    o.dispose();
    a.dispose();
    c.dispose();
  };
}
const ra = new _t();
const yr = new ei(1, 1);
const sa = new ks();
const aa = new Ga();
const oa = new js();
const vs = [];
const Ss = [];
const Ms = new Float32Array(16);
const Es = new Float32Array(9);
const Ts = new Float32Array(4);
function Vn(i, e, t) {
  const n = i[0];
  if (n <= 0 || n > 0) {
    return i;
  }
  const r = e * t;
  let s = vs[r];
  if (s === undefined) {
    s = new Float32Array(r);
    vs[r] = s;
  }
  if (e !== 0) {
    n.toArray(s, 0);
    for (let o = 1, a = 0; o !== e; ++o) {
      a += t;
      i[o].toArray(s, a);
    }
  }
  return s;
}
function ht(i, e) {
  if (i.length !== e.length) {
    return false;
  }
  for (let t = 0, n = i.length; t < n; t++) {
    if (i[t] !== e[t]) {
      return false;
    }
  }
  return true;
}
function ft(i, e) {
  for (let t = 0, n = e.length; t < n; t++) {
    i[t] = e[t];
  }
}
function Gi(i, e) {
  let t = Ss[e];
  if (t === undefined) {
    t = new Int32Array(e);
    Ss[e] = t;
  }
  for (let n = 0; n !== e; ++n) {
    t[n] = i.allocateTextureUnit();
  }
  return t;
}
function xu(i, e) {
  const t = this.cache;
  if (t[0] !== e) {
    i.uniform1f(this.addr, e);
    t[0] = e;
  }
}
function vu(i, e) {
  const t = this.cache;
  if (e.x !== undefined) {
    if (t[0] !== e.x || t[1] !== e.y) {
      i.uniform2f(this.addr, e.x, e.y);
      t[0] = e.x;
      t[1] = e.y;
    }
  } else {
    if (ht(t, e)) {
      return;
    }
    i.uniform2fv(this.addr, e);
    ft(t, e);
  }
}
function Su(i, e) {
  const t = this.cache;
  if (e.x !== undefined) {
    if (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) {
      i.uniform3f(this.addr, e.x, e.y, e.z);
      t[0] = e.x;
      t[1] = e.y;
      t[2] = e.z;
    }
  } else if (e.r !== undefined) {
    if (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) {
      i.uniform3f(this.addr, e.r, e.g, e.b);
      t[0] = e.r;
      t[1] = e.g;
      t[2] = e.b;
    }
  } else {
    if (ht(t, e)) {
      return;
    }
    i.uniform3fv(this.addr, e);
    ft(t, e);
  }
}
function Mu(i, e) {
  const t = this.cache;
  if (e.x !== undefined) {
    if (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) {
      i.uniform4f(this.addr, e.x, e.y, e.z, e.w);
      t[0] = e.x;
      t[1] = e.y;
      t[2] = e.z;
      t[3] = e.w;
    }
  } else {
    if (ht(t, e)) {
      return;
    }
    i.uniform4fv(this.addr, e);
    ft(t, e);
  }
}
function Eu(i, e) {
  const t = this.cache;
  const n = e.elements;
  if (n === undefined) {
    if (ht(t, e)) {
      return;
    }
    i.uniformMatrix2fv(this.addr, false, e);
    ft(t, e);
  } else {
    if (ht(t, n)) {
      return;
    }
    Ts.set(n);
    i.uniformMatrix2fv(this.addr, false, Ts);
    ft(t, n);
  }
}
function Tu(i, e) {
  const t = this.cache;
  const n = e.elements;
  if (n === undefined) {
    if (ht(t, e)) {
      return;
    }
    i.uniformMatrix3fv(this.addr, false, e);
    ft(t, e);
  } else {
    if (ht(t, n)) {
      return;
    }
    Es.set(n);
    i.uniformMatrix3fv(this.addr, false, Es);
    ft(t, n);
  }
}
function yu(i, e) {
  const t = this.cache;
  const n = e.elements;
  if (n === undefined) {
    if (ht(t, e)) {
      return;
    }
    i.uniformMatrix4fv(this.addr, false, e);
    ft(t, e);
  } else {
    if (ht(t, n)) {
      return;
    }
    Ms.set(n);
    i.uniformMatrix4fv(this.addr, false, Ms);
    ft(t, n);
  }
}
function bu(i, e) {
  const t = this.cache;
  if (t[0] !== e) {
    i.uniform1i(this.addr, e);
    t[0] = e;
  }
}
function Au(i, e) {
  const t = this.cache;
  if (e.x !== undefined) {
    if (t[0] !== e.x || t[1] !== e.y) {
      i.uniform2i(this.addr, e.x, e.y);
      t[0] = e.x;
      t[1] = e.y;
    }
  } else {
    if (ht(t, e)) {
      return;
    }
    i.uniform2iv(this.addr, e);
    ft(t, e);
  }
}
function Ru(i, e) {
  const t = this.cache;
  if (e.x !== undefined) {
    if (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) {
      i.uniform3i(this.addr, e.x, e.y, e.z);
      t[0] = e.x;
      t[1] = e.y;
      t[2] = e.z;
    }
  } else {
    if (ht(t, e)) {
      return;
    }
    i.uniform3iv(this.addr, e);
    ft(t, e);
  }
}
function Cu(i, e) {
  const t = this.cache;
  if (e.x !== undefined) {
    if (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) {
      i.uniform4i(this.addr, e.x, e.y, e.z, e.w);
      t[0] = e.x;
      t[1] = e.y;
      t[2] = e.z;
      t[3] = e.w;
    }
  } else {
    if (ht(t, e)) {
      return;
    }
    i.uniform4iv(this.addr, e);
    ft(t, e);
  }
}
function wu(i, e) {
  const t = this.cache;
  if (t[0] !== e) {
    i.uniform1ui(this.addr, e);
    t[0] = e;
  }
}
function Pu(i, e) {
  const t = this.cache;
  if (e.x !== undefined) {
    if (t[0] !== e.x || t[1] !== e.y) {
      i.uniform2ui(this.addr, e.x, e.y);
      t[0] = e.x;
      t[1] = e.y;
    }
  } else {
    if (ht(t, e)) {
      return;
    }
    i.uniform2uiv(this.addr, e);
    ft(t, e);
  }
}
function Du(i, e) {
  const t = this.cache;
  if (e.x !== undefined) {
    if (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) {
      i.uniform3ui(this.addr, e.x, e.y, e.z);
      t[0] = e.x;
      t[1] = e.y;
      t[2] = e.z;
    }
  } else {
    if (ht(t, e)) {
      return;
    }
    i.uniform3uiv(this.addr, e);
    ft(t, e);
  }
}
function Lu(i, e) {
  const t = this.cache;
  if (e.x !== undefined) {
    if (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) {
      i.uniform4ui(this.addr, e.x, e.y, e.z, e.w);
      t[0] = e.x;
      t[1] = e.y;
      t[2] = e.z;
      t[3] = e.w;
    }
  } else {
    if (ht(t, e)) {
      return;
    }
    i.uniform4uiv(this.addr, e);
    ft(t, e);
  }
}
function Fu(i, e, t) {
  const n = this.cache;
  const r = t.allocateTextureUnit();
  if (n[0] !== r) {
    i.uniform1i(this.addr, r);
    n[0] = r;
  }
  let s;
  if (this.type === i.SAMPLER_2D_SHADOW) {
    yr.compareFunction = t.isReversedDepthBuffer() ? 518 : 515;
    s = yr;
  } else {
    s = ra;
  }
  t.setTexture2D(e || s, r);
}
function Iu(i, e, t) {
  const n = this.cache;
  const r = t.allocateTextureUnit();
  if (n[0] !== r) {
    i.uniform1i(this.addr, r);
    n[0] = r;
  }
  t.setTexture3D(e || aa, r);
}
function Uu(i, e, t) {
  const n = this.cache;
  const r = t.allocateTextureUnit();
  if (n[0] !== r) {
    i.uniform1i(this.addr, r);
    n[0] = r;
  }
  t.setTextureCube(e || oa, r);
}
function Nu(i, e, t) {
  const n = this.cache;
  const r = t.allocateTextureUnit();
  if (n[0] !== r) {
    i.uniform1i(this.addr, r);
    n[0] = r;
  }
  t.setTexture2DArray(e || sa, r);
}
function Bu(i) {
  switch (i) {
    case 5126:
      return xu;
    case 35664:
      return vu;
    case 35665:
      return Su;
    case 35666:
      return Mu;
    case 35674:
      return Eu;
    case 35675:
      return Tu;
    case 35676:
      return yu;
    case 5124:
    case 35670:
      return bu;
    case 35667:
    case 35671:
      return Au;
    case 35668:
    case 35672:
      return Ru;
    case 35669:
    case 35673:
      return Cu;
    case 5125:
      return wu;
    case 36294:
      return Pu;
    case 36295:
      return Du;
    case 36296:
      return Lu;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return Fu;
    case 35679:
    case 36299:
    case 36307:
      return Iu;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return Uu;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return Nu;
  }
}
function Ou(i, e) {
  i.uniform1fv(this.addr, e);
}
function Gu(i, e) {
  const t = Vn(e, this.size, 2);
  i.uniform2fv(this.addr, t);
}
function zu(i, e) {
  const t = Vn(e, this.size, 3);
  i.uniform3fv(this.addr, t);
}
function Vu(i, e) {
  const t = Vn(e, this.size, 4);
  i.uniform4fv(this.addr, t);
}
function Hu(i, e) {
  const t = Vn(e, this.size, 4);
  i.uniformMatrix2fv(this.addr, false, t);
}
function ku(i, e) {
  const t = Vn(e, this.size, 9);
  i.uniformMatrix3fv(this.addr, false, t);
}
function Wu(i, e) {
  const t = Vn(e, this.size, 16);
  i.uniformMatrix4fv(this.addr, false, t);
}
function Xu(i, e) {
  i.uniform1iv(this.addr, e);
}
function qu(i, e) {
  i.uniform2iv(this.addr, e);
}
function Yu(i, e) {
  i.uniform3iv(this.addr, e);
}
function $u(i, e) {
  i.uniform4iv(this.addr, e);
}
function Ku(i, e) {
  i.uniform1uiv(this.addr, e);
}
function Zu(i, e) {
  i.uniform2uiv(this.addr, e);
}
function ju(i, e) {
  i.uniform3uiv(this.addr, e);
}
function Ju(i, e) {
  i.uniform4uiv(this.addr, e);
}
function Qu(i, e, t) {
  const n = this.cache;
  const r = e.length;
  const s = Gi(t, r);
  if (!ht(n, s)) {
    i.uniform1iv(this.addr, s);
    ft(n, s);
  }
  let o;
  if (this.type === i.SAMPLER_2D_SHADOW) {
    o = yr;
  } else {
    o = ra;
  }
  for (let a = 0; a !== r; ++a) {
    t.setTexture2D(e[a] || o, s[a]);
  }
}
function eh(i, e, t) {
  const n = this.cache;
  const r = e.length;
  const s = Gi(t, r);
  if (!ht(n, s)) {
    i.uniform1iv(this.addr, s);
    ft(n, s);
  }
  for (let o = 0; o !== r; ++o) {
    t.setTexture3D(e[o] || aa, s[o]);
  }
}
function th(i, e, t) {
  const n = this.cache;
  const r = e.length;
  const s = Gi(t, r);
  if (!ht(n, s)) {
    i.uniform1iv(this.addr, s);
    ft(n, s);
  }
  for (let o = 0; o !== r; ++o) {
    t.setTextureCube(e[o] || oa, s[o]);
  }
}
function nh(i, e, t) {
  const n = this.cache;
  const r = e.length;
  const s = Gi(t, r);
  if (!ht(n, s)) {
    i.uniform1iv(this.addr, s);
    ft(n, s);
  }
  for (let o = 0; o !== r; ++o) {
    t.setTexture2DArray(e[o] || sa, s[o]);
  }
}
function ih(i) {
  switch (i) {
    case 5126:
      return Ou;
    case 35664:
      return Gu;
    case 35665:
      return zu;
    case 35666:
      return Vu;
    case 35674:
      return Hu;
    case 35675:
      return ku;
    case 35676:
      return Wu;
    case 5124:
    case 35670:
      return Xu;
    case 35667:
    case 35671:
      return qu;
    case 35668:
    case 35672:
      return Yu;
    case 35669:
    case 35673:
      return $u;
    case 5125:
      return Ku;
    case 36294:
      return Zu;
    case 36295:
      return ju;
    case 36296:
      return Ju;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return Qu;
    case 35679:
    case 36299:
    case 36307:
      return eh;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return th;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return nh;
  }
}
class rh {
  constructor(e, t, n) {
    this.id = e;
    this.addr = n;
    this.cache = [];
    this.type = t.type;
    this.setValue = Bu(t.type);
  }
}
class sh {
  constructor(e, t, n) {
    this.id = e;
    this.addr = n;
    this.cache = [];
    this.type = t.type;
    this.size = t.size;
    this.setValue = ih(t.type);
  }
}
class ah {
  constructor(e) {
    this.id = e;
    this.seq = [];
    this.map = {};
  }
  setValue(e, t, n) {
    const r = this.seq;
    for (let s = 0, o = r.length; s !== o; ++s) {
      const a = r[s];
      a.setValue(e, t[a.id], n);
    }
  }
}
const Mr = /(\w+)(\])?(\[|\.)?/g;
function ys(i, e) {
  i.seq.push(e);
  i.map[e.id] = e;
}
function oh(i, e, t) {
  const n = i.name;
  const r = n.length;
  for (Mr.lastIndex = 0;;) {
    const s = Mr.exec(n);
    const o = Mr.lastIndex;
    let a = s[1];
    const c = s[2] === "]";
    const l = s[3];
    if (c) {
      a = a | 0;
    }
    if (l === undefined || l === "[" && o + 2 === r) {
      ys(t, l === undefined ? new rh(a, i, e) : new sh(a, i, e));
      break;
    } else {
      let f = t.map[a];
      if (f === undefined) {
        f = new ah(a);
        ys(t, f);
      }
      t = f;
    }
  }
}
class Fi {
  constructor(e, t) {
    this.seq = [];
    this.map = {};
    const n = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);
    for (let o = 0; o < n; ++o) {
      const a = e.getActiveUniform(t, o);
      const c = e.getUniformLocation(t, a.name);
      oh(a, c, this);
    }
    const r = [];
    const s = [];
    for (const o of this.seq) {
      if (o.type === e.SAMPLER_2D_SHADOW || o.type === e.SAMPLER_CUBE_SHADOW || o.type === e.SAMPLER_2D_ARRAY_SHADOW) {
        r.push(o);
      } else {
        s.push(o);
      }
    }
    if (r.length > 0) {
      this.seq = r.concat(s);
    }
  }
  setValue(e, t, n, r) {
    const s = this.map[t];
    if (s !== undefined) {
      s.setValue(e, n, r);
    }
  }
  setOptional(e, t, n) {
    const r = t[n];
    if (r !== undefined) {
      this.setValue(e, n, r);
    }
  }
  static upload(e, t, n, r) {
    for (let s = 0, o = t.length; s !== o; ++s) {
      const a = t[s];
      const c = n[a.id];
      if (c.needsUpdate !== false) {
        a.setValue(e, c.value, r);
      }
    }
  }
  static seqWithValue(e, t) {
    const n = [];
    for (let r = 0, s = e.length; r !== s; ++r) {
      const o = e[r];
      if (o.id in t) {
        n.push(o);
      }
    }
    return n;
  }
}
function bs(i, e, t) {
  const n = i.createShader(e);
  i.shaderSource(n, t);
  i.compileShader(n);
  return n;
}
const lh = 37297;
let ch = 0;
function uh(i, e) {
  const t = i.split(`
`);
  const n = [];
  const r = Math.max(e - 6, 0);
  const s = Math.min(e + 6, t.length);
  for (let o = r; o < s; o++) {
    const a = o + 1;
    n.push(`${a === e ? ">" : " "} ${a}: ${t[o]}`);
  }
  return n.join(`
`);
}
const As = new Pe();
function hh(i) {
  Ge._getMatrix(As, Ge.workingColorSpace, i);
  const e = `mat3( ${As.elements.map(t => t.toFixed(4))} )`;
  switch (Ge.getTransfer(i)) {
    case Ii:
      return [e, "LinearTransferOETF"];
    case Ke:
      return [e, "sRGBTransferOETF"];
    default:
      Ce("WebGLProgram: Unsupported color space: ", i);
      return [e, "LinearTransferOETF"];
  }
}
function Rs(i, e, t) {
  const n = i.getShaderParameter(e, i.COMPILE_STATUS);
  const s = (i.getShaderInfoLog(e) || "").trim();
  if (n && s === "") {
    return "";
  }
  const o = /ERROR: 0:(\d+)/.exec(s);
  if (o) {
    const a = parseInt(o[1]);
    return `${t.toUpperCase()}

${s}

${uh(i.getShaderSource(e), a)}`;
  } else {
    return s;
  }
}
function fh(i, e) {
  const t = hh(e);
  return [`vec4 ${i}( vec4 value ) {`, `	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`, "}"].join(`
`);
}
const dh = {
  1: "Linear",
  2: "Reinhard",
  3: "Cineon",
  4: "ACESFilmic",
  6: "AgX",
  7: "Neutral",
  5: "Custom"
};
function ph(i, e) {
  const t = dh[e];
  if (t === undefined) {
    Ce("WebGLProgram: Unsupported toneMapping:", e);
    return "vec3 " + i + "( vec3 color ) { return LinearToneMapping( color ); }";
  } else {
    return "vec3 " + i + "( vec3 color ) { return " + t + "ToneMapping( color ); }";
  }
}
const Li = new B();
function mh() {
  Ge.getLuminanceCoefficients(Li);
  const i = Li.x.toFixed(4);
  const e = Li.y.toFixed(4);
  const t = Li.z.toFixed(4);
  return ["float luminance( const in vec3 rgb ) {", `	const vec3 weights = vec3( ${i}, ${e}, ${t} );`, "\treturn dot( weights, rgb );", "}"].join(`
`);
}
function gh(i) {
  return [i.extensionClipCullDistance ? "#extension GL_ANGLE_clip_cull_distance : require" : "", i.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : ""].filter(Jn).join(`
`);
}
function _h(i) {
  const e = [];
  for (const t in i) {
    const n = i[t];
    if (n !== false) {
      e.push("#define " + t + " " + n);
    }
  }
  return e.join(`
`);
}
function xh(i, e) {
  const t = {};
  const n = i.getProgramParameter(e, i.ACTIVE_ATTRIBUTES);
  for (let r = 0; r < n; r++) {
    const s = i.getActiveAttrib(e, r);
    const o = s.name;
    let a = 1;
    if (s.type === i.FLOAT_MAT2) {
      a = 2;
    }
    if (s.type === i.FLOAT_MAT3) {
      a = 3;
    }
    if (s.type === i.FLOAT_MAT4) {
      a = 4;
    }
    t[o] = {
      type: s.type,
      location: i.getAttribLocation(e, o),
      locationSize: a
    };
  }
  return t;
}
function Jn(i) {
  return i !== "";
}
function Cs(i, e) {
  const t = e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
  return i.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, t).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
}
function ws(i, e) {
  return i.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection);
}
const vh = /^[ \t]*#include +<([\w\d./]+)>/gm;
function br(i) {
  return i.replace(vh, Mh);
}
const Sh = new Map();
function Mh(i, e) {
  let t = De[e];
  if (t === undefined) {
    const n = Sh.get(e);
    if (n !== undefined) {
      t = De[n];
      Ce("WebGLRenderer: Shader chunk \"%s\" has been deprecated. Use \"%s\" instead.", e, n);
    } else {
      throw new Error("Can not resolve #include <" + e + ">");
    }
  }
  return br(t);
}
const Eh = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function Ps(i) {
  return i.replace(Eh, Th);
}
function Th(i, e, t, n) {
  let r = "";
  for (let s = parseInt(e); s < parseInt(t); s++) {
    r += n.replace(/\[\s*i\s*\]/g, "[ " + s + " ]").replace(/UNROLLED_LOOP_INDEX/g, s);
  }
  return r;
}
function Ds(i) {
  let e = `precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;
  if (i.precision === "highp") {
    e += `
#define HIGH_PRECISION`;
  } else if (i.precision === "mediump") {
    e += `
#define MEDIUM_PRECISION`;
  } else if (i.precision === "lowp") {
    e += `
#define LOW_PRECISION`;
  }
  return e;
}
const yh = {
  1: "SHADOWMAP_TYPE_PCF",
  3: "SHADOWMAP_TYPE_VSM"
};
function bh(i) {
  return yh[i.shadowMapType] || "SHADOWMAP_TYPE_BASIC";
}
const Ah = {
  301: "ENVMAP_TYPE_CUBE",
  302: "ENVMAP_TYPE_CUBE",
  306: "ENVMAP_TYPE_CUBE_UV"
};
function Rh(i) {
  if (i.envMap === false) {
    return "ENVMAP_TYPE_CUBE";
  } else {
    return Ah[i.envMapMode] || "ENVMAP_TYPE_CUBE";
  }
}
const Ch = {
  302: "ENVMAP_MODE_REFRACTION"
};
function wh(i) {
  if (i.envMap === false) {
    return "ENVMAP_MODE_REFLECTION";
  } else {
    return Ch[i.envMapMode] || "ENVMAP_MODE_REFLECTION";
  }
}
const Ph = {
  0: "ENVMAP_BLENDING_MULTIPLY",
  1: "ENVMAP_BLENDING_MIX",
  2: "ENVMAP_BLENDING_ADD"
};
function Dh(i) {
  if (i.envMap === false) {
    return "ENVMAP_BLENDING_NONE";
  } else {
    return Ph[i.combine] || "ENVMAP_BLENDING_NONE";
  }
}
function Lh(i) {
  const e = i.envMapCubeUVHeight;
  if (e === null) {
    return null;
  }
  const t = Math.log2(e) - 2;
  const n = 1 / e;
  return {
    texelWidth: 1 / (Math.max(Math.pow(2, t), 112) * 3),
    texelHeight: n,
    maxMip: t
  };
}
function Fh(i, e, t, n) {
  const r = i.getContext();
  const s = t.defines;
  let o = t.vertexShader;
  let a = t.fragmentShader;
  const c = bh(t);
  const l = Rh(t);
  const u = wh(t);
  const f = Dh(t);
  const d = Lh(t);
  const p = gh(t);
  const x = _h(s);
  const _ = r.createProgram();
  let m;
  let h;
  let b = t.glslVersion ? `${"#version " + t.glslVersion}
` : "";
  if (t.isRawShaderMaterial) {
    m = ["#define SHADER_TYPE " + t.shaderType, "#define SHADER_NAME " + t.shaderName, x].filter(Jn).join(`
`);
    if (m.length > 0) {
      m += `
`;
    }
    h = ["#define SHADER_TYPE " + t.shaderType, "#define SHADER_NAME " + t.shaderName, x].filter(Jn).join(`
`);
    if (h.length > 0) {
      h += `
`;
    }
  } else {
    m = [Ds(t), "#define SHADER_TYPE " + t.shaderType, "#define SHADER_NAME " + t.shaderName, x, t.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "", t.batching ? "#define USE_BATCHING" : "", t.batchingColor ? "#define USE_BATCHING_COLOR" : "", t.instancing ? "#define USE_INSTANCING" : "", t.instancingColor ? "#define USE_INSTANCING_COLOR" : "", t.instancingMorph ? "#define USE_INSTANCING_MORPH" : "", t.useFog && t.fog ? "#define USE_FOG" : "", t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "", t.map ? "#define USE_MAP" : "", t.envMap ? "#define USE_ENVMAP" : "", t.envMap ? "#define " + u : "", t.lightMap ? "#define USE_LIGHTMAP" : "", t.aoMap ? "#define USE_AOMAP" : "", t.bumpMap ? "#define USE_BUMPMAP" : "", t.normalMap ? "#define USE_NORMALMAP" : "", t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "", t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "", t.displacementMap ? "#define USE_DISPLACEMENTMAP" : "", t.emissiveMap ? "#define USE_EMISSIVEMAP" : "", t.anisotropy ? "#define USE_ANISOTROPY" : "", t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "", t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", t.specularMap ? "#define USE_SPECULARMAP" : "", t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "", t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "", t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", t.metalnessMap ? "#define USE_METALNESSMAP" : "", t.alphaMap ? "#define USE_ALPHAMAP" : "", t.alphaHash ? "#define USE_ALPHAHASH" : "", t.transmission ? "#define USE_TRANSMISSION" : "", t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", t.thicknessMap ? "#define USE_THICKNESSMAP" : "", t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "", t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "", t.mapUv ? "#define MAP_UV " + t.mapUv : "", t.alphaMapUv ? "#define ALPHAMAP_UV " + t.alphaMapUv : "", t.lightMapUv ? "#define LIGHTMAP_UV " + t.lightMapUv : "", t.aoMapUv ? "#define AOMAP_UV " + t.aoMapUv : "", t.emissiveMapUv ? "#define EMISSIVEMAP_UV " + t.emissiveMapUv : "", t.bumpMapUv ? "#define BUMPMAP_UV " + t.bumpMapUv : "", t.normalMapUv ? "#define NORMALMAP_UV " + t.normalMapUv : "", t.displacementMapUv ? "#define DISPLACEMENTMAP_UV " + t.displacementMapUv : "", t.metalnessMapUv ? "#define METALNESSMAP_UV " + t.metalnessMapUv : "", t.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + t.roughnessMapUv : "", t.anisotropyMapUv ? "#define ANISOTROPYMAP_UV " + t.anisotropyMapUv : "", t.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + t.clearcoatMapUv : "", t.clearcoatNormalMapUv ? "#define CLEARCOAT_NORMALMAP_UV " + t.clearcoatNormalMapUv : "", t.clearcoatRoughnessMapUv ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + t.clearcoatRoughnessMapUv : "", t.iridescenceMapUv ? "#define IRIDESCENCEMAP_UV " + t.iridescenceMapUv : "", t.iridescenceThicknessMapUv ? "#define IRIDESCENCE_THICKNESSMAP_UV " + t.iridescenceThicknessMapUv : "", t.sheenColorMapUv ? "#define SHEEN_COLORMAP_UV " + t.sheenColorMapUv : "", t.sheenRoughnessMapUv ? "#define SHEEN_ROUGHNESSMAP_UV " + t.sheenRoughnessMapUv : "", t.specularMapUv ? "#define SPECULARMAP_UV " + t.specularMapUv : "", t.specularColorMapUv ? "#define SPECULAR_COLORMAP_UV " + t.specularColorMapUv : "", t.specularIntensityMapUv ? "#define SPECULAR_INTENSITYMAP_UV " + t.specularIntensityMapUv : "", t.transmissionMapUv ? "#define TRANSMISSIONMAP_UV " + t.transmissionMapUv : "", t.thicknessMapUv ? "#define THICKNESSMAP_UV " + t.thicknessMapUv : "", t.vertexTangents && t.flatShading === false ? "#define USE_TANGENT" : "", t.vertexColors ? "#define USE_COLOR" : "", t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", t.vertexUv1s ? "#define USE_UV1" : "", t.vertexUv2s ? "#define USE_UV2" : "", t.vertexUv3s ? "#define USE_UV3" : "", t.pointsUvs ? "#define USE_POINTS_UV" : "", t.flatShading ? "#define FLAT_SHADED" : "", t.skinning ? "#define USE_SKINNING" : "", t.morphTargets ? "#define USE_MORPHTARGETS" : "", t.morphNormals && t.flatShading === false ? "#define USE_MORPHNORMALS" : "", t.morphColors ? "#define USE_MORPHCOLORS" : "", t.morphTargetsCount > 0 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + t.morphTextureStride : "", t.morphTargetsCount > 0 ? "#define MORPHTARGETS_COUNT " + t.morphTargetsCount : "", t.doubleSided ? "#define DOUBLE_SIDED" : "", t.flipSided ? "#define FLIP_SIDED" : "", t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", t.shadowMapEnabled ? "#define " + c : "", t.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "", t.logarithmicDepthBuffer ? "#define USE_LOGARITHMIC_DEPTH_BUFFER" : "", t.reversedDepthBuffer ? "#define USE_REVERSED_DEPTH_BUFFER" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", "#ifdef USE_INSTANCING", "\tattribute mat4 instanceMatrix;", "#endif", "#ifdef USE_INSTANCING_COLOR", "\tattribute vec3 instanceColor;", "#endif", "#ifdef USE_INSTANCING_MORPH", "\tuniform sampler2D morphTexture;", "#endif", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_UV1", "\tattribute vec2 uv1;", "#endif", "#ifdef USE_UV2", "\tattribute vec2 uv2;", "#endif", "#ifdef USE_UV3", "\tattribute vec2 uv3;", "#endif", "#ifdef USE_TANGENT", "\tattribute vec4 tangent;", "#endif", "#if defined( USE_COLOR_ALPHA )", "\tattribute vec4 color;", "#elif defined( USE_COLOR )", "\tattribute vec3 color;", "#endif", "#ifdef USE_SKINNING", "\tattribute vec4 skinIndex;", "\tattribute vec4 skinWeight;", "#endif", `
`].filter(Jn).join(`
`);
    h = [Ds(t), "#define SHADER_TYPE " + t.shaderType, "#define SHADER_NAME " + t.shaderName, x, t.useFog && t.fog ? "#define USE_FOG" : "", t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "", t.alphaToCoverage ? "#define ALPHA_TO_COVERAGE" : "", t.map ? "#define USE_MAP" : "", t.matcap ? "#define USE_MATCAP" : "", t.envMap ? "#define USE_ENVMAP" : "", t.envMap ? "#define " + l : "", t.envMap ? "#define " + u : "", t.envMap ? "#define " + f : "", d ? "#define CUBEUV_TEXEL_WIDTH " + d.texelWidth : "", d ? "#define CUBEUV_TEXEL_HEIGHT " + d.texelHeight : "", d ? "#define CUBEUV_MAX_MIP " + d.maxMip + ".0" : "", t.lightMap ? "#define USE_LIGHTMAP" : "", t.aoMap ? "#define USE_AOMAP" : "", t.bumpMap ? "#define USE_BUMPMAP" : "", t.normalMap ? "#define USE_NORMALMAP" : "", t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "", t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "", t.emissiveMap ? "#define USE_EMISSIVEMAP" : "", t.anisotropy ? "#define USE_ANISOTROPY" : "", t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "", t.clearcoat ? "#define USE_CLEARCOAT" : "", t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", t.dispersion ? "#define USE_DISPERSION" : "", t.iridescence ? "#define USE_IRIDESCENCE" : "", t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", t.specularMap ? "#define USE_SPECULARMAP" : "", t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "", t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "", t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", t.metalnessMap ? "#define USE_METALNESSMAP" : "", t.alphaMap ? "#define USE_ALPHAMAP" : "", t.alphaTest ? "#define USE_ALPHATEST" : "", t.alphaHash ? "#define USE_ALPHAHASH" : "", t.sheen ? "#define USE_SHEEN" : "", t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "", t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "", t.transmission ? "#define USE_TRANSMISSION" : "", t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", t.thicknessMap ? "#define USE_THICKNESSMAP" : "", t.vertexTangents && t.flatShading === false ? "#define USE_TANGENT" : "", t.vertexColors || t.instancingColor || t.batchingColor ? "#define USE_COLOR" : "", t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", t.vertexUv1s ? "#define USE_UV1" : "", t.vertexUv2s ? "#define USE_UV2" : "", t.vertexUv3s ? "#define USE_UV3" : "", t.pointsUvs ? "#define USE_POINTS_UV" : "", t.gradientMap ? "#define USE_GRADIENTMAP" : "", t.flatShading ? "#define FLAT_SHADED" : "", t.doubleSided ? "#define DOUBLE_SIDED" : "", t.flipSided ? "#define FLIP_SIDED" : "", t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", t.shadowMapEnabled ? "#define " + c : "", t.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "", t.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "", t.decodeVideoTextureEmissive ? "#define DECODE_VIDEO_TEXTURE_EMISSIVE" : "", t.logarithmicDepthBuffer ? "#define USE_LOGARITHMIC_DEPTH_BUFFER" : "", t.reversedDepthBuffer ? "#define USE_REVERSED_DEPTH_BUFFER" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", t.toneMapping !== 0 ? "#define TONE_MAPPING" : "", t.toneMapping !== 0 ? De.tonemapping_pars_fragment : "", t.toneMapping !== 0 ? ph("toneMapping", t.toneMapping) : "", t.dithering ? "#define DITHERING" : "", t.opaque ? "#define OPAQUE" : "", De.colorspace_pars_fragment, fh("linearToOutputTexel", t.outputColorSpace), mh(), t.useDepthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "", `
`].filter(Jn).join(`
`);
  }
  o = br(o);
  o = Cs(o, t);
  o = ws(o, t);
  a = br(a);
  a = Cs(a, t);
  a = ws(a, t);
  o = Ps(o);
  a = Ps(a);
  if (t.isRawShaderMaterial !== true) {
    b = `#version 300 es
`;
    m = `${[p, "#define attribute in", "#define varying out", "#define texture2D texture"].join(`
`)}
${m}`;
    h = `${["#define varying in", t.glslVersion === Hr ? "" : "layout(location = 0) out highp vec4 pc_fragColor;", t.glslVersion === Hr ? "" : "#define gl_FragColor pc_fragColor", "#define gl_FragDepthEXT gl_FragDepth", "#define texture2D texture", "#define textureCube texture", "#define texture2DProj textureProj", "#define texture2DLodEXT textureLod", "#define texture2DProjLodEXT textureProjLod", "#define textureCubeLodEXT textureLod", "#define texture2DGradEXT textureGrad", "#define texture2DProjGradEXT textureProjGrad", "#define textureCubeGradEXT textureGrad"].join(`
`)}
${h}`;
  }
  const y = b + m + o;
  const T = b + h + a;
  const A = bs(r, r.VERTEX_SHADER, y);
  const R = bs(r, r.FRAGMENT_SHADER, T);
  r.attachShader(_, A);
  r.attachShader(_, R);
  if (t.index0AttributeName !== undefined) {
    r.bindAttribLocation(_, 0, t.index0AttributeName);
  } else if (t.morphTargets === true) {
    r.bindAttribLocation(_, 0, "position");
  }
  r.linkProgram(_);
  function w(D) {
    if (i.debug.checkShaderErrors) {
      const O = r.getProgramInfoLog(_) || "";
      const N = r.getShaderInfoLog(A) || "";
      const H = r.getShaderInfoLog(R) || "";
      const q = O.trim();
      const V = N.trim();
      const W = H.trim();
      let Z = true;
      let ue = true;
      if (r.getProgramParameter(_, r.LINK_STATUS) === false) {
        Z = false;
        if (typeof i.debug.onShaderError == "function") {
          i.debug.onShaderError(r, _, A, R);
        } else {
          const ae = Rs(r, A, "vertex");
          const he = Rs(r, R, "fragment");
          He(`${"THREE.WebGLProgram: Shader Error " + r.getError() + " - VALIDATE_STATUS " + r.getProgramParameter(_, r.VALIDATE_STATUS)}

Material Name: ${D.name}
Material Type: ${D.type}

Program Info Log: ${q}
${ae}
${he}`);
        }
      } else if (q !== "") {
        Ce("WebGLProgram: Program Info Log:", q);
      } else if (V === "" || W === "") {
        ue = false;
      }
      if (ue) {
        D.diagnostics = {
          runnable: Z,
          programLog: q,
          vertexShader: {
            log: V,
            prefix: m
          },
          fragmentShader: {
            log: W,
            prefix: h
          }
        };
      }
    }
    r.deleteShader(A);
    r.deleteShader(R);
    U = new Fi(r, _);
    v = xh(r, _);
  }
  let U;
  this.getUniforms = function () {
    if (U === undefined) {
      w(this);
    }
    return U;
  };
  let v;
  this.getAttributes = function () {
    if (v === undefined) {
      w(this);
    }
    return v;
  };
  let M = t.rendererExtensionParallelShaderCompile === false;
  this.isReady = function () {
    if (M === false) {
      M = r.getProgramParameter(_, lh);
    }
    return M;
  };
  this.destroy = function () {
    n.releaseStatesOfProgram(this);
    r.deleteProgram(_);
    this.program = undefined;
  };
  this.type = t.shaderType;
  this.name = t.shaderName;
  this.id = ch++;
  this.cacheKey = e;
  this.usedTimes = 1;
  this.program = _;
  this.vertexShader = A;
  this.fragmentShader = R;
  return this;
}
let Ih = 0;
class Uh {
  constructor() {
    this.shaderCache = new Map();
    this.materialCache = new Map();
  }
  update(e) {
    const t = e.vertexShader;
    const n = e.fragmentShader;
    const r = this._getShaderStage(t);
    const s = this._getShaderStage(n);
    const o = this._getShaderCacheForMaterial(e);
    if (o.has(r) === false) {
      o.add(r);
      r.usedTimes++;
    }
    if (o.has(s) === false) {
      o.add(s);
      s.usedTimes++;
    }
    return this;
  }
  remove(e) {
    const t = this.materialCache.get(e);
    for (const n of t) {
      n.usedTimes--;
      if (n.usedTimes === 0) {
        this.shaderCache.delete(n.code);
      }
    }
    this.materialCache.delete(e);
    return this;
  }
  getVertexShaderID(e) {
    return this._getShaderStage(e.vertexShader).id;
  }
  getFragmentShaderID(e) {
    return this._getShaderStage(e.fragmentShader).id;
  }
  dispose() {
    this.shaderCache.clear();
    this.materialCache.clear();
  }
  _getShaderCacheForMaterial(e) {
    const t = this.materialCache;
    let n = t.get(e);
    if (n === undefined) {
      n = new Set();
      t.set(e, n);
    }
    return n;
  }
  _getShaderStage(e) {
    const t = this.shaderCache;
    let n = t.get(e);
    if (n === undefined) {
      n = new Nh(e);
      t.set(e, n);
    }
    return n;
  }
}
class Nh {
  constructor(e) {
    this.id = Ih++;
    this.code = e;
    this.usedTimes = 0;
  }
}
function Bh(i, e, t, n, r, s, o) {
  const a = new Ws();
  const c = new Uh();
  const l = new Set();
  const u = [];
  const f = new Map();
  const d = r.logarithmicDepthBuffer;
  let p = r.precision;
  const x = {
    MeshDepthMaterial: "depth",
    MeshDistanceMaterial: "distance",
    MeshNormalMaterial: "normal",
    MeshBasicMaterial: "basic",
    MeshLambertMaterial: "lambert",
    MeshPhongMaterial: "phong",
    MeshToonMaterial: "toon",
    MeshStandardMaterial: "physical",
    MeshPhysicalMaterial: "physical",
    MeshMatcapMaterial: "matcap",
    LineBasicMaterial: "basic",
    LineDashedMaterial: "dashed",
    PointsMaterial: "points",
    ShadowMaterial: "shadow",
    SpriteMaterial: "sprite"
  };
  function _(v) {
    l.add(v);
    if (v === 0) {
      return "uv";
    } else {
      return `uv${v}`;
    }
  }
  function m(v, M, D, O, N) {
    const H = O.fog;
    const q = N.geometry;
    const V = v.isMeshStandardMaterial ? O.environment : null;
    const W = (v.isMeshStandardMaterial ? t : e).get(v.envMap || V);
    const Z = W && W.mapping === 306 ? W.image.height : null;
    const ue = x[v.type];
    if (v.precision !== null) {
      p = r.getMaxPrecision(v.precision);
      if (p !== v.precision) {
        Ce("WebGLProgram.getParameters:", v.precision, "not supported, using", p, "instead.");
      }
    }
    const ae = q.morphAttributes.position || q.morphAttributes.normal || q.morphAttributes.color;
    const he = ae !== undefined ? ae.length : 0;
    let Ue = 0;
    if (q.morphAttributes.position !== undefined) {
      Ue = 1;
    }
    if (q.morphAttributes.normal !== undefined) {
      Ue = 2;
    }
    if (q.morphAttributes.color !== undefined) {
      Ue = 3;
    }
    let Le;
    let rt;
    let nt;
    let Y;
    if (ue) {
      const Ye = Vt[ue];
      Le = Ye.vertexShader;
      rt = Ye.fragmentShader;
    } else {
      Le = v.vertexShader;
      rt = v.fragmentShader;
      c.update(v);
      nt = c.getVertexShaderID(v);
      Y = c.getFragmentShaderID(v);
    }
    const j = i.getRenderTarget();
    const pe = i.state.buffers.depth.getReversed();
    const we = N.isInstancedMesh === true;
    const _e = N.isBatchedMesh === true;
    const ze = !!v.map;
    const dt = !!v.matcap;
    const Oe = !!W;
    const qe = !!v.aoMap;
    const je = !!v.lightMap;
    const Fe = !!v.bumpMap;
    const lt = !!v.normalMap;
    const C = !!v.displacementMap;
    const ct = !!v.emissiveMap;
    const Xe = !!v.metalnessMap;
    const Qe = !!v.roughnessMap;
    const ve = v.anisotropy > 0;
    const E = v.clearcoat > 0;
    const g = v.dispersion > 0;
    const L = v.iridescence > 0;
    const X = v.sheen > 0;
    const K = v.transmission > 0;
    const k = ve && !!v.anisotropyMap;
    const Me = E && !!v.clearcoatMap;
    const ne = E && !!v.clearcoatNormalMap;
    const xe = E && !!v.clearcoatRoughnessMap;
    const Ae = L && !!v.iridescenceMap;
    const Q = L && !!v.iridescenceThicknessMap;
    const re = X && !!v.sheenColorMap;
    const ge = X && !!v.sheenRoughnessMap;
    const Se = !!v.specularMap;
    const ie = !!v.specularColorMap;
    const Ie = !!v.specularIntensityMap;
    const P = K && !!v.transmissionMap;
    const ce = K && !!v.thicknessMap;
    const ee = !!v.gradientMap;
    const fe = !!v.alphaMap;
    const J = v.alphaTest > 0;
    const $ = !!v.alphaHash;
    const te = !!v.extensions;
    let Re = 0;
    if (v.toneMapped && (j === null || j.isXRRenderTarget === true)) {
      Re = i.toneMapping;
    }
    const et = {
      shaderID: ue,
      shaderType: v.type,
      shaderName: v.name,
      vertexShader: Le,
      fragmentShader: rt,
      defines: v.defines,
      customVertexShaderID: nt,
      customFragmentShaderID: Y,
      isRawShaderMaterial: v.isRawShaderMaterial === true,
      glslVersion: v.glslVersion,
      precision: p,
      batching: _e,
      batchingColor: _e && N._colorsTexture !== null,
      instancing: we,
      instancingColor: we && N.instanceColor !== null,
      instancingMorph: we && N.morphTexture !== null,
      outputColorSpace: j === null ? i.outputColorSpace : j.isXRRenderTarget === true ? j.texture.colorSpace : Nn,
      alphaToCoverage: !!v.alphaToCoverage,
      map: ze,
      matcap: dt,
      envMap: Oe,
      envMapMode: Oe && W.mapping,
      envMapCubeUVHeight: Z,
      aoMap: qe,
      lightMap: je,
      bumpMap: Fe,
      normalMap: lt,
      displacementMap: C,
      emissiveMap: ct,
      normalMapObjectSpace: lt && v.normalMapType === 1,
      normalMapTangentSpace: lt && v.normalMapType === 0,
      metalnessMap: Xe,
      roughnessMap: Qe,
      anisotropy: ve,
      anisotropyMap: k,
      clearcoat: E,
      clearcoatMap: Me,
      clearcoatNormalMap: ne,
      clearcoatRoughnessMap: xe,
      dispersion: g,
      iridescence: L,
      iridescenceMap: Ae,
      iridescenceThicknessMap: Q,
      sheen: X,
      sheenColorMap: re,
      sheenRoughnessMap: ge,
      specularMap: Se,
      specularColorMap: ie,
      specularIntensityMap: Ie,
      transmission: K,
      transmissionMap: P,
      thicknessMap: ce,
      gradientMap: ee,
      opaque: v.transparent === false && v.blending === 1 && v.alphaToCoverage === false,
      alphaMap: fe,
      alphaTest: J,
      alphaHash: $,
      combine: v.combine,
      mapUv: ze && _(v.map.channel),
      aoMapUv: qe && _(v.aoMap.channel),
      lightMapUv: je && _(v.lightMap.channel),
      bumpMapUv: Fe && _(v.bumpMap.channel),
      normalMapUv: lt && _(v.normalMap.channel),
      displacementMapUv: C && _(v.displacementMap.channel),
      emissiveMapUv: ct && _(v.emissiveMap.channel),
      metalnessMapUv: Xe && _(v.metalnessMap.channel),
      roughnessMapUv: Qe && _(v.roughnessMap.channel),
      anisotropyMapUv: k && _(v.anisotropyMap.channel),
      clearcoatMapUv: Me && _(v.clearcoatMap.channel),
      clearcoatNormalMapUv: ne && _(v.clearcoatNormalMap.channel),
      clearcoatRoughnessMapUv: xe && _(v.clearcoatRoughnessMap.channel),
      iridescenceMapUv: Ae && _(v.iridescenceMap.channel),
      iridescenceThicknessMapUv: Q && _(v.iridescenceThicknessMap.channel),
      sheenColorMapUv: re && _(v.sheenColorMap.channel),
      sheenRoughnessMapUv: ge && _(v.sheenRoughnessMap.channel),
      specularMapUv: Se && _(v.specularMap.channel),
      specularColorMapUv: ie && _(v.specularColorMap.channel),
      specularIntensityMapUv: Ie && _(v.specularIntensityMap.channel),
      transmissionMapUv: P && _(v.transmissionMap.channel),
      thicknessMapUv: ce && _(v.thicknessMap.channel),
      alphaMapUv: fe && _(v.alphaMap.channel),
      vertexTangents: !!q.attributes.tangent && (lt || ve),
      vertexColors: v.vertexColors,
      vertexAlphas: v.vertexColors === true && !!q.attributes.color && q.attributes.color.itemSize === 4,
      pointsUvs: N.isPoints === true && !!q.attributes.uv && (ze || fe),
      fog: !!H,
      useFog: v.fog === true,
      fogExp2: !!H && H.isFogExp2,
      flatShading: v.flatShading === true && v.wireframe === false,
      sizeAttenuation: v.sizeAttenuation === true,
      logarithmicDepthBuffer: d,
      reversedDepthBuffer: pe,
      skinning: N.isSkinnedMesh === true,
      morphTargets: q.morphAttributes.position !== undefined,
      morphNormals: q.morphAttributes.normal !== undefined,
      morphColors: q.morphAttributes.color !== undefined,
      morphTargetsCount: he,
      morphTextureStride: Ue,
      numDirLights: M.directional.length,
      numPointLights: M.point.length,
      numSpotLights: M.spot.length,
      numSpotLightMaps: M.spotLightMap.length,
      numRectAreaLights: M.rectArea.length,
      numHemiLights: M.hemi.length,
      numDirLightShadows: M.directionalShadowMap.length,
      numPointLightShadows: M.pointShadowMap.length,
      numSpotLightShadows: M.spotShadowMap.length,
      numSpotLightShadowsWithMaps: M.numSpotLightShadowsWithMaps,
      numLightProbes: M.numLightProbes,
      numClippingPlanes: o.numPlanes,
      numClipIntersection: o.numIntersection,
      dithering: v.dithering,
      shadowMapEnabled: i.shadowMap.enabled && D.length > 0,
      shadowMapType: i.shadowMap.type,
      toneMapping: Re,
      decodeVideoTexture: ze && v.map.isVideoTexture === true && Ge.getTransfer(v.map.colorSpace) === Ke,
      decodeVideoTextureEmissive: ct && v.emissiveMap.isVideoTexture === true && Ge.getTransfer(v.emissiveMap.colorSpace) === Ke,
      premultipliedAlpha: v.premultipliedAlpha,
      doubleSided: v.side === 2,
      flipSided: v.side === 1,
      useDepthPacking: v.depthPacking >= 0,
      depthPacking: v.depthPacking || 0,
      index0AttributeName: v.index0AttributeName,
      extensionClipCullDistance: te && v.extensions.clipCullDistance === true && n.has("WEBGL_clip_cull_distance"),
      extensionMultiDraw: (te && v.extensions.multiDraw === true || _e) && n.has("WEBGL_multi_draw"),
      rendererExtensionParallelShaderCompile: n.has("KHR_parallel_shader_compile"),
      customProgramCacheKey: v.customProgramCacheKey()
    };
    et.vertexUv1s = l.has(1);
    et.vertexUv2s = l.has(2);
    et.vertexUv3s = l.has(3);
    l.clear();
    return et;
  }
  function h(v) {
    const M = [];
    if (v.shaderID) {
      M.push(v.shaderID);
    } else {
      M.push(v.customVertexShaderID);
      M.push(v.customFragmentShaderID);
    }
    if (v.defines !== undefined) {
      for (const D in v.defines) {
        M.push(D);
        M.push(v.defines[D]);
      }
    }
    if (v.isRawShaderMaterial === false) {
      b(M, v);
      y(M, v);
      M.push(i.outputColorSpace);
    }
    M.push(v.customProgramCacheKey);
    return M.join();
  }
  function b(v, M) {
    v.push(M.precision);
    v.push(M.outputColorSpace);
    v.push(M.envMapMode);
    v.push(M.envMapCubeUVHeight);
    v.push(M.mapUv);
    v.push(M.alphaMapUv);
    v.push(M.lightMapUv);
    v.push(M.aoMapUv);
    v.push(M.bumpMapUv);
    v.push(M.normalMapUv);
    v.push(M.displacementMapUv);
    v.push(M.emissiveMapUv);
    v.push(M.metalnessMapUv);
    v.push(M.roughnessMapUv);
    v.push(M.anisotropyMapUv);
    v.push(M.clearcoatMapUv);
    v.push(M.clearcoatNormalMapUv);
    v.push(M.clearcoatRoughnessMapUv);
    v.push(M.iridescenceMapUv);
    v.push(M.iridescenceThicknessMapUv);
    v.push(M.sheenColorMapUv);
    v.push(M.sheenRoughnessMapUv);
    v.push(M.specularMapUv);
    v.push(M.specularColorMapUv);
    v.push(M.specularIntensityMapUv);
    v.push(M.transmissionMapUv);
    v.push(M.thicknessMapUv);
    v.push(M.combine);
    v.push(M.fogExp2);
    v.push(M.sizeAttenuation);
    v.push(M.morphTargetsCount);
    v.push(M.morphAttributeCount);
    v.push(M.numDirLights);
    v.push(M.numPointLights);
    v.push(M.numSpotLights);
    v.push(M.numSpotLightMaps);
    v.push(M.numHemiLights);
    v.push(M.numRectAreaLights);
    v.push(M.numDirLightShadows);
    v.push(M.numPointLightShadows);
    v.push(M.numSpotLightShadows);
    v.push(M.numSpotLightShadowsWithMaps);
    v.push(M.numLightProbes);
    v.push(M.shadowMapType);
    v.push(M.toneMapping);
    v.push(M.numClippingPlanes);
    v.push(M.numClipIntersection);
    v.push(M.depthPacking);
  }
  function y(v, M) {
    a.disableAll();
    if (M.instancing) {
      a.enable(0);
    }
    if (M.instancingColor) {
      a.enable(1);
    }
    if (M.instancingMorph) {
      a.enable(2);
    }
    if (M.matcap) {
      a.enable(3);
    }
    if (M.envMap) {
      a.enable(4);
    }
    if (M.normalMapObjectSpace) {
      a.enable(5);
    }
    if (M.normalMapTangentSpace) {
      a.enable(6);
    }
    if (M.clearcoat) {
      a.enable(7);
    }
    if (M.iridescence) {
      a.enable(8);
    }
    if (M.alphaTest) {
      a.enable(9);
    }
    if (M.vertexColors) {
      a.enable(10);
    }
    if (M.vertexAlphas) {
      a.enable(11);
    }
    if (M.vertexUv1s) {
      a.enable(12);
    }
    if (M.vertexUv2s) {
      a.enable(13);
    }
    if (M.vertexUv3s) {
      a.enable(14);
    }
    if (M.vertexTangents) {
      a.enable(15);
    }
    if (M.anisotropy) {
      a.enable(16);
    }
    if (M.alphaHash) {
      a.enable(17);
    }
    if (M.batching) {
      a.enable(18);
    }
    if (M.dispersion) {
      a.enable(19);
    }
    if (M.batchingColor) {
      a.enable(20);
    }
    if (M.gradientMap) {
      a.enable(21);
    }
    v.push(a.mask);
    a.disableAll();
    if (M.fog) {
      a.enable(0);
    }
    if (M.useFog) {
      a.enable(1);
    }
    if (M.flatShading) {
      a.enable(2);
    }
    if (M.logarithmicDepthBuffer) {
      a.enable(3);
    }
    if (M.reversedDepthBuffer) {
      a.enable(4);
    }
    if (M.skinning) {
      a.enable(5);
    }
    if (M.morphTargets) {
      a.enable(6);
    }
    if (M.morphNormals) {
      a.enable(7);
    }
    if (M.morphColors) {
      a.enable(8);
    }
    if (M.premultipliedAlpha) {
      a.enable(9);
    }
    if (M.shadowMapEnabled) {
      a.enable(10);
    }
    if (M.doubleSided) {
      a.enable(11);
    }
    if (M.flipSided) {
      a.enable(12);
    }
    if (M.useDepthPacking) {
      a.enable(13);
    }
    if (M.dithering) {
      a.enable(14);
    }
    if (M.transmission) {
      a.enable(15);
    }
    if (M.sheen) {
      a.enable(16);
    }
    if (M.opaque) {
      a.enable(17);
    }
    if (M.pointsUvs) {
      a.enable(18);
    }
    if (M.decodeVideoTexture) {
      a.enable(19);
    }
    if (M.decodeVideoTextureEmissive) {
      a.enable(20);
    }
    if (M.alphaToCoverage) {
      a.enable(21);
    }
    v.push(a.mask);
  }
  function T(v) {
    const M = x[v.type];
    let D;
    if (M) {
      const O = Vt[M];
      D = Qa.clone(O.uniforms);
    } else {
      D = v.uniforms;
    }
    return D;
  }
  function A(v, M) {
    let D = f.get(M);
    if (D !== undefined) {
      ++D.usedTimes;
    } else {
      D = new Fh(i, M, v, s);
      u.push(D);
      f.set(M, D);
    }
    return D;
  }
  function R(v) {
    if (--v.usedTimes === 0) {
      const M = u.indexOf(v);
      u[M] = u[u.length - 1];
      u.pop();
      f.delete(v.cacheKey);
      v.destroy();
    }
  }
  function w(v) {
    c.remove(v);
  }
  function U() {
    c.dispose();
  }
  return {
    getParameters: m,
    getProgramCacheKey: h,
    getUniforms: T,
    acquireProgram: A,
    releaseProgram: R,
    releaseShaderCache: w,
    programs: u,
    dispose: U
  };
}
function Oh() {
  let i = new WeakMap();
  function e(o) {
    return i.has(o);
  }
  function t(o) {
    let a = i.get(o);
    if (a === undefined) {
      a = {};
      i.set(o, a);
    }
    return a;
  }
  function n(o) {
    i.delete(o);
  }
  function r(o, a, c) {
    i.get(o)[a] = c;
  }
  function s() {
    i = new WeakMap();
  }
  return {
    has: e,
    get: t,
    remove: n,
    update: r,
    dispose: s
  };
}
function Gh(i, e) {
  if (i.groupOrder !== e.groupOrder) {
    return i.groupOrder - e.groupOrder;
  } else if (i.renderOrder !== e.renderOrder) {
    return i.renderOrder - e.renderOrder;
  } else if (i.material.id !== e.material.id) {
    return i.material.id - e.material.id;
  } else if (i.z !== e.z) {
    return i.z - e.z;
  } else {
    return i.id - e.id;
  }
}
function Ls(i, e) {
  if (i.groupOrder !== e.groupOrder) {
    return i.groupOrder - e.groupOrder;
  } else if (i.renderOrder !== e.renderOrder) {
    return i.renderOrder - e.renderOrder;
  } else if (i.z !== e.z) {
    return e.z - i.z;
  } else {
    return i.id - e.id;
  }
}
function Fs() {
  const i = [];
  let e = 0;
  const t = [];
  const n = [];
  const r = [];
  function s() {
    e = 0;
    t.length = 0;
    n.length = 0;
    r.length = 0;
  }
  function o(f, d, p, x, _, m) {
    let h = i[e];
    if (h === undefined) {
      h = {
        id: f.id,
        object: f,
        geometry: d,
        material: p,
        groupOrder: x,
        renderOrder: f.renderOrder,
        z: _,
        group: m
      };
      i[e] = h;
    } else {
      h.id = f.id;
      h.object = f;
      h.geometry = d;
      h.material = p;
      h.groupOrder = x;
      h.renderOrder = f.renderOrder;
      h.z = _;
      h.group = m;
    }
    e++;
    return h;
  }
  function a(f, d, p, x, _, m) {
    const h = o(f, d, p, x, _, m);
    if (p.transmission > 0) {
      n.push(h);
    } else if (p.transparent === true) {
      r.push(h);
    } else {
      t.push(h);
    }
  }
  function c(f, d, p, x, _, m) {
    const h = o(f, d, p, x, _, m);
    if (p.transmission > 0) {
      n.unshift(h);
    } else if (p.transparent === true) {
      r.unshift(h);
    } else {
      t.unshift(h);
    }
  }
  function l(f, d) {
    if (t.length > 1) {
      t.sort(f || Gh);
    }
    if (n.length > 1) {
      n.sort(d || Ls);
    }
    if (r.length > 1) {
      r.sort(d || Ls);
    }
  }
  function u() {
    for (let f = e, d = i.length; f < d; f++) {
      const p = i[f];
      if (p.id === null) {
        break;
      }
      p.id = null;
      p.object = null;
      p.geometry = null;
      p.material = null;
      p.group = null;
    }
  }
  return {
    opaque: t,
    transmissive: n,
    transparent: r,
    init: s,
    push: a,
    unshift: c,
    finish: u,
    sort: l
  };
}
function zh() {
  let i = new WeakMap();
  function e(n, r) {
    const s = i.get(n);
    let o;
    if (s === undefined) {
      o = new Fs();
      i.set(n, [o]);
    } else if (r >= s.length) {
      o = new Fs();
      s.push(o);
    } else {
      o = s[r];
    }
    return o;
  }
  function t() {
    i = new WeakMap();
  }
  return {
    get: e,
    dispose: t
  };
}
function Vh() {
  const i = {};
  return {
    get: function (e) {
      if (i[e.id] !== undefined) {
        return i[e.id];
      }
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            direction: new B(),
            color: new We()
          };
          break;
        case "SpotLight":
          t = {
            position: new B(),
            direction: new B(),
            color: new We(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0
          };
          break;
        case "PointLight":
          t = {
            position: new B(),
            color: new We(),
            distance: 0,
            decay: 0
          };
          break;
        case "HemisphereLight":
          t = {
            direction: new B(),
            skyColor: new We(),
            groundColor: new We()
          };
          break;
        case "RectAreaLight":
          t = {
            color: new We(),
            position: new B(),
            halfWidth: new B(),
            halfHeight: new B()
          };
          break;
      }
      i[e.id] = t;
      return t;
    }
  };
}
function Hh() {
  const i = {};
  return {
    get: function (e) {
      if (i[e.id] !== undefined) {
        return i[e.id];
      }
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new ke()
          };
          break;
        case "SpotLight":
          t = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new ke()
          };
          break;
        case "PointLight":
          t = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new ke(),
            shadowCameraNear: 1,
            shadowCameraFar: 1000
          };
          break;
      }
      i[e.id] = t;
      return t;
    }
  };
}
let kh = 0;
function Wh(i, e) {
  return (e.castShadow ? 2 : 0) - (i.castShadow ? 2 : 0) + (e.map ? 1 : 0) - (i.map ? 1 : 0);
}
function Xh(i) {
  const e = new Vh();
  const t = Hh();
  const n = {
    version: 0,
    hash: {
      directionalLength: -1,
      pointLength: -1,
      spotLength: -1,
      rectAreaLength: -1,
      hemiLength: -1,
      numDirectionalShadows: -1,
      numPointShadows: -1,
      numSpotShadows: -1,
      numSpotMaps: -1,
      numLightProbes: -1
    },
    ambient: [0, 0, 0],
    probe: [],
    directional: [],
    directionalShadow: [],
    directionalShadowMap: [],
    directionalShadowMatrix: [],
    spot: [],
    spotLightMap: [],
    spotShadow: [],
    spotShadowMap: [],
    spotLightMatrix: [],
    rectArea: [],
    rectAreaLTC1: null,
    rectAreaLTC2: null,
    point: [],
    pointShadow: [],
    pointShadowMap: [],
    pointShadowMatrix: [],
    hemi: [],
    numSpotLightShadowsWithMaps: 0,
    numLightProbes: 0
  };
  for (let l = 0; l < 9; l++) {
    n.probe.push(new B());
  }
  const r = new B();
  const s = new it();
  const o = new it();
  function a(l) {
    let u = 0;
    let f = 0;
    let d = 0;
    for (let v = 0; v < 9; v++) {
      n.probe[v].set(0, 0, 0);
    }
    let p = 0;
    let x = 0;
    let _ = 0;
    let m = 0;
    let h = 0;
    let b = 0;
    let y = 0;
    let T = 0;
    let A = 0;
    let R = 0;
    let w = 0;
    l.sort(Wh);
    for (let v = 0, M = l.length; v < M; v++) {
      const D = l[v];
      const O = D.color;
      const N = D.intensity;
      const H = D.distance;
      let q = null;
      if (D.shadow && D.shadow.map) {
        if (D.shadow.map.texture.format === 1030) {
          q = D.shadow.map.texture;
        } else {
          q = D.shadow.map.depthTexture || D.shadow.map.texture;
        }
      }
      if (D.isAmbientLight) {
        u += O.r * N;
        f += O.g * N;
        d += O.b * N;
      } else if (D.isLightProbe) {
        for (let V = 0; V < 9; V++) {
          n.probe[V].addScaledVector(D.sh.coefficients[V], N);
        }
        w++;
      } else if (D.isDirectionalLight) {
        const V = e.get(D);
        V.color.copy(D.color).multiplyScalar(D.intensity);
        if (D.castShadow) {
          const W = D.shadow;
          const Z = t.get(D);
          Z.shadowIntensity = W.intensity;
          Z.shadowBias = W.bias;
          Z.shadowNormalBias = W.normalBias;
          Z.shadowRadius = W.radius;
          Z.shadowMapSize = W.mapSize;
          n.directionalShadow[p] = Z;
          n.directionalShadowMap[p] = q;
          n.directionalShadowMatrix[p] = D.shadow.matrix;
          b++;
        }
        n.directional[p] = V;
        p++;
      } else if (D.isSpotLight) {
        const V = e.get(D);
        V.position.setFromMatrixPosition(D.matrixWorld);
        V.color.copy(O).multiplyScalar(N);
        V.distance = H;
        V.coneCos = Math.cos(D.angle);
        V.penumbraCos = Math.cos(D.angle * (1 - D.penumbra));
        V.decay = D.decay;
        n.spot[_] = V;
        const W = D.shadow;
        if (D.map) {
          n.spotLightMap[A] = D.map;
          A++;
          W.updateMatrices(D);
          if (D.castShadow) {
            R++;
          }
        }
        n.spotLightMatrix[_] = W.matrix;
        if (D.castShadow) {
          const Z = t.get(D);
          Z.shadowIntensity = W.intensity;
          Z.shadowBias = W.bias;
          Z.shadowNormalBias = W.normalBias;
          Z.shadowRadius = W.radius;
          Z.shadowMapSize = W.mapSize;
          n.spotShadow[_] = Z;
          n.spotShadowMap[_] = q;
          T++;
        }
        _++;
      } else if (D.isRectAreaLight) {
        const V = e.get(D);
        V.color.copy(O).multiplyScalar(N);
        V.halfWidth.set(D.width * 0.5, 0, 0);
        V.halfHeight.set(0, D.height * 0.5, 0);
        n.rectArea[m] = V;
        m++;
      } else if (D.isPointLight) {
        const V = e.get(D);
        V.color.copy(D.color).multiplyScalar(D.intensity);
        V.distance = D.distance;
        V.decay = D.decay;
        if (D.castShadow) {
          const W = D.shadow;
          const Z = t.get(D);
          Z.shadowIntensity = W.intensity;
          Z.shadowBias = W.bias;
          Z.shadowNormalBias = W.normalBias;
          Z.shadowRadius = W.radius;
          Z.shadowMapSize = W.mapSize;
          Z.shadowCameraNear = W.camera.near;
          Z.shadowCameraFar = W.camera.far;
          n.pointShadow[x] = Z;
          n.pointShadowMap[x] = q;
          n.pointShadowMatrix[x] = D.shadow.matrix;
          y++;
        }
        n.point[x] = V;
        x++;
      } else if (D.isHemisphereLight) {
        const V = e.get(D);
        V.skyColor.copy(D.color).multiplyScalar(N);
        V.groundColor.copy(D.groundColor).multiplyScalar(N);
        n.hemi[h] = V;
        h++;
      }
    }
    if (m > 0) {
      if (i.has("OES_texture_float_linear") === true) {
        n.rectAreaLTC1 = oe.LTC_FLOAT_1;
        n.rectAreaLTC2 = oe.LTC_FLOAT_2;
      } else {
        n.rectAreaLTC1 = oe.LTC_HALF_1;
        n.rectAreaLTC2 = oe.LTC_HALF_2;
      }
    }
    n.ambient[0] = u;
    n.ambient[1] = f;
    n.ambient[2] = d;
    const U = n.hash;
    if (U.directionalLength !== p || U.pointLength !== x || U.spotLength !== _ || U.rectAreaLength !== m || U.hemiLength !== h || U.numDirectionalShadows !== b || U.numPointShadows !== y || U.numSpotShadows !== T || U.numSpotMaps !== A || U.numLightProbes !== w) {
      n.directional.length = p;
      n.spot.length = _;
      n.rectArea.length = m;
      n.point.length = x;
      n.hemi.length = h;
      n.directionalShadow.length = b;
      n.directionalShadowMap.length = b;
      n.pointShadow.length = y;
      n.pointShadowMap.length = y;
      n.spotShadow.length = T;
      n.spotShadowMap.length = T;
      n.directionalShadowMatrix.length = b;
      n.pointShadowMatrix.length = y;
      n.spotLightMatrix.length = T + A - R;
      n.spotLightMap.length = A;
      n.numSpotLightShadowsWithMaps = R;
      n.numLightProbes = w;
      U.directionalLength = p;
      U.pointLength = x;
      U.spotLength = _;
      U.rectAreaLength = m;
      U.hemiLength = h;
      U.numDirectionalShadows = b;
      U.numPointShadows = y;
      U.numSpotShadows = T;
      U.numSpotMaps = A;
      U.numLightProbes = w;
      n.version = kh++;
    }
  }
  function c(l, u) {
    let f = 0;
    let d = 0;
    let p = 0;
    let x = 0;
    let _ = 0;
    const m = u.matrixWorldInverse;
    for (let h = 0, b = l.length; h < b; h++) {
      const y = l[h];
      if (y.isDirectionalLight) {
        const T = n.directional[f];
        T.direction.setFromMatrixPosition(y.matrixWorld);
        r.setFromMatrixPosition(y.target.matrixWorld);
        T.direction.sub(r);
        T.direction.transformDirection(m);
        f++;
      } else if (y.isSpotLight) {
        const T = n.spot[p];
        T.position.setFromMatrixPosition(y.matrixWorld);
        T.position.applyMatrix4(m);
        T.direction.setFromMatrixPosition(y.matrixWorld);
        r.setFromMatrixPosition(y.target.matrixWorld);
        T.direction.sub(r);
        T.direction.transformDirection(m);
        p++;
      } else if (y.isRectAreaLight) {
        const T = n.rectArea[x];
        T.position.setFromMatrixPosition(y.matrixWorld);
        T.position.applyMatrix4(m);
        o.identity();
        s.copy(y.matrixWorld);
        s.premultiply(m);
        o.extractRotation(s);
        T.halfWidth.set(y.width * 0.5, 0, 0);
        T.halfHeight.set(0, y.height * 0.5, 0);
        T.halfWidth.applyMatrix4(o);
        T.halfHeight.applyMatrix4(o);
        x++;
      } else if (y.isPointLight) {
        const T = n.point[d];
        T.position.setFromMatrixPosition(y.matrixWorld);
        T.position.applyMatrix4(m);
        d++;
      } else if (y.isHemisphereLight) {
        const T = n.hemi[_];
        T.direction.setFromMatrixPosition(y.matrixWorld);
        T.direction.transformDirection(m);
        _++;
      }
    }
  }
  return {
    setup: a,
    setupView: c,
    state: n
  };
}
function Is(i) {
  const e = new Xh(i);
  const t = [];
  const n = [];
  function r(u) {
    l.camera = u;
    t.length = 0;
    n.length = 0;
  }
  function s(u) {
    t.push(u);
  }
  function o(u) {
    n.push(u);
  }
  function a() {
    e.setup(t);
  }
  function c(u) {
    e.setupView(t, u);
  }
  const l = {
    lightsArray: t,
    shadowsArray: n,
    camera: null,
    lights: e,
    transmissionRenderTarget: {}
  };
  return {
    init: r,
    state: l,
    setupLights: a,
    setupLightsView: c,
    pushLight: s,
    pushShadow: o
  };
}
function qh(i) {
  let e = new WeakMap();
  function t(r, s = 0) {
    const o = e.get(r);
    let a;
    if (o === undefined) {
      a = new Is(i);
      e.set(r, [a]);
    } else if (s >= o.length) {
      a = new Is(i);
      o.push(a);
    } else {
      a = o[s];
    }
    return a;
  }
  function n() {
    e = new WeakMap();
  }
  return {
    get: t,
    dispose: n
  };
}
const Yh = `void main() {
	gl_Position = vec4( position, 1.0 );
}`;
const $h = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`;
const Kh = [new B(1, 0, 0), new B(-1, 0, 0), new B(0, 1, 0), new B(0, -1, 0), new B(0, 0, 1), new B(0, 0, -1)];
const Zh = [new B(0, -1, 0), new B(0, -1, 0), new B(0, 0, 1), new B(0, 0, -1), new B(0, -1, 0), new B(0, -1, 0)];
const Us = new it();
const jn = new B();
const Er = new B();
function jh(i, e, t) {
  let n = new wr();
  const r = new ke();
  const s = new ke();
  const o = new ot();
  const a = new uo();
  const c = new ho();
  const l = {};
  const u = t.maxTextureSize;
  const f = {
    0: 1,
    1: 0,
    2: 2
  };
  const d = new Wt({
    defines: {
      VSM_SAMPLES: 8
    },
    uniforms: {
      shadow_pass: {
        value: null
      },
      resolution: {
        value: new ke()
      },
      radius: {
        value: 4
      }
    },
    vertexShader: Yh,
    fragmentShader: $h
  });
  const p = d.clone();
  p.defines.HORIZONTAL_PASS = 1;
  const x = new qt();
  x.setAttribute("position", new Bt(new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]), 3));
  const _ = new Ot(x, d);
  const m = this;
  this.enabled = false;
  this.autoUpdate = true;
  this.needsUpdate = false;
  this.type = 1;
  let h = this.type;
  this.render = function (R, w, U) {
    if (m.enabled === false || m.autoUpdate === false && m.needsUpdate === false || R.length === 0) {
      return;
    }
    if (R.type === 2) {
      Ce("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead.");
      R.type = 1;
    }
    const v = i.getRenderTarget();
    const M = i.getActiveCubeFace();
    const D = i.getActiveMipmapLevel();
    const O = i.state;
    O.setBlending(0);
    if (O.buffers.depth.getReversed() === true) {
      O.buffers.color.setClear(0, 0, 0, 0);
    } else {
      O.buffers.color.setClear(1, 1, 1, 1);
    }
    O.buffers.depth.setTest(true);
    O.setScissorTest(false);
    const N = h !== this.type;
    if (N) {
      w.traverse(function (H) {
        if (H.material) {
          if (Array.isArray(H.material)) {
            H.material.forEach(q => q.needsUpdate = true);
          } else {
            H.material.needsUpdate = true;
          }
        }
      });
    }
    for (let H = 0, q = R.length; H < q; H++) {
      const V = R[H];
      const W = V.shadow;
      if (W === undefined) {
        Ce("WebGLShadowMap:", V, "has no shadow.");
        continue;
      }
      if (W.autoUpdate === false && W.needsUpdate === false) {
        continue;
      }
      r.copy(W.mapSize);
      const Z = W.getFrameExtents();
      r.multiply(Z);
      s.copy(W.mapSize);
      if (r.x > u || r.y > u) {
        if (r.x > u) {
          s.x = Math.floor(u / Z.x);
          r.x = s.x * Z.x;
          W.mapSize.x = s.x;
        }
        if (r.y > u) {
          s.y = Math.floor(u / Z.y);
          r.y = s.y * Z.y;
          W.mapSize.y = s.y;
        }
      }
      if (W.map === null || N === true) {
        if (W.map !== null) {
          if (W.map.depthTexture !== null) {
            W.map.depthTexture.dispose();
            W.map.depthTexture = null;
          }
          W.map.dispose();
        }
        if (this.type === 3) {
          if (V.isPointLight) {
            Ce("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");
            continue;
          }
          W.map = new Ht(r.x, r.y, {
            format: 1030,
            type: 1016,
            minFilter: 1006,
            magFilter: 1006,
            generateMipmaps: false
          });
          W.map.texture.name = V.name + ".shadowMap";
          W.map.depthTexture = new ei(r.x, r.y, 1015);
          W.map.depthTexture.name = V.name + ".shadowMapDepth";
          W.map.depthTexture.format = 1026;
          W.map.depthTexture.compareFunction = null;
          W.map.depthTexture.minFilter = 1003;
          W.map.depthTexture.magFilter = 1003;
        } else {
          if (V.isPointLight) {
            W.map = new Js(r.x);
            W.map.depthTexture = new lo(r.x, 1014);
          } else {
            W.map = new Ht(r.x, r.y);
            W.map.depthTexture = new ei(r.x, r.y, 1014);
          }
          W.map.depthTexture.name = V.name + ".shadowMap";
          W.map.depthTexture.format = 1026;
          const ae = i.state.buffers.depth.getReversed();
          if (this.type === 1) {
            W.map.depthTexture.compareFunction = ae ? 518 : 515;
            W.map.depthTexture.minFilter = 1006;
            W.map.depthTexture.magFilter = 1006;
          } else {
            W.map.depthTexture.compareFunction = null;
            W.map.depthTexture.minFilter = 1003;
            W.map.depthTexture.magFilter = 1003;
          }
        }
        W.camera.updateProjectionMatrix();
      }
      const ue = W.map.isWebGLCubeRenderTarget ? 6 : 1;
      for (let ae = 0; ae < ue; ae++) {
        if (W.map.isWebGLCubeRenderTarget) {
          i.setRenderTarget(W.map, ae);
          i.clear();
        } else {
          if (ae === 0) {
            i.setRenderTarget(W.map);
            i.clear();
          }
          const he = W.getViewport(ae);
          o.set(s.x * he.x, s.y * he.y, s.x * he.z, s.y * he.w);
          O.viewport(o);
        }
        if (V.isPointLight) {
          const he = W.camera;
          const Ue = W.matrix;
          const Le = V.distance || he.far;
          if (Le !== he.far) {
            he.far = Le;
            he.updateProjectionMatrix();
          }
          jn.setFromMatrixPosition(V.matrixWorld);
          he.position.copy(jn);
          Er.copy(he.position);
          Er.add(Kh[ae]);
          he.up.copy(Zh[ae]);
          he.lookAt(Er);
          he.updateMatrixWorld();
          Ue.makeTranslation(-jn.x, -jn.y, -jn.z);
          Us.multiplyMatrices(he.projectionMatrix, he.matrixWorldInverse);
          W._frustum.setFromProjectionMatrix(Us, he.coordinateSystem, he.reversedDepth);
        } else {
          W.updateMatrices(V);
        }
        n = W.getFrustum();
        T(w, U, W.camera, V, this.type);
      }
      if (W.isPointLightShadow !== true && this.type === 3) {
        b(W, U);
      }
      W.needsUpdate = false;
    }
    h = this.type;
    m.needsUpdate = false;
    i.setRenderTarget(v, M, D);
  };
  function b(R, w) {
    const U = e.update(_);
    if (d.defines.VSM_SAMPLES !== R.blurSamples) {
      d.defines.VSM_SAMPLES = R.blurSamples;
      p.defines.VSM_SAMPLES = R.blurSamples;
      d.needsUpdate = true;
      p.needsUpdate = true;
    }
    if (R.mapPass === null) {
      R.mapPass = new Ht(r.x, r.y, {
        format: 1030,
        type: 1016
      });
    }
    d.uniforms.shadow_pass.value = R.map.depthTexture;
    d.uniforms.resolution.value = R.mapSize;
    d.uniforms.radius.value = R.radius;
    i.setRenderTarget(R.mapPass);
    i.clear();
    i.renderBufferDirect(w, null, U, d, _, null);
    p.uniforms.shadow_pass.value = R.mapPass.texture;
    p.uniforms.resolution.value = R.mapSize;
    p.uniforms.radius.value = R.radius;
    i.setRenderTarget(R.map);
    i.clear();
    i.renderBufferDirect(w, null, U, p, _, null);
  }
  function y(R, w, U, v) {
    let M = null;
    const D = U.isPointLight === true ? R.customDistanceMaterial : R.customDepthMaterial;
    if (D !== undefined) {
      M = D;
    } else {
      M = U.isPointLight === true ? c : a;
      if (i.localClippingEnabled && w.clipShadows === true && Array.isArray(w.clippingPlanes) && w.clippingPlanes.length !== 0 || w.displacementMap && w.displacementScale !== 0 || w.alphaMap && w.alphaTest > 0 || w.map && w.alphaTest > 0 || w.alphaToCoverage === true) {
        const O = M.uuid;
        const N = w.uuid;
        let H = l[O];
        if (H === undefined) {
          H = {};
          l[O] = H;
        }
        let q = H[N];
        if (q === undefined) {
          q = M.clone();
          H[N] = q;
          w.addEventListener("dispose", A);
        }
        M = q;
      }
    }
    M.visible = w.visible;
    M.wireframe = w.wireframe;
    if (v === 3) {
      M.side = w.shadowSide !== null ? w.shadowSide : w.side;
    } else {
      M.side = w.shadowSide !== null ? w.shadowSide : f[w.side];
    }
    M.alphaMap = w.alphaMap;
    M.alphaTest = w.alphaToCoverage === true ? 0.5 : w.alphaTest;
    M.map = w.map;
    M.clipShadows = w.clipShadows;
    M.clippingPlanes = w.clippingPlanes;
    M.clipIntersection = w.clipIntersection;
    M.displacementMap = w.displacementMap;
    M.displacementScale = w.displacementScale;
    M.displacementBias = w.displacementBias;
    M.wireframeLinewidth = w.wireframeLinewidth;
    M.linewidth = w.linewidth;
    if (U.isPointLight === true && M.isMeshDistanceMaterial === true) {
      const O = i.properties.get(M);
      O.light = U;
    }
    return M;
  }
  function T(R, w, U, v, M) {
    if (R.visible === false) {
      return;
    }
    if (R.layers.test(w.layers) && (R.isMesh || R.isLine || R.isPoints) && (R.castShadow || R.receiveShadow && M === 3) && (!R.frustumCulled || n.intersectsObject(R))) {
      R.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse, R.matrixWorld);
      const N = e.update(R);
      const H = R.material;
      if (Array.isArray(H)) {
        const q = N.groups;
        for (let V = 0, W = q.length; V < W; V++) {
          const Z = q[V];
          const ue = H[Z.materialIndex];
          if (ue && ue.visible) {
            const ae = y(R, ue, v, M);
            R.onBeforeShadow(i, R, w, U, N, ae, Z);
            i.renderBufferDirect(U, null, N, ae, R, Z);
            R.onAfterShadow(i, R, w, U, N, ae, Z);
          }
        }
      } else if (H.visible) {
        const q = y(R, H, v, M);
        R.onBeforeShadow(i, R, w, U, N, q, null);
        i.renderBufferDirect(U, null, N, q, R, null);
        R.onAfterShadow(i, R, w, U, N, q, null);
      }
    }
    const O = R.children;
    for (let N = 0, H = O.length; N < H; N++) {
      T(O[N], w, U, v, M);
    }
  }
  function A(R) {
    R.target.removeEventListener("dispose", A);
    for (const U in l) {
      const v = l[U];
      const M = R.target.uuid;
      if (M in v) {
        v[M].dispose();
        delete v[M];
      }
    }
  }
}
const Jh = {
  0: 1,
  2: 6,
  4: 7,
  3: 5,
  1: 0,
  6: 2,
  7: 4,
  5: 3
};
function Qh(i, e) {
  function t() {
    let P = false;
    const ce = new ot();
    let ee = null;
    const fe = new ot(0, 0, 0, 0);
    return {
      setMask: function (J) {
        if (ee !== J && !P) {
          i.colorMask(J, J, J, J);
          ee = J;
        }
      },
      setLocked: function (J) {
        P = J;
      },
      setClear: function (J, $, te, Re, et) {
        if (et === true) {
          J *= Re;
          $ *= Re;
          te *= Re;
        }
        ce.set(J, $, te, Re);
        if (fe.equals(ce) === false) {
          i.clearColor(J, $, te, Re);
          fe.copy(ce);
        }
      },
      reset: function () {
        P = false;
        ee = null;
        fe.set(-1, 0, 0, 0);
      }
    };
  }
  function n() {
    let P = false;
    let ce = false;
    let ee = null;
    let fe = null;
    let J = null;
    return {
      setReversed: function ($) {
        if (ce !== $) {
          const te = e.get("EXT_clip_control");
          if ($) {
            te.clipControlEXT(te.LOWER_LEFT_EXT, te.ZERO_TO_ONE_EXT);
          } else {
            te.clipControlEXT(te.LOWER_LEFT_EXT, te.NEGATIVE_ONE_TO_ONE_EXT);
          }
          ce = $;
          const Re = J;
          J = null;
          this.setClear(Re);
        }
      },
      getReversed: function () {
        return ce;
      },
      setTest: function ($) {
        if ($) {
          j(i.DEPTH_TEST);
        } else {
          pe(i.DEPTH_TEST);
        }
      },
      setMask: function ($) {
        if (ee !== $ && !P) {
          i.depthMask($);
          ee = $;
        }
      },
      setFunc: function ($) {
        if (ce) {
          $ = Jh[$];
        }
        if (fe !== $) {
          switch ($) {
            case 0:
              i.depthFunc(i.NEVER);
              break;
            case 1:
              i.depthFunc(i.ALWAYS);
              break;
            case 2:
              i.depthFunc(i.LESS);
              break;
            case 3:
              i.depthFunc(i.LEQUAL);
              break;
            case 4:
              i.depthFunc(i.EQUAL);
              break;
            case 5:
              i.depthFunc(i.GEQUAL);
              break;
            case 6:
              i.depthFunc(i.GREATER);
              break;
            case 7:
              i.depthFunc(i.NOTEQUAL);
              break;
            default:
              i.depthFunc(i.LEQUAL);
          }
          fe = $;
        }
      },
      setLocked: function ($) {
        P = $;
      },
      setClear: function ($) {
        if (J !== $) {
          if (ce) {
            $ = 1 - $;
          }
          i.clearDepth($);
          J = $;
        }
      },
      reset: function () {
        P = false;
        ee = null;
        fe = null;
        J = null;
        ce = false;
      }
    };
  }
  function r() {
    let P = false;
    let ce = null;
    let ee = null;
    let fe = null;
    let J = null;
    let $ = null;
    let te = null;
    let Re = null;
    let et = null;
    return {
      setTest: function (Ye) {
        if (!P) {
          if (Ye) {
            j(i.STENCIL_TEST);
          } else {
            pe(i.STENCIL_TEST);
          }
        }
      },
      setMask: function (Ye) {
        if (ce !== Ye && !P) {
          i.stencilMask(Ye);
          ce = Ye;
        }
      },
      setFunc: function (Ye, Gt, Yt) {
        if (ee !== Ye || fe !== Gt || J !== Yt) {
          i.stencilFunc(Ye, Gt, Yt);
          ee = Ye;
          fe = Gt;
          J = Yt;
        }
      },
      setOp: function (Ye, Gt, Yt) {
        if ($ !== Ye || te !== Gt || Re !== Yt) {
          i.stencilOp(Ye, Gt, Yt);
          $ = Ye;
          te = Gt;
          Re = Yt;
        }
      },
      setLocked: function (Ye) {
        P = Ye;
      },
      setClear: function (Ye) {
        if (et !== Ye) {
          i.clearStencil(Ye);
          et = Ye;
        }
      },
      reset: function () {
        P = false;
        ce = null;
        ee = null;
        fe = null;
        J = null;
        $ = null;
        te = null;
        Re = null;
        et = null;
      }
    };
  }
  const s = new t();
  const o = new n();
  const a = new r();
  const c = new WeakMap();
  const l = new WeakMap();
  let u = {};
  let f = {};
  let d = new WeakMap();
  let p = [];
  let x = null;
  let _ = false;
  let m = null;
  let h = null;
  let b = null;
  let y = null;
  let T = null;
  let A = null;
  let R = null;
  let w = new We(0, 0, 0);
  let U = 0;
  let v = false;
  let M = null;
  let D = null;
  let O = null;
  let N = null;
  let H = null;
  const q = i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
  let V = false;
  let W = 0;
  const Z = i.getParameter(i.VERSION);
  if (Z.indexOf("WebGL") !== -1) {
    W = parseFloat(/^WebGL (\d)/.exec(Z)[1]);
    V = W >= 1;
  } else if (Z.indexOf("OpenGL ES") !== -1) {
    W = parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]);
    V = W >= 2;
  }
  let ue = null;
  let ae = {};
  const he = i.getParameter(i.SCISSOR_BOX);
  const Ue = i.getParameter(i.VIEWPORT);
  const Le = new ot().fromArray(he);
  const rt = new ot().fromArray(Ue);
  function nt(P, ce, ee, fe) {
    const J = new Uint8Array(4);
    const $ = i.createTexture();
    i.bindTexture(P, $);
    i.texParameteri(P, i.TEXTURE_MIN_FILTER, i.NEAREST);
    i.texParameteri(P, i.TEXTURE_MAG_FILTER, i.NEAREST);
    for (let te = 0; te < ee; te++) {
      if (P === i.TEXTURE_3D || P === i.TEXTURE_2D_ARRAY) {
        i.texImage3D(ce, 0, i.RGBA, 1, 1, fe, 0, i.RGBA, i.UNSIGNED_BYTE, J);
      } else {
        i.texImage2D(ce + te, 0, i.RGBA, 1, 1, 0, i.RGBA, i.UNSIGNED_BYTE, J);
      }
    }
    return $;
  }
  const Y = {};
  Y[i.TEXTURE_2D] = nt(i.TEXTURE_2D, i.TEXTURE_2D, 1);
  Y[i.TEXTURE_CUBE_MAP] = nt(i.TEXTURE_CUBE_MAP, i.TEXTURE_CUBE_MAP_POSITIVE_X, 6);
  Y[i.TEXTURE_2D_ARRAY] = nt(i.TEXTURE_2D_ARRAY, i.TEXTURE_2D_ARRAY, 1, 1);
  Y[i.TEXTURE_3D] = nt(i.TEXTURE_3D, i.TEXTURE_3D, 1, 1);
  s.setClear(0, 0, 0, 1);
  o.setClear(1);
  a.setClear(0);
  j(i.DEPTH_TEST);
  o.setFunc(3);
  Fe(false);
  lt(1);
  j(i.CULL_FACE);
  qe(0);
  function j(P) {
    if (u[P] !== true) {
      i.enable(P);
      u[P] = true;
    }
  }
  function pe(P) {
    if (u[P] !== false) {
      i.disable(P);
      u[P] = false;
    }
  }
  function we(P, ce) {
    if (f[P] !== ce) {
      i.bindFramebuffer(P, ce);
      f[P] = ce;
      if (P === i.DRAW_FRAMEBUFFER) {
        f[i.FRAMEBUFFER] = ce;
      }
      if (P === i.FRAMEBUFFER) {
        f[i.DRAW_FRAMEBUFFER] = ce;
      }
      return true;
    } else {
      return false;
    }
  }
  function _e(P, ce) {
    let ee = p;
    let fe = false;
    if (P) {
      ee = d.get(ce);
      if (ee === undefined) {
        ee = [];
        d.set(ce, ee);
      }
      const J = P.textures;
      if (ee.length !== J.length || ee[0] !== i.COLOR_ATTACHMENT0) {
        for (let $ = 0, te = J.length; $ < te; $++) {
          ee[$] = i.COLOR_ATTACHMENT0 + $;
        }
        ee.length = J.length;
        fe = true;
      }
    } else if (ee[0] !== i.BACK) {
      ee[0] = i.BACK;
      fe = true;
    }
    if (fe) {
      i.drawBuffers(ee);
    }
  }
  function ze(P) {
    if (x !== P) {
      i.useProgram(P);
      x = P;
      return true;
    } else {
      return false;
    }
  }
  const dt = {
    100: i.FUNC_ADD,
    101: i.FUNC_SUBTRACT,
    102: i.FUNC_REVERSE_SUBTRACT
  };
  dt[103] = i.MIN;
  dt[104] = i.MAX;
  const Oe = {
    200: i.ZERO,
    201: i.ONE,
    202: i.SRC_COLOR,
    204: i.SRC_ALPHA,
    210: i.SRC_ALPHA_SATURATE,
    208: i.DST_COLOR,
    206: i.DST_ALPHA,
    203: i.ONE_MINUS_SRC_COLOR,
    205: i.ONE_MINUS_SRC_ALPHA,
    209: i.ONE_MINUS_DST_COLOR,
    207: i.ONE_MINUS_DST_ALPHA,
    211: i.CONSTANT_COLOR,
    212: i.ONE_MINUS_CONSTANT_COLOR,
    213: i.CONSTANT_ALPHA,
    214: i.ONE_MINUS_CONSTANT_ALPHA
  };
  function qe(P, ce, ee, fe, J, $, te, Re, et, Ye) {
    if (P === 0) {
      if (_ === true) {
        pe(i.BLEND);
        _ = false;
      }
      return;
    }
    if (_ === false) {
      j(i.BLEND);
      _ = true;
    }
    if (P !== 5) {
      if (P !== m || Ye !== v) {
        if (h !== 100 || T !== 100) {
          i.blendEquation(i.FUNC_ADD);
          h = 100;
          T = 100;
        }
        if (Ye) {
          switch (P) {
            case 1:
              i.blendFuncSeparate(i.ONE, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA);
              break;
            case 2:
              i.blendFunc(i.ONE, i.ONE);
              break;
            case 3:
              i.blendFuncSeparate(i.ZERO, i.ONE_MINUS_SRC_COLOR, i.ZERO, i.ONE);
              break;
            case 4:
              i.blendFuncSeparate(i.DST_COLOR, i.ONE_MINUS_SRC_ALPHA, i.ZERO, i.ONE);
              break;
            default:
              He("WebGLState: Invalid blending: ", P);
              break;
          }
        } else {
          switch (P) {
            case 1:
              i.blendFuncSeparate(i.SRC_ALPHA, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA);
              break;
            case 2:
              i.blendFuncSeparate(i.SRC_ALPHA, i.ONE, i.ONE, i.ONE);
              break;
            case 3:
              He("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");
              break;
            case 4:
              He("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");
              break;
            default:
              He("WebGLState: Invalid blending: ", P);
              break;
          }
        }
        b = null;
        y = null;
        A = null;
        R = null;
        w.set(0, 0, 0);
        U = 0;
        m = P;
        v = Ye;
      }
      return;
    }
    J = J || ce;
    $ = $ || ee;
    te = te || fe;
    if (ce !== h || J !== T) {
      i.blendEquationSeparate(dt[ce], dt[J]);
      h = ce;
      T = J;
    }
    if (ee !== b || fe !== y || $ !== A || te !== R) {
      i.blendFuncSeparate(Oe[ee], Oe[fe], Oe[$], Oe[te]);
      b = ee;
      y = fe;
      A = $;
      R = te;
    }
    if (Re.equals(w) === false || et !== U) {
      i.blendColor(Re.r, Re.g, Re.b, et);
      w.copy(Re);
      U = et;
    }
    m = P;
    v = false;
  }
  function je(P, ce) {
    if (P.side === 2) {
      pe(i.CULL_FACE);
    } else {
      j(i.CULL_FACE);
    }
    let ee = P.side === 1;
    if (ce) {
      ee = !ee;
    }
    Fe(ee);
    if (P.blending === 1 && P.transparent === false) {
      qe(0);
    } else {
      qe(P.blending, P.blendEquation, P.blendSrc, P.blendDst, P.blendEquationAlpha, P.blendSrcAlpha, P.blendDstAlpha, P.blendColor, P.blendAlpha, P.premultipliedAlpha);
    }
    o.setFunc(P.depthFunc);
    o.setTest(P.depthTest);
    o.setMask(P.depthWrite);
    s.setMask(P.colorWrite);
    const fe = P.stencilWrite;
    a.setTest(fe);
    if (fe) {
      a.setMask(P.stencilWriteMask);
      a.setFunc(P.stencilFunc, P.stencilRef, P.stencilFuncMask);
      a.setOp(P.stencilFail, P.stencilZFail, P.stencilZPass);
    }
    ct(P.polygonOffset, P.polygonOffsetFactor, P.polygonOffsetUnits);
    if (P.alphaToCoverage === true) {
      j(i.SAMPLE_ALPHA_TO_COVERAGE);
    } else {
      pe(i.SAMPLE_ALPHA_TO_COVERAGE);
    }
  }
  function Fe(P) {
    if (M !== P) {
      if (P) {
        i.frontFace(i.CW);
      } else {
        i.frontFace(i.CCW);
      }
      M = P;
    }
  }
  function lt(P) {
    if (P !== 0) {
      j(i.CULL_FACE);
      if (P !== D) {
        if (P === 1) {
          i.cullFace(i.BACK);
        } else if (P === 2) {
          i.cullFace(i.FRONT);
        } else {
          i.cullFace(i.FRONT_AND_BACK);
        }
      }
    } else {
      pe(i.CULL_FACE);
    }
    D = P;
  }
  function C(P) {
    if (P !== O) {
      if (V) {
        i.lineWidth(P);
      }
      O = P;
    }
  }
  function ct(P, ce, ee) {
    if (P) {
      j(i.POLYGON_OFFSET_FILL);
      if (N !== ce || H !== ee) {
        i.polygonOffset(ce, ee);
        N = ce;
        H = ee;
      }
    } else {
      pe(i.POLYGON_OFFSET_FILL);
    }
  }
  function Xe(P) {
    if (P) {
      j(i.SCISSOR_TEST);
    } else {
      pe(i.SCISSOR_TEST);
    }
  }
  function Qe(P = i.TEXTURE0 + q - 1) {
    if (ue !== P) {
      i.activeTexture(P);
      ue = P;
    }
  }
  function ve(P, ce, ee) {
    if (ee === undefined) {
      if (ue === null) {
        ee = i.TEXTURE0 + q - 1;
      } else {
        ee = ue;
      }
    }
    let fe = ae[ee];
    if (fe === undefined) {
      fe = {
        type: undefined,
        texture: undefined
      };
      ae[ee] = fe;
    }
    if (fe.type !== P || fe.texture !== ce) {
      if (ue !== ee) {
        i.activeTexture(ee);
        ue = ee;
      }
      i.bindTexture(P, ce || Y[P]);
      fe.type = P;
      fe.texture = ce;
    }
  }
  function E() {
    const P = ae[ue];
    if (P !== undefined && P.type !== undefined) {
      i.bindTexture(P.type, null);
      P.type = undefined;
      P.texture = undefined;
    }
  }
  function g() {
    try {
      i.compressedTexImage2D(...arguments);
    } catch (P) {
      He("WebGLState:", P);
    }
  }
  function L() {
    try {
      i.compressedTexImage3D(...arguments);
    } catch (P) {
      He("WebGLState:", P);
    }
  }
  function X() {
    try {
      i.texSubImage2D(...arguments);
    } catch (P) {
      He("WebGLState:", P);
    }
  }
  function K() {
    try {
      i.texSubImage3D(...arguments);
    } catch (P) {
      He("WebGLState:", P);
    }
  }
  function k() {
    try {
      i.compressedTexSubImage2D(...arguments);
    } catch (P) {
      He("WebGLState:", P);
    }
  }
  function Me() {
    try {
      i.compressedTexSubImage3D(...arguments);
    } catch (P) {
      He("WebGLState:", P);
    }
  }
  function ne() {
    try {
      i.texStorage2D(...arguments);
    } catch (P) {
      He("WebGLState:", P);
    }
  }
  function xe() {
    try {
      i.texStorage3D(...arguments);
    } catch (P) {
      He("WebGLState:", P);
    }
  }
  function Ae() {
    try {
      i.texImage2D(...arguments);
    } catch (P) {
      He("WebGLState:", P);
    }
  }
  function Q() {
    try {
      i.texImage3D(...arguments);
    } catch (P) {
      He("WebGLState:", P);
    }
  }
  function re(P) {
    if (Le.equals(P) === false) {
      i.scissor(P.x, P.y, P.z, P.w);
      Le.copy(P);
    }
  }
  function ge(P) {
    if (rt.equals(P) === false) {
      i.viewport(P.x, P.y, P.z, P.w);
      rt.copy(P);
    }
  }
  function Se(P, ce) {
    let ee = l.get(ce);
    if (ee === undefined) {
      ee = new WeakMap();
      l.set(ce, ee);
    }
    let fe = ee.get(P);
    if (fe === undefined) {
      fe = i.getUniformBlockIndex(ce, P.name);
      ee.set(P, fe);
    }
  }
  function ie(P, ce) {
    const fe = l.get(ce).get(P);
    if (c.get(ce) !== fe) {
      i.uniformBlockBinding(ce, fe, P.__bindingPointIndex);
      c.set(ce, fe);
    }
  }
  function Ie() {
    i.disable(i.BLEND);
    i.disable(i.CULL_FACE);
    i.disable(i.DEPTH_TEST);
    i.disable(i.POLYGON_OFFSET_FILL);
    i.disable(i.SCISSOR_TEST);
    i.disable(i.STENCIL_TEST);
    i.disable(i.SAMPLE_ALPHA_TO_COVERAGE);
    i.blendEquation(i.FUNC_ADD);
    i.blendFunc(i.ONE, i.ZERO);
    i.blendFuncSeparate(i.ONE, i.ZERO, i.ONE, i.ZERO);
    i.blendColor(0, 0, 0, 0);
    i.colorMask(true, true, true, true);
    i.clearColor(0, 0, 0, 0);
    i.depthMask(true);
    i.depthFunc(i.LESS);
    o.setReversed(false);
    i.clearDepth(1);
    i.stencilMask(4294967295);
    i.stencilFunc(i.ALWAYS, 0, 4294967295);
    i.stencilOp(i.KEEP, i.KEEP, i.KEEP);
    i.clearStencil(0);
    i.cullFace(i.BACK);
    i.frontFace(i.CCW);
    i.polygonOffset(0, 0);
    i.activeTexture(i.TEXTURE0);
    i.bindFramebuffer(i.FRAMEBUFFER, null);
    i.bindFramebuffer(i.DRAW_FRAMEBUFFER, null);
    i.bindFramebuffer(i.READ_FRAMEBUFFER, null);
    i.useProgram(null);
    i.lineWidth(1);
    i.scissor(0, 0, i.canvas.width, i.canvas.height);
    i.viewport(0, 0, i.canvas.width, i.canvas.height);
    u = {};
    ue = null;
    ae = {};
    f = {};
    d = new WeakMap();
    p = [];
    x = null;
    _ = false;
    m = null;
    h = null;
    b = null;
    y = null;
    T = null;
    A = null;
    R = null;
    w = new We(0, 0, 0);
    U = 0;
    v = false;
    M = null;
    D = null;
    O = null;
    N = null;
    H = null;
    Le.set(0, 0, i.canvas.width, i.canvas.height);
    rt.set(0, 0, i.canvas.width, i.canvas.height);
    s.reset();
    o.reset();
    a.reset();
  }
  return {
    buffers: {
      color: s,
      depth: o,
      stencil: a
    },
    enable: j,
    disable: pe,
    bindFramebuffer: we,
    drawBuffers: _e,
    useProgram: ze,
    setBlending: qe,
    setMaterial: je,
    setFlipSided: Fe,
    setCullFace: lt,
    setLineWidth: C,
    setPolygonOffset: ct,
    setScissorTest: Xe,
    activeTexture: Qe,
    bindTexture: ve,
    unbindTexture: E,
    compressedTexImage2D: g,
    compressedTexImage3D: L,
    texImage2D: Ae,
    texImage3D: Q,
    updateUBOMapping: Se,
    uniformBlockBinding: ie,
    texStorage2D: ne,
    texStorage3D: xe,
    texSubImage2D: X,
    texSubImage3D: K,
    compressedTexSubImage2D: k,
    compressedTexSubImage3D: Me,
    scissor: re,
    viewport: ge,
    reset: Ie
  };
}
function ef(i, e, t, n, r, s, o) {
  const a = e.has("WEBGL_multisampled_render_to_texture") ? e.get("WEBGL_multisampled_render_to_texture") : null;
  const c = typeof navigator === "undefined" ? false : /OculusBrowser/g.test(navigator.userAgent);
  const l = new ke();
  const u = new WeakMap();
  let f;
  const d = new WeakMap();
  let p = false;
  try {
    p = typeof OffscreenCanvas !== "undefined" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {}
  function x(E, g) {
    if (p) {
      return new OffscreenCanvas(E, g);
    } else {
      return Ui("canvas");
    }
  }
  function _(E, g, L) {
    let X = 1;
    const K = ve(E);
    if (K.width > L || K.height > L) {
      X = L / Math.max(K.width, K.height);
    }
    if (X < 1) {
      if (typeof HTMLImageElement !== "undefined" && E instanceof HTMLImageElement || typeof HTMLCanvasElement !== "undefined" && E instanceof HTMLCanvasElement || typeof ImageBitmap !== "undefined" && E instanceof ImageBitmap || typeof VideoFrame !== "undefined" && E instanceof VideoFrame) {
        const k = Math.floor(X * K.width);
        const Me = Math.floor(X * K.height);
        if (f === undefined) {
          f = x(k, Me);
        }
        const ne = g ? x(k, Me) : f;
        ne.width = k;
        ne.height = Me;
        ne.getContext("2d").drawImage(E, 0, 0, k, Me);
        Ce("WebGLRenderer: Texture has been resized from (" + K.width + "x" + K.height + ") to (" + k + "x" + Me + ").");
        return ne;
      } else {
        if ("data" in E) {
          Ce("WebGLRenderer: Image in DataTexture is too big (" + K.width + "x" + K.height + ").");
        }
        return E;
      }
    }
    return E;
  }
  function m(E) {
    return E.generateMipmaps;
  }
  function h(E) {
    i.generateMipmap(E);
  }
  function b(E) {
    if (E.isWebGLCubeRenderTarget) {
      return i.TEXTURE_CUBE_MAP;
    } else if (E.isWebGL3DRenderTarget) {
      return i.TEXTURE_3D;
    } else if (E.isWebGLArrayRenderTarget || E.isCompressedArrayTexture) {
      return i.TEXTURE_2D_ARRAY;
    } else {
      return i.TEXTURE_2D;
    }
  }
  function y(E, g, L, X, K = false) {
    if (E !== null) {
      if (i[E] !== undefined) {
        return i[E];
      }
      Ce("WebGLRenderer: Attempt to use non-existing WebGL internal format '" + E + "'");
    }
    let k = g;
    if (g === i.RED) {
      if (L === i.FLOAT) {
        k = i.R32F;
      }
      if (L === i.HALF_FLOAT) {
        k = i.R16F;
      }
      if (L === i.UNSIGNED_BYTE) {
        k = i.R8;
      }
    }
    if (g === i.RED_INTEGER) {
      if (L === i.UNSIGNED_BYTE) {
        k = i.R8UI;
      }
      if (L === i.UNSIGNED_SHORT) {
        k = i.R16UI;
      }
      if (L === i.UNSIGNED_INT) {
        k = i.R32UI;
      }
      if (L === i.BYTE) {
        k = i.R8I;
      }
      if (L === i.SHORT) {
        k = i.R16I;
      }
      if (L === i.INT) {
        k = i.R32I;
      }
    }
    if (g === i.RG) {
      if (L === i.FLOAT) {
        k = i.RG32F;
      }
      if (L === i.HALF_FLOAT) {
        k = i.RG16F;
      }
      if (L === i.UNSIGNED_BYTE) {
        k = i.RG8;
      }
    }
    if (g === i.RG_INTEGER) {
      if (L === i.UNSIGNED_BYTE) {
        k = i.RG8UI;
      }
      if (L === i.UNSIGNED_SHORT) {
        k = i.RG16UI;
      }
      if (L === i.UNSIGNED_INT) {
        k = i.RG32UI;
      }
      if (L === i.BYTE) {
        k = i.RG8I;
      }
      if (L === i.SHORT) {
        k = i.RG16I;
      }
      if (L === i.INT) {
        k = i.RG32I;
      }
    }
    if (g === i.RGB_INTEGER) {
      if (L === i.UNSIGNED_BYTE) {
        k = i.RGB8UI;
      }
      if (L === i.UNSIGNED_SHORT) {
        k = i.RGB16UI;
      }
      if (L === i.UNSIGNED_INT) {
        k = i.RGB32UI;
      }
      if (L === i.BYTE) {
        k = i.RGB8I;
      }
      if (L === i.SHORT) {
        k = i.RGB16I;
      }
      if (L === i.INT) {
        k = i.RGB32I;
      }
    }
    if (g === i.RGBA_INTEGER) {
      if (L === i.UNSIGNED_BYTE) {
        k = i.RGBA8UI;
      }
      if (L === i.UNSIGNED_SHORT) {
        k = i.RGBA16UI;
      }
      if (L === i.UNSIGNED_INT) {
        k = i.RGBA32UI;
      }
      if (L === i.BYTE) {
        k = i.RGBA8I;
      }
      if (L === i.SHORT) {
        k = i.RGBA16I;
      }
      if (L === i.INT) {
        k = i.RGBA32I;
      }
    }
    if (g === i.RGB) {
      if (L === i.UNSIGNED_INT_5_9_9_9_REV) {
        k = i.RGB9_E5;
      }
      if (L === i.UNSIGNED_INT_10F_11F_11F_REV) {
        k = i.R11F_G11F_B10F;
      }
    }
    if (g === i.RGBA) {
      const Me = K ? Ii : Ge.getTransfer(X);
      if (L === i.FLOAT) {
        k = i.RGBA32F;
      }
      if (L === i.HALF_FLOAT) {
        k = i.RGBA16F;
      }
      if (L === i.UNSIGNED_BYTE) {
        k = Me === Ke ? i.SRGB8_ALPHA8 : i.RGBA8;
      }
      if (L === i.UNSIGNED_SHORT_4_4_4_4) {
        k = i.RGBA4;
      }
      if (L === i.UNSIGNED_SHORT_5_5_5_1) {
        k = i.RGB5_A1;
      }
    }
    if (k === i.R16F || k === i.R32F || k === i.RG16F || k === i.RG32F || k === i.RGBA16F || k === i.RGBA32F) {
      e.get("EXT_color_buffer_float");
    }
    return k;
  }
  function T(E, g) {
    let L;
    if (E) {
      if (g === null || g === 1014 || g === 1020) {
        L = i.DEPTH24_STENCIL8;
      } else if (g === 1015) {
        L = i.DEPTH32F_STENCIL8;
      } else if (g === 1012) {
        L = i.DEPTH24_STENCIL8;
        Ce("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.");
      }
    } else if (g === null || g === 1014 || g === 1020) {
      L = i.DEPTH_COMPONENT24;
    } else if (g === 1015) {
      L = i.DEPTH_COMPONENT32F;
    } else if (g === 1012) {
      L = i.DEPTH_COMPONENT16;
    }
    return L;
  }
  function A(E, g) {
    if (m(E) === true || E.isFramebufferTexture && E.minFilter !== 1003 && E.minFilter !== 1006) {
      return Math.log2(Math.max(g.width, g.height)) + 1;
    } else if (E.mipmaps !== undefined && E.mipmaps.length > 0) {
      return E.mipmaps.length;
    } else if (E.isCompressedTexture && Array.isArray(E.image)) {
      return g.mipmaps.length;
    } else {
      return 1;
    }
  }
  function R(E) {
    const g = E.target;
    g.removeEventListener("dispose", R);
    U(g);
    if (g.isVideoTexture) {
      u.delete(g);
    }
  }
  function w(E) {
    const g = E.target;
    g.removeEventListener("dispose", w);
    M(g);
  }
  function U(E) {
    const g = n.get(E);
    if (g.__webglInit === undefined) {
      return;
    }
    const L = E.source;
    const X = d.get(L);
    if (X) {
      const K = X[g.__cacheKey];
      K.usedTimes--;
      if (K.usedTimes === 0) {
        v(E);
      }
      if (Object.keys(X).length === 0) {
        d.delete(L);
      }
    }
    n.remove(E);
  }
  function v(E) {
    const g = n.get(E);
    i.deleteTexture(g.__webglTexture);
    const L = E.source;
    const X = d.get(L);
    delete X[g.__cacheKey];
    o.memory.textures--;
  }
  function M(E) {
    const g = n.get(E);
    if (E.depthTexture) {
      E.depthTexture.dispose();
      n.remove(E.depthTexture);
    }
    if (E.isWebGLCubeRenderTarget) {
      for (let X = 0; X < 6; X++) {
        if (Array.isArray(g.__webglFramebuffer[X])) {
          for (let K = 0; K < g.__webglFramebuffer[X].length; K++) {
            i.deleteFramebuffer(g.__webglFramebuffer[X][K]);
          }
        } else {
          i.deleteFramebuffer(g.__webglFramebuffer[X]);
        }
        if (g.__webglDepthbuffer) {
          i.deleteRenderbuffer(g.__webglDepthbuffer[X]);
        }
      }
    } else {
      if (Array.isArray(g.__webglFramebuffer)) {
        for (let X = 0; X < g.__webglFramebuffer.length; X++) {
          i.deleteFramebuffer(g.__webglFramebuffer[X]);
        }
      } else {
        i.deleteFramebuffer(g.__webglFramebuffer);
      }
      if (g.__webglDepthbuffer) {
        i.deleteRenderbuffer(g.__webglDepthbuffer);
      }
      if (g.__webglMultisampledFramebuffer) {
        i.deleteFramebuffer(g.__webglMultisampledFramebuffer);
      }
      if (g.__webglColorRenderbuffer) {
        for (let X = 0; X < g.__webglColorRenderbuffer.length; X++) {
          if (g.__webglColorRenderbuffer[X]) {
            i.deleteRenderbuffer(g.__webglColorRenderbuffer[X]);
          }
        }
      }
      if (g.__webglDepthRenderbuffer) {
        i.deleteRenderbuffer(g.__webglDepthRenderbuffer);
      }
    }
    const L = E.textures;
    for (let X = 0, K = L.length; X < K; X++) {
      const k = n.get(L[X]);
      if (k.__webglTexture) {
        i.deleteTexture(k.__webglTexture);
        o.memory.textures--;
      }
      n.remove(L[X]);
    }
    n.remove(E);
  }
  let D = 0;
  function O() {
    D = 0;
  }
  function N() {
    const E = D;
    if (E >= r.maxTextures) {
      Ce("WebGLTextures: Trying to use " + E + " texture units while this GPU supports only " + r.maxTextures);
    }
    D += 1;
    return E;
  }
  function H(E) {
    const g = [];
    g.push(E.wrapS);
    g.push(E.wrapT);
    g.push(E.wrapR || 0);
    g.push(E.magFilter);
    g.push(E.minFilter);
    g.push(E.anisotropy);
    g.push(E.internalFormat);
    g.push(E.format);
    g.push(E.type);
    g.push(E.generateMipmaps);
    g.push(E.premultiplyAlpha);
    g.push(E.flipY);
    g.push(E.unpackAlignment);
    g.push(E.colorSpace);
    return g.join();
  }
  function q(E, g) {
    const L = n.get(E);
    if (E.isVideoTexture) {
      Xe(E);
    }
    if (E.isRenderTargetTexture === false && E.isExternalTexture !== true && E.version > 0 && L.__version !== E.version) {
      const X = E.image;
      if (X === null) {
        Ce("WebGLRenderer: Texture marked for update but no image data found.");
      } else if (X.complete === false) {
        Ce("WebGLRenderer: Texture marked for update but image is incomplete");
      } else {
        Y(L, E, g);
        return;
      }
    } else if (E.isExternalTexture) {
      L.__webglTexture = E.sourceTexture ? E.sourceTexture : null;
    }
    t.bindTexture(i.TEXTURE_2D, L.__webglTexture, i.TEXTURE0 + g);
  }
  function V(E, g) {
    const L = n.get(E);
    if (E.isRenderTargetTexture === false && E.version > 0 && L.__version !== E.version) {
      Y(L, E, g);
      return;
    } else if (E.isExternalTexture) {
      L.__webglTexture = E.sourceTexture ? E.sourceTexture : null;
    }
    t.bindTexture(i.TEXTURE_2D_ARRAY, L.__webglTexture, i.TEXTURE0 + g);
  }
  function W(E, g) {
    const L = n.get(E);
    if (E.isRenderTargetTexture === false && E.version > 0 && L.__version !== E.version) {
      Y(L, E, g);
      return;
    }
    t.bindTexture(i.TEXTURE_3D, L.__webglTexture, i.TEXTURE0 + g);
  }
  function Z(E, g) {
    const L = n.get(E);
    if (E.isCubeDepthTexture !== true && E.version > 0 && L.__version !== E.version) {
      j(L, E, g);
      return;
    }
    t.bindTexture(i.TEXTURE_CUBE_MAP, L.__webglTexture, i.TEXTURE0 + g);
  }
  const ue = {
    1000: i.REPEAT,
    1001: i.CLAMP_TO_EDGE,
    1002: i.MIRRORED_REPEAT
  };
  const ae = {
    1003: i.NEAREST,
    1004: i.NEAREST_MIPMAP_NEAREST,
    1005: i.NEAREST_MIPMAP_LINEAR,
    1006: i.LINEAR,
    1007: i.LINEAR_MIPMAP_NEAREST,
    1008: i.LINEAR_MIPMAP_LINEAR
  };
  const he = {
    512: i.NEVER,
    519: i.ALWAYS,
    513: i.LESS,
    515: i.LEQUAL,
    514: i.EQUAL,
    518: i.GEQUAL,
    516: i.GREATER,
    517: i.NOTEQUAL
  };
  function Ue(E, g) {
    if (g.type === 1015 && e.has("OES_texture_float_linear") === false && (g.magFilter === 1006 || g.magFilter === 1007 || g.magFilter === 1005 || g.magFilter === 1008 || g.minFilter === 1006 || g.minFilter === 1007 || g.minFilter === 1005 || g.minFilter === 1008)) {
      Ce("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");
    }
    i.texParameteri(E, i.TEXTURE_WRAP_S, ue[g.wrapS]);
    i.texParameteri(E, i.TEXTURE_WRAP_T, ue[g.wrapT]);
    if (E === i.TEXTURE_3D || E === i.TEXTURE_2D_ARRAY) {
      i.texParameteri(E, i.TEXTURE_WRAP_R, ue[g.wrapR]);
    }
    i.texParameteri(E, i.TEXTURE_MAG_FILTER, ae[g.magFilter]);
    i.texParameteri(E, i.TEXTURE_MIN_FILTER, ae[g.minFilter]);
    if (g.compareFunction) {
      i.texParameteri(E, i.TEXTURE_COMPARE_MODE, i.COMPARE_REF_TO_TEXTURE);
      i.texParameteri(E, i.TEXTURE_COMPARE_FUNC, he[g.compareFunction]);
    }
    if (e.has("EXT_texture_filter_anisotropic") === true) {
      if (g.magFilter === 1003 || g.minFilter !== 1005 && g.minFilter !== 1008 || g.type === 1015 && e.has("OES_texture_float_linear") === false) {
        return;
      }
      if (g.anisotropy > 1 || n.get(g).__currentAnisotropy) {
        const L = e.get("EXT_texture_filter_anisotropic");
        i.texParameterf(E, L.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(g.anisotropy, r.getMaxAnisotropy()));
        n.get(g).__currentAnisotropy = g.anisotropy;
      }
    }
  }
  function Le(E, g) {
    let L = false;
    if (E.__webglInit === undefined) {
      E.__webglInit = true;
      g.addEventListener("dispose", R);
    }
    const X = g.source;
    let K = d.get(X);
    if (K === undefined) {
      K = {};
      d.set(X, K);
    }
    const k = H(g);
    if (k !== E.__cacheKey) {
      if (K[k] === undefined) {
        K[k] = {
          texture: i.createTexture(),
          usedTimes: 0
        };
        o.memory.textures++;
        L = true;
      }
      K[k].usedTimes++;
      const Me = K[E.__cacheKey];
      if (Me !== undefined) {
        K[E.__cacheKey].usedTimes--;
        if (Me.usedTimes === 0) {
          v(g);
        }
      }
      E.__cacheKey = k;
      E.__webglTexture = K[k].texture;
    }
    return L;
  }
  function rt(E, g, L) {
    return Math.floor(Math.floor(E / L) / g);
  }
  function nt(E, g, L, X) {
    const k = E.updateRanges;
    if (k.length === 0) {
      t.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, g.width, g.height, L, X, g.data);
    } else {
      k.sort((Q, re) => Q.start - re.start);
      let Me = 0;
      for (let Q = 1; Q < k.length; Q++) {
        const re = k[Me];
        const ge = k[Q];
        const Se = re.start + re.count;
        const ie = rt(ge.start, g.width, 4);
        const Ie = rt(re.start, g.width, 4);
        if (ge.start <= Se + 1 && ie === Ie && rt(ge.start + ge.count - 1, g.width, 4) === ie) {
          re.count = Math.max(re.count, ge.start + ge.count - re.start);
        } else {
          ++Me;
          k[Me] = ge;
        }
      }
      k.length = Me + 1;
      const ne = i.getParameter(i.UNPACK_ROW_LENGTH);
      const xe = i.getParameter(i.UNPACK_SKIP_PIXELS);
      const Ae = i.getParameter(i.UNPACK_SKIP_ROWS);
      i.pixelStorei(i.UNPACK_ROW_LENGTH, g.width);
      for (let Q = 0, re = k.length; Q < re; Q++) {
        const ge = k[Q];
        const Se = Math.floor(ge.start / 4);
        const ie = Math.ceil(ge.count / 4);
        const Ie = Se % g.width;
        const P = Math.floor(Se / g.width);
        const ce = ie;
        const ee = 1;
        i.pixelStorei(i.UNPACK_SKIP_PIXELS, Ie);
        i.pixelStorei(i.UNPACK_SKIP_ROWS, P);
        t.texSubImage2D(i.TEXTURE_2D, 0, Ie, P, ce, ee, L, X, g.data);
      }
      E.clearUpdateRanges();
      i.pixelStorei(i.UNPACK_ROW_LENGTH, ne);
      i.pixelStorei(i.UNPACK_SKIP_PIXELS, xe);
      i.pixelStorei(i.UNPACK_SKIP_ROWS, Ae);
    }
  }
  function Y(E, g, L) {
    let X = i.TEXTURE_2D;
    if (g.isDataArrayTexture || g.isCompressedArrayTexture) {
      X = i.TEXTURE_2D_ARRAY;
    }
    if (g.isData3DTexture) {
      X = i.TEXTURE_3D;
    }
    const K = Le(E, g);
    const k = g.source;
    t.bindTexture(X, E.__webglTexture, i.TEXTURE0 + L);
    const Me = n.get(k);
    if (k.version !== Me.__version || K === true) {
      t.activeTexture(i.TEXTURE0 + L);
      const ne = Ge.getPrimaries(Ge.workingColorSpace);
      const xe = g.colorSpace === "" ? null : Ge.getPrimaries(g.colorSpace);
      const Ae = g.colorSpace === "" || ne === xe ? i.NONE : i.BROWSER_DEFAULT_WEBGL;
      i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, g.flipY);
      i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, g.premultiplyAlpha);
      i.pixelStorei(i.UNPACK_ALIGNMENT, g.unpackAlignment);
      i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, Ae);
      let Q = _(g.image, false, r.maxTextureSize);
      Q = Qe(g, Q);
      const re = s.convert(g.format, g.colorSpace);
      const ge = s.convert(g.type);
      let Se = y(g.internalFormat, re, ge, g.colorSpace, g.isVideoTexture);
      Ue(X, g);
      let ie;
      const Ie = g.mipmaps;
      const P = g.isVideoTexture !== true;
      const ce = Me.__version === undefined || K === true;
      const ee = k.dataReady;
      const fe = A(g, Q);
      if (g.isDepthTexture) {
        Se = T(g.format === 1027, g.type);
        if (ce) {
          if (P) {
            t.texStorage2D(i.TEXTURE_2D, 1, Se, Q.width, Q.height);
          } else {
            t.texImage2D(i.TEXTURE_2D, 0, Se, Q.width, Q.height, 0, re, ge, null);
          }
        }
      } else if (g.isDataTexture) {
        if (Ie.length > 0) {
          if (P && ce) {
            t.texStorage2D(i.TEXTURE_2D, fe, Se, Ie[0].width, Ie[0].height);
          }
          for (let J = 0, $ = Ie.length; J < $; J++) {
            ie = Ie[J];
            if (P) {
              if (ee) {
                t.texSubImage2D(i.TEXTURE_2D, J, 0, 0, ie.width, ie.height, re, ge, ie.data);
              }
            } else {
              t.texImage2D(i.TEXTURE_2D, J, Se, ie.width, ie.height, 0, re, ge, ie.data);
            }
          }
          g.generateMipmaps = false;
        } else if (P) {
          if (ce) {
            t.texStorage2D(i.TEXTURE_2D, fe, Se, Q.width, Q.height);
          }
          if (ee) {
            nt(g, Q, re, ge);
          }
        } else {
          t.texImage2D(i.TEXTURE_2D, 0, Se, Q.width, Q.height, 0, re, ge, Q.data);
        }
      } else if (g.isCompressedTexture) {
        if (g.isCompressedArrayTexture) {
          if (P && ce) {
            t.texStorage3D(i.TEXTURE_2D_ARRAY, fe, Se, Ie[0].width, Ie[0].height, Q.depth);
          }
          for (let J = 0, $ = Ie.length; J < $; J++) {
            ie = Ie[J];
            if (g.format !== 1023) {
              if (re !== null) {
                if (P) {
                  if (ee) {
                    if (g.layerUpdates.size > 0) {
                      const te = fs(ie.width, ie.height, g.format, g.type);
                      for (const Re of g.layerUpdates) {
                        const et = ie.data.subarray(Re * te / ie.data.BYTES_PER_ELEMENT, (Re + 1) * te / ie.data.BYTES_PER_ELEMENT);
                        t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY, J, 0, 0, Re, ie.width, ie.height, 1, re, et);
                      }
                      g.clearLayerUpdates();
                    } else {
                      t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY, J, 0, 0, 0, ie.width, ie.height, Q.depth, re, ie.data);
                    }
                  }
                } else {
                  t.compressedTexImage3D(i.TEXTURE_2D_ARRAY, J, Se, ie.width, ie.height, Q.depth, 0, ie.data, 0, 0);
                }
              } else {
                Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");
              }
            } else if (P) {
              if (ee) {
                t.texSubImage3D(i.TEXTURE_2D_ARRAY, J, 0, 0, 0, ie.width, ie.height, Q.depth, re, ge, ie.data);
              }
            } else {
              t.texImage3D(i.TEXTURE_2D_ARRAY, J, Se, ie.width, ie.height, Q.depth, 0, re, ge, ie.data);
            }
          }
        } else {
          if (P && ce) {
            t.texStorage2D(i.TEXTURE_2D, fe, Se, Ie[0].width, Ie[0].height);
          }
          for (let J = 0, $ = Ie.length; J < $; J++) {
            ie = Ie[J];
            if (g.format !== 1023) {
              if (re !== null) {
                if (P) {
                  if (ee) {
                    t.compressedTexSubImage2D(i.TEXTURE_2D, J, 0, 0, ie.width, ie.height, re, ie.data);
                  }
                } else {
                  t.compressedTexImage2D(i.TEXTURE_2D, J, Se, ie.width, ie.height, 0, ie.data);
                }
              } else {
                Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");
              }
            } else if (P) {
              if (ee) {
                t.texSubImage2D(i.TEXTURE_2D, J, 0, 0, ie.width, ie.height, re, ge, ie.data);
              }
            } else {
              t.texImage2D(i.TEXTURE_2D, J, Se, ie.width, ie.height, 0, re, ge, ie.data);
            }
          }
        }
      } else if (g.isDataArrayTexture) {
        if (P) {
          if (ce) {
            t.texStorage3D(i.TEXTURE_2D_ARRAY, fe, Se, Q.width, Q.height, Q.depth);
          }
          if (ee) {
            if (g.layerUpdates.size > 0) {
              const J = fs(Q.width, Q.height, g.format, g.type);
              for (const $ of g.layerUpdates) {
                const te = Q.data.subarray($ * J / Q.data.BYTES_PER_ELEMENT, ($ + 1) * J / Q.data.BYTES_PER_ELEMENT);
                t.texSubImage3D(i.TEXTURE_2D_ARRAY, 0, 0, 0, $, Q.width, Q.height, 1, re, ge, te);
              }
              g.clearLayerUpdates();
            } else {
              t.texSubImage3D(i.TEXTURE_2D_ARRAY, 0, 0, 0, 0, Q.width, Q.height, Q.depth, re, ge, Q.data);
            }
          }
        } else {
          t.texImage3D(i.TEXTURE_2D_ARRAY, 0, Se, Q.width, Q.height, Q.depth, 0, re, ge, Q.data);
        }
      } else if (g.isData3DTexture) {
        if (P) {
          if (ce) {
            t.texStorage3D(i.TEXTURE_3D, fe, Se, Q.width, Q.height, Q.depth);
          }
          if (ee) {
            t.texSubImage3D(i.TEXTURE_3D, 0, 0, 0, 0, Q.width, Q.height, Q.depth, re, ge, Q.data);
          }
        } else {
          t.texImage3D(i.TEXTURE_3D, 0, Se, Q.width, Q.height, Q.depth, 0, re, ge, Q.data);
        }
      } else if (g.isFramebufferTexture) {
        if (ce) {
          if (P) {
            t.texStorage2D(i.TEXTURE_2D, fe, Se, Q.width, Q.height);
          } else {
            let J = Q.width;
            let $ = Q.height;
            for (let te = 0; te < fe; te++) {
              t.texImage2D(i.TEXTURE_2D, te, Se, J, $, 0, re, ge, null);
              J >>= 1;
              $ >>= 1;
            }
          }
        }
      } else if (Ie.length > 0) {
        if (P && ce) {
          const J = ve(Ie[0]);
          t.texStorage2D(i.TEXTURE_2D, fe, Se, J.width, J.height);
        }
        for (let J = 0, $ = Ie.length; J < $; J++) {
          ie = Ie[J];
          if (P) {
            if (ee) {
              t.texSubImage2D(i.TEXTURE_2D, J, 0, 0, re, ge, ie);
            }
          } else {
            t.texImage2D(i.TEXTURE_2D, J, Se, re, ge, ie);
          }
        }
        g.generateMipmaps = false;
      } else if (P) {
        if (ce) {
          const J = ve(Q);
          t.texStorage2D(i.TEXTURE_2D, fe, Se, J.width, J.height);
        }
        if (ee) {
          t.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, re, ge, Q);
        }
      } else {
        t.texImage2D(i.TEXTURE_2D, 0, Se, re, ge, Q);
      }
      if (m(g)) {
        h(X);
      }
      Me.__version = k.version;
      if (g.onUpdate) {
        g.onUpdate(g);
      }
    }
    E.__version = g.version;
  }
  function j(E, g, L) {
    if (g.image.length !== 6) {
      return;
    }
    const X = Le(E, g);
    const K = g.source;
    t.bindTexture(i.TEXTURE_CUBE_MAP, E.__webglTexture, i.TEXTURE0 + L);
    const k = n.get(K);
    if (K.version !== k.__version || X === true) {
      t.activeTexture(i.TEXTURE0 + L);
      const Me = Ge.getPrimaries(Ge.workingColorSpace);
      const ne = g.colorSpace === "" ? null : Ge.getPrimaries(g.colorSpace);
      const xe = g.colorSpace === "" || Me === ne ? i.NONE : i.BROWSER_DEFAULT_WEBGL;
      i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, g.flipY);
      i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, g.premultiplyAlpha);
      i.pixelStorei(i.UNPACK_ALIGNMENT, g.unpackAlignment);
      i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, xe);
      const Ae = g.isCompressedTexture || g.image[0].isCompressedTexture;
      const Q = g.image[0] && g.image[0].isDataTexture;
      const re = [];
      for (let $ = 0; $ < 6; $++) {
        if (!Ae && !Q) {
          re[$] = _(g.image[$], true, r.maxCubemapSize);
        } else {
          re[$] = Q ? g.image[$].image : g.image[$];
        }
        re[$] = Qe(g, re[$]);
      }
      const ge = re[0];
      const Se = s.convert(g.format, g.colorSpace);
      const ie = s.convert(g.type);
      const Ie = y(g.internalFormat, Se, ie, g.colorSpace);
      const P = g.isVideoTexture !== true;
      const ce = k.__version === undefined || X === true;
      const ee = K.dataReady;
      let fe = A(g, ge);
      Ue(i.TEXTURE_CUBE_MAP, g);
      let J;
      if (Ae) {
        if (P && ce) {
          t.texStorage2D(i.TEXTURE_CUBE_MAP, fe, Ie, ge.width, ge.height);
        }
        for (let $ = 0; $ < 6; $++) {
          J = re[$].mipmaps;
          for (let te = 0; te < J.length; te++) {
            const Re = J[te];
            if (g.format !== 1023) {
              if (Se !== null) {
                if (P) {
                  if (ee) {
                    t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + $, te, 0, 0, Re.width, Re.height, Se, Re.data);
                  }
                } else {
                  t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + $, te, Ie, Re.width, Re.height, 0, Re.data);
                }
              } else {
                Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");
              }
            } else if (P) {
              if (ee) {
                t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + $, te, 0, 0, Re.width, Re.height, Se, ie, Re.data);
              }
            } else {
              t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + $, te, Ie, Re.width, Re.height, 0, Se, ie, Re.data);
            }
          }
        }
      } else {
        J = g.mipmaps;
        if (P && ce) {
          if (J.length > 0) {
            fe++;
          }
          const $ = ve(re[0]);
          t.texStorage2D(i.TEXTURE_CUBE_MAP, fe, Ie, $.width, $.height);
        }
        for (let $ = 0; $ < 6; $++) {
          if (Q) {
            if (P) {
              if (ee) {
                t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + $, 0, 0, 0, re[$].width, re[$].height, Se, ie, re[$].data);
              }
            } else {
              t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + $, 0, Ie, re[$].width, re[$].height, 0, Se, ie, re[$].data);
            }
            for (let te = 0; te < J.length; te++) {
              const et = J[te].image[$].image;
              if (P) {
                if (ee) {
                  t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + $, te + 1, 0, 0, et.width, et.height, Se, ie, et.data);
                }
              } else {
                t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + $, te + 1, Ie, et.width, et.height, 0, Se, ie, et.data);
              }
            }
          } else {
            if (P) {
              if (ee) {
                t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + $, 0, 0, 0, Se, ie, re[$]);
              }
            } else {
              t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + $, 0, Ie, Se, ie, re[$]);
            }
            for (let te = 0; te < J.length; te++) {
              const Re = J[te];
              if (P) {
                if (ee) {
                  t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + $, te + 1, 0, 0, Se, ie, Re.image[$]);
                }
              } else {
                t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + $, te + 1, Ie, Se, ie, Re.image[$]);
              }
            }
          }
        }
      }
      if (m(g)) {
        h(i.TEXTURE_CUBE_MAP);
      }
      k.__version = K.version;
      if (g.onUpdate) {
        g.onUpdate(g);
      }
    }
    E.__version = g.version;
  }
  function pe(E, g, L, X, K, k) {
    const Me = s.convert(L.format, L.colorSpace);
    const ne = s.convert(L.type);
    const xe = y(L.internalFormat, Me, ne, L.colorSpace);
    const Ae = n.get(g);
    const Q = n.get(L);
    Q.__renderTarget = g;
    if (!Ae.__hasExternalTextures) {
      const re = Math.max(1, g.width >> k);
      const ge = Math.max(1, g.height >> k);
      if (K === i.TEXTURE_3D || K === i.TEXTURE_2D_ARRAY) {
        t.texImage3D(K, k, xe, re, ge, g.depth, 0, Me, ne, null);
      } else {
        t.texImage2D(K, k, xe, re, ge, 0, Me, ne, null);
      }
    }
    t.bindFramebuffer(i.FRAMEBUFFER, E);
    if (ct(g)) {
      a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, X, K, Q.__webglTexture, 0, C(g));
    } else if (K === i.TEXTURE_2D || K >= i.TEXTURE_CUBE_MAP_POSITIVE_X && K <= i.TEXTURE_CUBE_MAP_NEGATIVE_Z) {
      i.framebufferTexture2D(i.FRAMEBUFFER, X, K, Q.__webglTexture, k);
    }
    t.bindFramebuffer(i.FRAMEBUFFER, null);
  }
  function we(E, g, L) {
    i.bindRenderbuffer(i.RENDERBUFFER, E);
    if (g.depthBuffer) {
      const X = g.depthTexture;
      const K = X && X.isDepthTexture ? X.type : null;
      const k = T(g.stencilBuffer, K);
      const Me = g.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT;
      if (ct(g)) {
        a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER, C(g), k, g.width, g.height);
      } else if (L) {
        i.renderbufferStorageMultisample(i.RENDERBUFFER, C(g), k, g.width, g.height);
      } else {
        i.renderbufferStorage(i.RENDERBUFFER, k, g.width, g.height);
      }
      i.framebufferRenderbuffer(i.FRAMEBUFFER, Me, i.RENDERBUFFER, E);
    } else {
      const X = g.textures;
      for (let K = 0; K < X.length; K++) {
        const k = X[K];
        const Me = s.convert(k.format, k.colorSpace);
        const ne = s.convert(k.type);
        const xe = y(k.internalFormat, Me, ne, k.colorSpace);
        if (ct(g)) {
          a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER, C(g), xe, g.width, g.height);
        } else if (L) {
          i.renderbufferStorageMultisample(i.RENDERBUFFER, C(g), xe, g.width, g.height);
        } else {
          i.renderbufferStorage(i.RENDERBUFFER, xe, g.width, g.height);
        }
      }
    }
    i.bindRenderbuffer(i.RENDERBUFFER, null);
  }
  function _e(E, g, L) {
    const X = g.isWebGLCubeRenderTarget === true;
    t.bindFramebuffer(i.FRAMEBUFFER, E);
    if (!g.depthTexture || !g.depthTexture.isDepthTexture) {
      throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
    }
    const K = n.get(g.depthTexture);
    K.__renderTarget = g;
    if (!K.__webglTexture || g.depthTexture.image.width !== g.width || g.depthTexture.image.height !== g.height) {
      g.depthTexture.image.width = g.width;
      g.depthTexture.image.height = g.height;
      g.depthTexture.needsUpdate = true;
    }
    if (X) {
      if (K.__webglInit === undefined) {
        K.__webglInit = true;
        g.depthTexture.addEventListener("dispose", R);
      }
      if (K.__webglTexture === undefined) {
        K.__webglTexture = i.createTexture();
        t.bindTexture(i.TEXTURE_CUBE_MAP, K.__webglTexture);
        Ue(i.TEXTURE_CUBE_MAP, g.depthTexture);
        const Ae = s.convert(g.depthTexture.format);
        const Q = s.convert(g.depthTexture.type);
        let re;
        if (g.depthTexture.format === 1026) {
          re = i.DEPTH_COMPONENT24;
        } else if (g.depthTexture.format === 1027) {
          re = i.DEPTH24_STENCIL8;
        }
        for (let ge = 0; ge < 6; ge++) {
          i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + ge, 0, re, g.width, g.height, 0, Ae, Q, null);
        }
      }
    } else {
      q(g.depthTexture, 0);
    }
    const k = K.__webglTexture;
    const Me = C(g);
    const ne = X ? i.TEXTURE_CUBE_MAP_POSITIVE_X + L : i.TEXTURE_2D;
    const xe = g.depthTexture.format === 1027 ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT;
    if (g.depthTexture.format === 1026) {
      if (ct(g)) {
        a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, xe, ne, k, 0, Me);
      } else {
        i.framebufferTexture2D(i.FRAMEBUFFER, xe, ne, k, 0);
      }
    } else if (g.depthTexture.format === 1027) {
      if (ct(g)) {
        a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, xe, ne, k, 0, Me);
      } else {
        i.framebufferTexture2D(i.FRAMEBUFFER, xe, ne, k, 0);
      }
    } else {
      throw new Error("Unknown depthTexture format");
    }
  }
  function ze(E) {
    const g = n.get(E);
    const L = E.isWebGLCubeRenderTarget === true;
    if (g.__boundDepthTexture !== E.depthTexture) {
      const X = E.depthTexture;
      if (g.__depthDisposeCallback) {
        g.__depthDisposeCallback();
      }
      if (X) {
        const K = () => {
          delete g.__boundDepthTexture;
          delete g.__depthDisposeCallback;
          X.removeEventListener("dispose", K);
        };
        X.addEventListener("dispose", K);
        g.__depthDisposeCallback = K;
      }
      g.__boundDepthTexture = X;
    }
    if (E.depthTexture && !g.__autoAllocateDepthBuffer) {
      if (L) {
        for (let X = 0; X < 6; X++) {
          _e(g.__webglFramebuffer[X], E, X);
        }
      } else {
        const X = E.texture.mipmaps;
        if (X && X.length > 0) {
          _e(g.__webglFramebuffer[0], E, 0);
        } else {
          _e(g.__webglFramebuffer, E, 0);
        }
      }
    } else if (L) {
      g.__webglDepthbuffer = [];
      for (let X = 0; X < 6; X++) {
        t.bindFramebuffer(i.FRAMEBUFFER, g.__webglFramebuffer[X]);
        if (g.__webglDepthbuffer[X] === undefined) {
          g.__webglDepthbuffer[X] = i.createRenderbuffer();
          we(g.__webglDepthbuffer[X], E, false);
        } else {
          const K = E.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT;
          const k = g.__webglDepthbuffer[X];
          i.bindRenderbuffer(i.RENDERBUFFER, k);
          i.framebufferRenderbuffer(i.FRAMEBUFFER, K, i.RENDERBUFFER, k);
        }
      }
    } else {
      const X = E.texture.mipmaps;
      if (X && X.length > 0) {
        t.bindFramebuffer(i.FRAMEBUFFER, g.__webglFramebuffer[0]);
      } else {
        t.bindFramebuffer(i.FRAMEBUFFER, g.__webglFramebuffer);
      }
      if (g.__webglDepthbuffer === undefined) {
        g.__webglDepthbuffer = i.createRenderbuffer();
        we(g.__webglDepthbuffer, E, false);
      } else {
        const K = E.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT;
        const k = g.__webglDepthbuffer;
        i.bindRenderbuffer(i.RENDERBUFFER, k);
        i.framebufferRenderbuffer(i.FRAMEBUFFER, K, i.RENDERBUFFER, k);
      }
    }
    t.bindFramebuffer(i.FRAMEBUFFER, null);
  }
  function dt(E, g, L) {
    const X = n.get(E);
    if (g !== undefined) {
      pe(X.__webglFramebuffer, E, E.texture, i.COLOR_ATTACHMENT0, i.TEXTURE_2D, 0);
    }
    if (L !== undefined) {
      ze(E);
    }
  }
  function Oe(E) {
    const g = E.texture;
    const L = n.get(E);
    const X = n.get(g);
    E.addEventListener("dispose", w);
    const K = E.textures;
    const k = E.isWebGLCubeRenderTarget === true;
    const Me = K.length > 1;
    if (!Me) {
      if (X.__webglTexture === undefined) {
        X.__webglTexture = i.createTexture();
      }
      X.__version = g.version;
      o.memory.textures++;
    }
    if (k) {
      L.__webglFramebuffer = [];
      for (let ne = 0; ne < 6; ne++) {
        if (g.mipmaps && g.mipmaps.length > 0) {
          L.__webglFramebuffer[ne] = [];
          for (let xe = 0; xe < g.mipmaps.length; xe++) {
            L.__webglFramebuffer[ne][xe] = i.createFramebuffer();
          }
        } else {
          L.__webglFramebuffer[ne] = i.createFramebuffer();
        }
      }
    } else {
      if (g.mipmaps && g.mipmaps.length > 0) {
        L.__webglFramebuffer = [];
        for (let ne = 0; ne < g.mipmaps.length; ne++) {
          L.__webglFramebuffer[ne] = i.createFramebuffer();
        }
      } else {
        L.__webglFramebuffer = i.createFramebuffer();
      }
      if (Me) {
        for (let ne = 0, xe = K.length; ne < xe; ne++) {
          const Ae = n.get(K[ne]);
          if (Ae.__webglTexture === undefined) {
            Ae.__webglTexture = i.createTexture();
            o.memory.textures++;
          }
        }
      }
      if (E.samples > 0 && ct(E) === false) {
        L.__webglMultisampledFramebuffer = i.createFramebuffer();
        L.__webglColorRenderbuffer = [];
        t.bindFramebuffer(i.FRAMEBUFFER, L.__webglMultisampledFramebuffer);
        for (let ne = 0; ne < K.length; ne++) {
          const xe = K[ne];
          L.__webglColorRenderbuffer[ne] = i.createRenderbuffer();
          i.bindRenderbuffer(i.RENDERBUFFER, L.__webglColorRenderbuffer[ne]);
          const Ae = s.convert(xe.format, xe.colorSpace);
          const Q = s.convert(xe.type);
          const re = y(xe.internalFormat, Ae, Q, xe.colorSpace, E.isXRRenderTarget === true);
          const ge = C(E);
          i.renderbufferStorageMultisample(i.RENDERBUFFER, ge, re, E.width, E.height);
          i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + ne, i.RENDERBUFFER, L.__webglColorRenderbuffer[ne]);
        }
        i.bindRenderbuffer(i.RENDERBUFFER, null);
        if (E.depthBuffer) {
          L.__webglDepthRenderbuffer = i.createRenderbuffer();
          we(L.__webglDepthRenderbuffer, E, true);
        }
        t.bindFramebuffer(i.FRAMEBUFFER, null);
      }
    }
    if (k) {
      t.bindTexture(i.TEXTURE_CUBE_MAP, X.__webglTexture);
      Ue(i.TEXTURE_CUBE_MAP, g);
      for (let ne = 0; ne < 6; ne++) {
        if (g.mipmaps && g.mipmaps.length > 0) {
          for (let xe = 0; xe < g.mipmaps.length; xe++) {
            pe(L.__webglFramebuffer[ne][xe], E, g, i.COLOR_ATTACHMENT0, i.TEXTURE_CUBE_MAP_POSITIVE_X + ne, xe);
          }
        } else {
          pe(L.__webglFramebuffer[ne], E, g, i.COLOR_ATTACHMENT0, i.TEXTURE_CUBE_MAP_POSITIVE_X + ne, 0);
        }
      }
      if (m(g)) {
        h(i.TEXTURE_CUBE_MAP);
      }
      t.unbindTexture();
    } else if (Me) {
      for (let ne = 0, xe = K.length; ne < xe; ne++) {
        const Ae = K[ne];
        const Q = n.get(Ae);
        let re = i.TEXTURE_2D;
        if (E.isWebGL3DRenderTarget || E.isWebGLArrayRenderTarget) {
          re = E.isWebGL3DRenderTarget ? i.TEXTURE_3D : i.TEXTURE_2D_ARRAY;
        }
        t.bindTexture(re, Q.__webglTexture);
        Ue(re, Ae);
        pe(L.__webglFramebuffer, E, Ae, i.COLOR_ATTACHMENT0 + ne, re, 0);
        if (m(Ae)) {
          h(re);
        }
      }
      t.unbindTexture();
    } else {
      let ne = i.TEXTURE_2D;
      if (E.isWebGL3DRenderTarget || E.isWebGLArrayRenderTarget) {
        ne = E.isWebGL3DRenderTarget ? i.TEXTURE_3D : i.TEXTURE_2D_ARRAY;
      }
      t.bindTexture(ne, X.__webglTexture);
      Ue(ne, g);
      if (g.mipmaps && g.mipmaps.length > 0) {
        for (let xe = 0; xe < g.mipmaps.length; xe++) {
          pe(L.__webglFramebuffer[xe], E, g, i.COLOR_ATTACHMENT0, ne, xe);
        }
      } else {
        pe(L.__webglFramebuffer, E, g, i.COLOR_ATTACHMENT0, ne, 0);
      }
      if (m(g)) {
        h(ne);
      }
      t.unbindTexture();
    }
    if (E.depthBuffer) {
      ze(E);
    }
  }
  function qe(E) {
    const g = E.textures;
    for (let L = 0, X = g.length; L < X; L++) {
      const K = g[L];
      if (m(K)) {
        const k = b(E);
        const Me = n.get(K).__webglTexture;
        t.bindTexture(k, Me);
        h(k);
        t.unbindTexture();
      }
    }
  }
  const je = [];
  const Fe = [];
  function lt(E) {
    if (E.samples > 0) {
      if (ct(E) === false) {
        const g = E.textures;
        const L = E.width;
        const X = E.height;
        let K = i.COLOR_BUFFER_BIT;
        const k = E.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT;
        const Me = n.get(E);
        const ne = g.length > 1;
        if (ne) {
          for (let Ae = 0; Ae < g.length; Ae++) {
            t.bindFramebuffer(i.FRAMEBUFFER, Me.__webglMultisampledFramebuffer);
            i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + Ae, i.RENDERBUFFER, null);
            t.bindFramebuffer(i.FRAMEBUFFER, Me.__webglFramebuffer);
            i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0 + Ae, i.TEXTURE_2D, null, 0);
          }
        }
        t.bindFramebuffer(i.READ_FRAMEBUFFER, Me.__webglMultisampledFramebuffer);
        const xe = E.texture.mipmaps;
        if (xe && xe.length > 0) {
          t.bindFramebuffer(i.DRAW_FRAMEBUFFER, Me.__webglFramebuffer[0]);
        } else {
          t.bindFramebuffer(i.DRAW_FRAMEBUFFER, Me.__webglFramebuffer);
        }
        for (let Ae = 0; Ae < g.length; Ae++) {
          if (E.resolveDepthBuffer) {
            if (E.depthBuffer) {
              K |= i.DEPTH_BUFFER_BIT;
            }
            if (E.stencilBuffer && E.resolveStencilBuffer) {
              K |= i.STENCIL_BUFFER_BIT;
            }
          }
          if (ne) {
            i.framebufferRenderbuffer(i.READ_FRAMEBUFFER, i.COLOR_ATTACHMENT0, i.RENDERBUFFER, Me.__webglColorRenderbuffer[Ae]);
            const Q = n.get(g[Ae]).__webglTexture;
            i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0, i.TEXTURE_2D, Q, 0);
          }
          i.blitFramebuffer(0, 0, L, X, 0, 0, L, X, K, i.NEAREST);
          if (c === true) {
            je.length = 0;
            Fe.length = 0;
            je.push(i.COLOR_ATTACHMENT0 + Ae);
            if (E.depthBuffer && E.resolveDepthBuffer === false) {
              je.push(k);
              Fe.push(k);
              i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER, Fe);
            }
            i.invalidateFramebuffer(i.READ_FRAMEBUFFER, je);
          }
        }
        t.bindFramebuffer(i.READ_FRAMEBUFFER, null);
        t.bindFramebuffer(i.DRAW_FRAMEBUFFER, null);
        if (ne) {
          for (let Ae = 0; Ae < g.length; Ae++) {
            t.bindFramebuffer(i.FRAMEBUFFER, Me.__webglMultisampledFramebuffer);
            i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + Ae, i.RENDERBUFFER, Me.__webglColorRenderbuffer[Ae]);
            const Q = n.get(g[Ae]).__webglTexture;
            t.bindFramebuffer(i.FRAMEBUFFER, Me.__webglFramebuffer);
            i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0 + Ae, i.TEXTURE_2D, Q, 0);
          }
        }
        t.bindFramebuffer(i.DRAW_FRAMEBUFFER, Me.__webglMultisampledFramebuffer);
      } else if (E.depthBuffer && E.resolveDepthBuffer === false && c) {
        const g = E.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT;
        i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER, [g]);
      }
    }
  }
  function C(E) {
    return Math.min(r.maxSamples, E.samples);
  }
  function ct(E) {
    const g = n.get(E);
    return E.samples > 0 && e.has("WEBGL_multisampled_render_to_texture") === true && g.__useRenderToTexture !== false;
  }
  function Xe(E) {
    const g = o.render.frame;
    if (u.get(E) !== g) {
      u.set(E, g);
      E.update();
    }
  }
  function Qe(E, g) {
    const L = E.colorSpace;
    const X = E.format;
    const K = E.type;
    if (E.isCompressedTexture !== true && E.isVideoTexture !== true) {
      if (L !== Nn && L !== "") {
        if (Ge.getTransfer(L) === Ke) {
          if (X !== 1023 || K !== 1009) {
            Ce("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.");
          }
        } else {
          He("WebGLTextures: Unsupported texture color space:", L);
        }
      }
    }
    return g;
  }
  function ve(E) {
    if (typeof HTMLImageElement !== "undefined" && E instanceof HTMLImageElement) {
      l.width = E.naturalWidth || E.width;
      l.height = E.naturalHeight || E.height;
    } else if (typeof VideoFrame !== "undefined" && E instanceof VideoFrame) {
      l.width = E.displayWidth;
      l.height = E.displayHeight;
    } else {
      l.width = E.width;
      l.height = E.height;
    }
    return l;
  }
  this.allocateTextureUnit = N;
  this.resetTextureUnits = O;
  this.setTexture2D = q;
  this.setTexture2DArray = V;
  this.setTexture3D = W;
  this.setTextureCube = Z;
  this.rebindTextures = dt;
  this.setupRenderTarget = Oe;
  this.updateRenderTargetMipmap = qe;
  this.updateMultisampleRenderTarget = lt;
  this.setupDepthRenderbuffer = ze;
  this.setupFrameBufferTexture = pe;
  this.useMultisampledRTT = ct;
  this.isReversedDepthBuffer = function () {
    return t.buffers.depth.getReversed();
  };
}
function tf(i, e) {
  function t(n, r = "") {
    let s;
    const o = Ge.getTransfer(r);
    if (n === 1009) {
      return i.UNSIGNED_BYTE;
    }
    if (n === 1017) {
      return i.UNSIGNED_SHORT_4_4_4_4;
    }
    if (n === 1018) {
      return i.UNSIGNED_SHORT_5_5_5_1;
    }
    if (n === 35902) {
      return i.UNSIGNED_INT_5_9_9_9_REV;
    }
    if (n === 35899) {
      return i.UNSIGNED_INT_10F_11F_11F_REV;
    }
    if (n === 1010) {
      return i.BYTE;
    }
    if (n === 1011) {
      return i.SHORT;
    }
    if (n === 1012) {
      return i.UNSIGNED_SHORT;
    }
    if (n === 1013) {
      return i.INT;
    }
    if (n === 1014) {
      return i.UNSIGNED_INT;
    }
    if (n === 1015) {
      return i.FLOAT;
    }
    if (n === 1016) {
      return i.HALF_FLOAT;
    }
    if (n === 1021) {
      return i.ALPHA;
    }
    if (n === 1022) {
      return i.RGB;
    }
    if (n === 1023) {
      return i.RGBA;
    }
    if (n === 1026) {
      return i.DEPTH_COMPONENT;
    }
    if (n === 1027) {
      return i.DEPTH_STENCIL;
    }
    if (n === 1028) {
      return i.RED;
    }
    if (n === 1029) {
      return i.RED_INTEGER;
    }
    if (n === 1030) {
      return i.RG;
    }
    if (n === 1031) {
      return i.RG_INTEGER;
    }
    if (n === 1033) {
      return i.RGBA_INTEGER;
    }
    if (n === 33776 || n === 33777 || n === 33778 || n === 33779) {
      if (o === Ke) {
        s = e.get("WEBGL_compressed_texture_s3tc_srgb");
        if (s !== null) {
          if (n === 33776) {
            return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;
          }
          if (n === 33777) {
            return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
          }
          if (n === 33778) {
            return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
          }
          if (n === 33779) {
            return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
          }
        } else {
          return null;
        }
      } else {
        s = e.get("WEBGL_compressed_texture_s3tc");
        if (s !== null) {
          if (n === 33776) {
            return s.COMPRESSED_RGB_S3TC_DXT1_EXT;
          }
          if (n === 33777) {
            return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;
          }
          if (n === 33778) {
            return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;
          }
          if (n === 33779) {
            return s.COMPRESSED_RGBA_S3TC_DXT5_EXT;
          }
        } else {
          return null;
        }
      }
    }
    if (n === 35840 || n === 35841 || n === 35842 || n === 35843) {
      s = e.get("WEBGL_compressed_texture_pvrtc");
      if (s !== null) {
        if (n === 35840) {
          return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        }
        if (n === 35841) {
          return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        }
        if (n === 35842) {
          return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        }
        if (n === 35843) {
          return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
        }
      } else {
        return null;
      }
    }
    if (n === 36196 || n === 37492 || n === 37496 || n === 37488 || n === 37489 || n === 37490 || n === 37491) {
      s = e.get("WEBGL_compressed_texture_etc");
      if (s !== null) {
        if (n === 36196 || n === 37492) {
          if (o === Ke) {
            return s.COMPRESSED_SRGB8_ETC2;
          } else {
            return s.COMPRESSED_RGB8_ETC2;
          }
        }
        if (n === 37496) {
          if (o === Ke) {
            return s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC;
          } else {
            return s.COMPRESSED_RGBA8_ETC2_EAC;
          }
        }
        if (n === 37488) {
          return s.COMPRESSED_R11_EAC;
        }
        if (n === 37489) {
          return s.COMPRESSED_SIGNED_R11_EAC;
        }
        if (n === 37490) {
          return s.COMPRESSED_RG11_EAC;
        }
        if (n === 37491) {
          return s.COMPRESSED_SIGNED_RG11_EAC;
        }
      } else {
        return null;
      }
    }
    if (n === 37808 || n === 37809 || n === 37810 || n === 37811 || n === 37812 || n === 37813 || n === 37814 || n === 37815 || n === 37816 || n === 37817 || n === 37818 || n === 37819 || n === 37820 || n === 37821) {
      s = e.get("WEBGL_compressed_texture_astc");
      if (s !== null) {
        if (n === 37808) {
          if (o === Ke) {
            return s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR;
          } else {
            return s.COMPRESSED_RGBA_ASTC_4x4_KHR;
          }
        }
        if (n === 37809) {
          if (o === Ke) {
            return s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR;
          } else {
            return s.COMPRESSED_RGBA_ASTC_5x4_KHR;
          }
        }
        if (n === 37810) {
          if (o === Ke) {
            return s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR;
          } else {
            return s.COMPRESSED_RGBA_ASTC_5x5_KHR;
          }
        }
        if (n === 37811) {
          if (o === Ke) {
            return s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR;
          } else {
            return s.COMPRESSED_RGBA_ASTC_6x5_KHR;
          }
        }
        if (n === 37812) {
          if (o === Ke) {
            return s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR;
          } else {
            return s.COMPRESSED_RGBA_ASTC_6x6_KHR;
          }
        }
        if (n === 37813) {
          if (o === Ke) {
            return s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR;
          } else {
            return s.COMPRESSED_RGBA_ASTC_8x5_KHR;
          }
        }
        if (n === 37814) {
          if (o === Ke) {
            return s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR;
          } else {
            return s.COMPRESSED_RGBA_ASTC_8x6_KHR;
          }
        }
        if (n === 37815) {
          if (o === Ke) {
            return s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR;
          } else {
            return s.COMPRESSED_RGBA_ASTC_8x8_KHR;
          }
        }
        if (n === 37816) {
          if (o === Ke) {
            return s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR;
          } else {
            return s.COMPRESSED_RGBA_ASTC_10x5_KHR;
          }
        }
        if (n === 37817) {
          if (o === Ke) {
            return s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR;
          } else {
            return s.COMPRESSED_RGBA_ASTC_10x6_KHR;
          }
        }
        if (n === 37818) {
          if (o === Ke) {
            return s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR;
          } else {
            return s.COMPRESSED_RGBA_ASTC_10x8_KHR;
          }
        }
        if (n === 37819) {
          if (o === Ke) {
            return s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR;
          } else {
            return s.COMPRESSED_RGBA_ASTC_10x10_KHR;
          }
        }
        if (n === 37820) {
          if (o === Ke) {
            return s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR;
          } else {
            return s.COMPRESSED_RGBA_ASTC_12x10_KHR;
          }
        }
        if (n === 37821) {
          if (o === Ke) {
            return s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR;
          } else {
            return s.COMPRESSED_RGBA_ASTC_12x12_KHR;
          }
        }
      } else {
        return null;
      }
    }
    if (n === 36492 || n === 36494 || n === 36495) {
      s = e.get("EXT_texture_compression_bptc");
      if (s !== null) {
        if (n === 36492) {
          if (o === Ke) {
            return s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT;
          } else {
            return s.COMPRESSED_RGBA_BPTC_UNORM_EXT;
          }
        }
        if (n === 36494) {
          return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
        }
        if (n === 36495) {
          return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
        }
      } else {
        return null;
      }
    }
    if (n === 36283 || n === 36284 || n === 36285 || n === 36286) {
      s = e.get("EXT_texture_compression_rgtc");
      if (s !== null) {
        if (n === 36283) {
          return s.COMPRESSED_RED_RGTC1_EXT;
        }
        if (n === 36284) {
          return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;
        }
        if (n === 36285) {
          return s.COMPRESSED_RED_GREEN_RGTC2_EXT;
        }
        if (n === 36286) {
          return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
        }
      } else {
        return null;
      }
    }
    if (n === 1020) {
      return i.UNSIGNED_INT_24_8;
    } else if (i[n] !== undefined) {
      return i[n];
    } else {
      return null;
    }
  }
  return {
    convert: t
  };
}
const nf = `
void main() {

	gl_Position = vec4( position, 1.0 );

}`;
const rf = `
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;
class sf {
  constructor() {
    this.texture = null;
    this.mesh = null;
    this.depthNear = 0;
    this.depthFar = 0;
  }
  init(e, t) {
    if (this.texture === null) {
      const n = new ea(e.texture);
      if (e.depthNear !== t.depthNear || e.depthFar !== t.depthFar) {
        this.depthNear = e.depthNear;
        this.depthFar = e.depthFar;
      }
      this.texture = n;
    }
  }
  getMesh(e) {
    if (this.texture !== null && this.mesh === null) {
      const t = e.cameras[0].viewport;
      const n = new Wt({
        vertexShader: nf,
        fragmentShader: rf,
        uniforms: {
          depthColor: {
            value: this.texture
          },
          depthWidth: {
            value: t.z
          },
          depthHeight: {
            value: t.w
          }
        }
      });
      this.mesh = new Ot(new Bi(20, 20), n);
    }
    return this.mesh;
  }
  reset() {
    this.texture = null;
    this.mesh = null;
  }
  getDepthTexture() {
    return this.texture;
  }
}
class af extends zn {
  constructor(e, t) {
    super();
    const n = this;
    let r = null;
    let s = 1;
    let o = null;
    let a = "local-floor";
    let c = 1;
    let l = null;
    let u = null;
    let f = null;
    let d = null;
    let p = null;
    let x = null;
    const _ = typeof XRWebGLBinding !== "undefined";
    const m = new sf();
    const h = {};
    const b = t.getContextAttributes();
    let y = null;
    let T = null;
    const A = [];
    const R = [];
    const w = new ke();
    let U = null;
    const v = new Ut();
    v.viewport = new ot();
    const M = new Ut();
    M.viewport = new ot();
    const D = [v, M];
    const O = new mo();
    let N = null;
    let H = null;
    this.cameraAutoUpdate = true;
    this.enabled = false;
    this.isPresenting = false;
    this.getController = function (Y) {
      let j = A[Y];
      if (j === undefined) {
        j = new pr();
        A[Y] = j;
      }
      return j.getTargetRaySpace();
    };
    this.getControllerGrip = function (Y) {
      let j = A[Y];
      if (j === undefined) {
        j = new pr();
        A[Y] = j;
      }
      return j.getGripSpace();
    };
    this.getHand = function (Y) {
      let j = A[Y];
      if (j === undefined) {
        j = new pr();
        A[Y] = j;
      }
      return j.getHandSpace();
    };
    function q(Y) {
      const j = R.indexOf(Y.inputSource);
      if (j === -1) {
        return;
      }
      const pe = A[j];
      if (pe !== undefined) {
        pe.update(Y.inputSource, Y.frame, l || o);
        pe.dispatchEvent({
          type: Y.type,
          data: Y.inputSource
        });
      }
    }
    function V() {
      r.removeEventListener("select", q);
      r.removeEventListener("selectstart", q);
      r.removeEventListener("selectend", q);
      r.removeEventListener("squeeze", q);
      r.removeEventListener("squeezestart", q);
      r.removeEventListener("squeezeend", q);
      r.removeEventListener("end", V);
      r.removeEventListener("inputsourceschange", W);
      for (let Y = 0; Y < A.length; Y++) {
        const j = R[Y];
        if (j !== null) {
          R[Y] = null;
          A[Y].disconnect(j);
        }
      }
      N = null;
      H = null;
      m.reset();
      for (const Y in h) {
        delete h[Y];
      }
      e.setRenderTarget(y);
      p = null;
      d = null;
      f = null;
      r = null;
      T = null;
      nt.stop();
      n.isPresenting = false;
      e.setPixelRatio(U);
      e.setSize(w.width, w.height, false);
      n.dispatchEvent({
        type: "sessionend"
      });
    }
    this.setFramebufferScaleFactor = function (Y) {
      s = Y;
      if (n.isPresenting === true) {
        Ce("WebXRManager: Cannot change framebuffer scale while presenting.");
      }
    };
    this.setReferenceSpaceType = function (Y) {
      a = Y;
      if (n.isPresenting === true) {
        Ce("WebXRManager: Cannot change reference space type while presenting.");
      }
    };
    this.getReferenceSpace = function () {
      return l || o;
    };
    this.setReferenceSpace = function (Y) {
      l = Y;
    };
    this.getBaseLayer = function () {
      if (d !== null) {
        return d;
      } else {
        return p;
      }
    };
    this.getBinding = function () {
      if (f === null && _) {
        f = new XRWebGLBinding(r, t);
      }
      return f;
    };
    this.getFrame = function () {
      return x;
    };
    this.getSession = function () {
      return r;
    };
    this.setSession = async function (Y) {
      r = Y;
      if (r !== null) {
        y = e.getRenderTarget();
        r.addEventListener("select", q);
        r.addEventListener("selectstart", q);
        r.addEventListener("selectend", q);
        r.addEventListener("squeeze", q);
        r.addEventListener("squeezestart", q);
        r.addEventListener("squeezeend", q);
        r.addEventListener("end", V);
        r.addEventListener("inputsourceschange", W);
        if (b.xrCompatible !== true) {
          await t.makeXRCompatible();
        }
        U = e.getPixelRatio();
        e.getSize(w);
        if (_ && "createProjectionLayer" in XRWebGLBinding.prototype) {
          let pe = null;
          let we = null;
          let _e = null;
          if (b.depth) {
            _e = b.stencil ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT24;
            pe = b.stencil ? 1027 : 1026;
            we = b.stencil ? 1020 : 1014;
          }
          const ze = {
            colorFormat: t.RGBA8,
            depthFormat: _e,
            scaleFactor: s
          };
          f = this.getBinding();
          d = f.createProjectionLayer(ze);
          r.updateRenderState({
            layers: [d]
          });
          e.setPixelRatio(1);
          e.setSize(d.textureWidth, d.textureHeight, false);
          T = new Ht(d.textureWidth, d.textureHeight, {
            format: 1023,
            type: 1009,
            depthTexture: new ei(d.textureWidth, d.textureHeight, we, undefined, undefined, undefined, undefined, undefined, undefined, pe),
            stencilBuffer: b.stencil,
            colorSpace: e.outputColorSpace,
            samples: b.antialias ? 4 : 0,
            resolveDepthBuffer: d.ignoreDepthValues === false,
            resolveStencilBuffer: d.ignoreDepthValues === false
          });
        } else {
          const pe = {
            antialias: b.antialias,
            alpha: true,
            depth: b.depth,
            stencil: b.stencil,
            framebufferScaleFactor: s
          };
          p = new XRWebGLLayer(r, t, pe);
          r.updateRenderState({
            baseLayer: p
          });
          e.setPixelRatio(1);
          e.setSize(p.framebufferWidth, p.framebufferHeight, false);
          T = new Ht(p.framebufferWidth, p.framebufferHeight, {
            format: 1023,
            type: 1009,
            colorSpace: e.outputColorSpace,
            stencilBuffer: b.stencil,
            resolveDepthBuffer: p.ignoreDepthValues === false,
            resolveStencilBuffer: p.ignoreDepthValues === false
          });
        }
        T.isXRRenderTarget = true;
        this.setFoveation(c);
        l = null;
        o = await r.requestReferenceSpace(a);
        nt.setContext(r);
        nt.start();
        n.isPresenting = true;
        n.dispatchEvent({
          type: "sessionstart"
        });
      }
    };
    this.getEnvironmentBlendMode = function () {
      if (r !== null) {
        return r.environmentBlendMode;
      }
    };
    this.getDepthTexture = function () {
      return m.getDepthTexture();
    };
    function W(Y) {
      for (let j = 0; j < Y.removed.length; j++) {
        const pe = Y.removed[j];
        const we = R.indexOf(pe);
        if (we >= 0) {
          R[we] = null;
          A[we].disconnect(pe);
        }
      }
      for (let j = 0; j < Y.added.length; j++) {
        const pe = Y.added[j];
        let we = R.indexOf(pe);
        if (we === -1) {
          for (let ze = 0; ze < A.length; ze++) {
            if (ze >= R.length) {
              R.push(pe);
              we = ze;
              break;
            } else if (R[ze] === null) {
              R[ze] = pe;
              we = ze;
              break;
            }
          }
          if (we === -1) {
            break;
          }
        }
        const _e = A[we];
        if (_e) {
          _e.connect(pe);
        }
      }
    }
    const Z = new B();
    const ue = new B();
    function ae(Y, j, pe) {
      Z.setFromMatrixPosition(j.matrixWorld);
      ue.setFromMatrixPosition(pe.matrixWorld);
      const we = Z.distanceTo(ue);
      const _e = j.projectionMatrix.elements;
      const ze = pe.projectionMatrix.elements;
      const dt = _e[14] / (_e[10] - 1);
      const Oe = _e[14] / (_e[10] + 1);
      const qe = (_e[9] + 1) / _e[5];
      const je = (_e[9] - 1) / _e[5];
      const Fe = (_e[8] - 1) / _e[0];
      const lt = (ze[8] + 1) / ze[0];
      const C = dt * Fe;
      const ct = dt * lt;
      const Xe = we / (-Fe + lt);
      const Qe = Xe * -Fe;
      j.matrixWorld.decompose(Y.position, Y.quaternion, Y.scale);
      Y.translateX(Qe);
      Y.translateZ(Xe);
      Y.matrixWorld.compose(Y.position, Y.quaternion, Y.scale);
      Y.matrixWorldInverse.copy(Y.matrixWorld).invert();
      if (_e[10] === -1) {
        Y.projectionMatrix.copy(j.projectionMatrix);
        Y.projectionMatrixInverse.copy(j.projectionMatrixInverse);
      } else {
        const ve = dt + Xe;
        const E = Oe + Xe;
        const g = C - Qe;
        const L = ct + (we - Qe);
        const X = qe * Oe / E * ve;
        const K = je * Oe / E * ve;
        Y.projectionMatrix.makePerspective(g, L, X, K, ve, E);
        Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert();
      }
    }
    function he(Y, j) {
      if (j === null) {
        Y.matrixWorld.copy(Y.matrix);
      } else {
        Y.matrixWorld.multiplyMatrices(j.matrixWorld, Y.matrix);
      }
      Y.matrixWorldInverse.copy(Y.matrixWorld).invert();
    }
    this.updateCamera = function (Y) {
      if (r === null) {
        return;
      }
      let j = Y.near;
      let pe = Y.far;
      if (m.texture !== null) {
        if (m.depthNear > 0) {
          j = m.depthNear;
        }
        if (m.depthFar > 0) {
          pe = m.depthFar;
        }
      }
      O.near = M.near = v.near = j;
      O.far = M.far = v.far = pe;
      if (N !== O.near || H !== O.far) {
        r.updateRenderState({
          depthNear: O.near,
          depthFar: O.far
        });
        N = O.near;
        H = O.far;
      }
      O.layers.mask = Y.layers.mask | 6;
      v.layers.mask = O.layers.mask & 3;
      M.layers.mask = O.layers.mask & 5;
      const we = Y.parent;
      const _e = O.cameras;
      he(O, we);
      for (let ze = 0; ze < _e.length; ze++) {
        he(_e[ze], we);
      }
      if (_e.length === 2) {
        ae(O, v, M);
      } else {
        O.projectionMatrix.copy(v.projectionMatrix);
      }
      Ue(Y, O, we);
    };
    function Ue(Y, j, pe) {
      if (pe === null) {
        Y.matrix.copy(j.matrixWorld);
      } else {
        Y.matrix.copy(pe.matrixWorld);
        Y.matrix.invert();
        Y.matrix.multiply(j.matrixWorld);
      }
      Y.matrix.decompose(Y.position, Y.quaternion, Y.scale);
      Y.updateMatrixWorld(true);
      Y.projectionMatrix.copy(j.projectionMatrix);
      Y.projectionMatrixInverse.copy(j.projectionMatrixInverse);
      if (Y.isPerspectiveCamera) {
        Y.fov = Tr * 2 * Math.atan(1 / Y.projectionMatrix.elements[5]);
        Y.zoom = 1;
      }
    }
    this.getCamera = function () {
      return O;
    };
    this.getFoveation = function () {
      if (d !== null || p !== null) {
        return c;
      }
    };
    this.setFoveation = function (Y) {
      c = Y;
      if (d !== null) {
        d.fixedFoveation = Y;
      }
      if (p !== null && p.fixedFoveation !== undefined) {
        p.fixedFoveation = Y;
      }
    };
    this.hasDepthSensing = function () {
      return m.texture !== null;
    };
    this.getDepthSensingMesh = function () {
      return m.getMesh(O);
    };
    this.getCameraTexture = function (Y) {
      return h[Y];
    };
    let Le = null;
    function rt(Y, j) {
      u = j.getViewerPose(l || o);
      x = j;
      if (u !== null) {
        const pe = u.views;
        if (p !== null) {
          e.setRenderTargetFramebuffer(T, p.framebuffer);
          e.setRenderTarget(T);
        }
        let we = false;
        if (pe.length !== O.cameras.length) {
          O.cameras.length = 0;
          we = true;
        }
        for (let Oe = 0; Oe < pe.length; Oe++) {
          const qe = pe[Oe];
          let je = null;
          if (p !== null) {
            je = p.getViewport(qe);
          } else {
            const lt = f.getViewSubImage(d, qe);
            je = lt.viewport;
            if (Oe === 0) {
              e.setRenderTargetTextures(T, lt.colorTexture, lt.depthStencilTexture);
              e.setRenderTarget(T);
            }
          }
          let Fe = D[Oe];
          if (Fe === undefined) {
            Fe = new Ut();
            Fe.layers.enable(Oe);
            Fe.viewport = new ot();
            D[Oe] = Fe;
          }
          Fe.matrix.fromArray(qe.transform.matrix);
          Fe.matrix.decompose(Fe.position, Fe.quaternion, Fe.scale);
          Fe.projectionMatrix.fromArray(qe.projectionMatrix);
          Fe.projectionMatrixInverse.copy(Fe.projectionMatrix).invert();
          Fe.viewport.set(je.x, je.y, je.width, je.height);
          if (Oe === 0) {
            O.matrix.copy(Fe.matrix);
            O.matrix.decompose(O.position, O.quaternion, O.scale);
          }
          if (we === true) {
            O.cameras.push(Fe);
          }
        }
        const _e = r.enabledFeatures;
        if (_e && _e.includes("depth-sensing") && r.depthUsage == "gpu-optimized" && _) {
          f = n.getBinding();
          const Oe = f.getDepthInformation(pe[0]);
          if (Oe && Oe.isValid && Oe.texture) {
            m.init(Oe, r.renderState);
          }
        }
        if (_e && _e.includes("camera-access") && _) {
          e.state.unbindTexture();
          f = n.getBinding();
          for (let Oe = 0; Oe < pe.length; Oe++) {
            const qe = pe[Oe].camera;
            if (qe) {
              let je = h[qe];
              if (!je) {
                je = new ea();
                h[qe] = je;
              }
              const Fe = f.getCameraImage(qe);
              je.sourceTexture = Fe;
            }
          }
        }
      }
      for (let pe = 0; pe < A.length; pe++) {
        const we = R[pe];
        const _e = A[pe];
        if (we !== null && _e !== undefined) {
          _e.update(we, j, l || o);
        }
      }
      if (Le) {
        Le(Y, j);
      }
      if (j.detectedPlanes) {
        n.dispatchEvent({
          type: "planesdetected",
          data: j
        });
      }
      x = null;
    }
    const nt = new ia();
    nt.setAnimationLoop(rt);
    this.setAnimationLoop = function (Y) {
      Le = Y;
    };
    this.dispose = function () {};
  }
}
const mn = new kt();
const of = new it();
function lf(i, e) {
  function t(m, h) {
    if (m.matrixAutoUpdate === true) {
      m.updateMatrix();
    }
    h.value.copy(m.matrix);
  }
  function n(m, h) {
    h.color.getRGB(m.fogColor.value, Ks(i));
    if (h.isFog) {
      m.fogNear.value = h.near;
      m.fogFar.value = h.far;
    } else if (h.isFogExp2) {
      m.fogDensity.value = h.density;
    }
  }
  function r(m, h, b, y, T) {
    if (h.isMeshBasicMaterial || h.isMeshLambertMaterial) {
      s(m, h);
    } else if (h.isMeshToonMaterial) {
      s(m, h);
      f(m, h);
    } else if (h.isMeshPhongMaterial) {
      s(m, h);
      u(m, h);
    } else if (h.isMeshStandardMaterial) {
      s(m, h);
      d(m, h);
      if (h.isMeshPhysicalMaterial) {
        p(m, h, T);
      }
    } else if (h.isMeshMatcapMaterial) {
      s(m, h);
      x(m, h);
    } else if (h.isMeshDepthMaterial) {
      s(m, h);
    } else if (h.isMeshDistanceMaterial) {
      s(m, h);
      _(m, h);
    } else if (h.isMeshNormalMaterial) {
      s(m, h);
    } else if (h.isLineBasicMaterial) {
      o(m, h);
      if (h.isLineDashedMaterial) {
        a(m, h);
      }
    } else if (h.isPointsMaterial) {
      c(m, h, b, y);
    } else if (h.isSpriteMaterial) {
      l(m, h);
    } else if (h.isShadowMaterial) {
      m.color.value.copy(h.color);
      m.opacity.value = h.opacity;
    } else if (h.isShaderMaterial) {
      h.uniformsNeedUpdate = false;
    }
  }
  function s(m, h) {
    m.opacity.value = h.opacity;
    if (h.color) {
      m.diffuse.value.copy(h.color);
    }
    if (h.emissive) {
      m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity);
    }
    if (h.map) {
      m.map.value = h.map;
      t(h.map, m.mapTransform);
    }
    if (h.alphaMap) {
      m.alphaMap.value = h.alphaMap;
      t(h.alphaMap, m.alphaMapTransform);
    }
    if (h.bumpMap) {
      m.bumpMap.value = h.bumpMap;
      t(h.bumpMap, m.bumpMapTransform);
      m.bumpScale.value = h.bumpScale;
      if (h.side === 1) {
        m.bumpScale.value *= -1;
      }
    }
    if (h.normalMap) {
      m.normalMap.value = h.normalMap;
      t(h.normalMap, m.normalMapTransform);
      m.normalScale.value.copy(h.normalScale);
      if (h.side === 1) {
        m.normalScale.value.negate();
      }
    }
    if (h.displacementMap) {
      m.displacementMap.value = h.displacementMap;
      t(h.displacementMap, m.displacementMapTransform);
      m.displacementScale.value = h.displacementScale;
      m.displacementBias.value = h.displacementBias;
    }
    if (h.emissiveMap) {
      m.emissiveMap.value = h.emissiveMap;
      t(h.emissiveMap, m.emissiveMapTransform);
    }
    if (h.specularMap) {
      m.specularMap.value = h.specularMap;
      t(h.specularMap, m.specularMapTransform);
    }
    if (h.alphaTest > 0) {
      m.alphaTest.value = h.alphaTest;
    }
    const b = e.get(h);
    const y = b.envMap;
    const T = b.envMapRotation;
    if (y) {
      m.envMap.value = y;
      mn.copy(T);
      mn.x *= -1;
      mn.y *= -1;
      mn.z *= -1;
      if (y.isCubeTexture && y.isRenderTargetTexture === false) {
        mn.y *= -1;
        mn.z *= -1;
      }
      m.envMapRotation.value.setFromMatrix4(of.makeRotationFromEuler(mn));
      m.flipEnvMap.value = y.isCubeTexture && y.isRenderTargetTexture === false ? -1 : 1;
      m.reflectivity.value = h.reflectivity;
      m.ior.value = h.ior;
      m.refractionRatio.value = h.refractionRatio;
    }
    if (h.lightMap) {
      m.lightMap.value = h.lightMap;
      m.lightMapIntensity.value = h.lightMapIntensity;
      t(h.lightMap, m.lightMapTransform);
    }
    if (h.aoMap) {
      m.aoMap.value = h.aoMap;
      m.aoMapIntensity.value = h.aoMapIntensity;
      t(h.aoMap, m.aoMapTransform);
    }
  }
  function o(m, h) {
    m.diffuse.value.copy(h.color);
    m.opacity.value = h.opacity;
    if (h.map) {
      m.map.value = h.map;
      t(h.map, m.mapTransform);
    }
  }
  function a(m, h) {
    m.dashSize.value = h.dashSize;
    m.totalSize.value = h.dashSize + h.gapSize;
    m.scale.value = h.scale;
  }
  function c(m, h, b, y) {
    m.diffuse.value.copy(h.color);
    m.opacity.value = h.opacity;
    m.size.value = h.size * b;
    m.scale.value = y * 0.5;
    if (h.map) {
      m.map.value = h.map;
      t(h.map, m.uvTransform);
    }
    if (h.alphaMap) {
      m.alphaMap.value = h.alphaMap;
      t(h.alphaMap, m.alphaMapTransform);
    }
    if (h.alphaTest > 0) {
      m.alphaTest.value = h.alphaTest;
    }
  }
  function l(m, h) {
    m.diffuse.value.copy(h.color);
    m.opacity.value = h.opacity;
    m.rotation.value = h.rotation;
    if (h.map) {
      m.map.value = h.map;
      t(h.map, m.mapTransform);
    }
    if (h.alphaMap) {
      m.alphaMap.value = h.alphaMap;
      t(h.alphaMap, m.alphaMapTransform);
    }
    if (h.alphaTest > 0) {
      m.alphaTest.value = h.alphaTest;
    }
  }
  function u(m, h) {
    m.specular.value.copy(h.specular);
    m.shininess.value = Math.max(h.shininess, 0.0001);
  }
  function f(m, h) {
    if (h.gradientMap) {
      m.gradientMap.value = h.gradientMap;
    }
  }
  function d(m, h) {
    m.metalness.value = h.metalness;
    if (h.metalnessMap) {
      m.metalnessMap.value = h.metalnessMap;
      t(h.metalnessMap, m.metalnessMapTransform);
    }
    m.roughness.value = h.roughness;
    if (h.roughnessMap) {
      m.roughnessMap.value = h.roughnessMap;
      t(h.roughnessMap, m.roughnessMapTransform);
    }
    if (h.envMap) {
      m.envMapIntensity.value = h.envMapIntensity;
    }
  }
  function p(m, h, b) {
    m.ior.value = h.ior;
    if (h.sheen > 0) {
      m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen);
      m.sheenRoughness.value = h.sheenRoughness;
      if (h.sheenColorMap) {
        m.sheenColorMap.value = h.sheenColorMap;
        t(h.sheenColorMap, m.sheenColorMapTransform);
      }
      if (h.sheenRoughnessMap) {
        m.sheenRoughnessMap.value = h.sheenRoughnessMap;
        t(h.sheenRoughnessMap, m.sheenRoughnessMapTransform);
      }
    }
    if (h.clearcoat > 0) {
      m.clearcoat.value = h.clearcoat;
      m.clearcoatRoughness.value = h.clearcoatRoughness;
      if (h.clearcoatMap) {
        m.clearcoatMap.value = h.clearcoatMap;
        t(h.clearcoatMap, m.clearcoatMapTransform);
      }
      if (h.clearcoatRoughnessMap) {
        m.clearcoatRoughnessMap.value = h.clearcoatRoughnessMap;
        t(h.clearcoatRoughnessMap, m.clearcoatRoughnessMapTransform);
      }
      if (h.clearcoatNormalMap) {
        m.clearcoatNormalMap.value = h.clearcoatNormalMap;
        t(h.clearcoatNormalMap, m.clearcoatNormalMapTransform);
        m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale);
        if (h.side === 1) {
          m.clearcoatNormalScale.value.negate();
        }
      }
    }
    if (h.dispersion > 0) {
      m.dispersion.value = h.dispersion;
    }
    if (h.iridescence > 0) {
      m.iridescence.value = h.iridescence;
      m.iridescenceIOR.value = h.iridescenceIOR;
      m.iridescenceThicknessMinimum.value = h.iridescenceThicknessRange[0];
      m.iridescenceThicknessMaximum.value = h.iridescenceThicknessRange[1];
      if (h.iridescenceMap) {
        m.iridescenceMap.value = h.iridescenceMap;
        t(h.iridescenceMap, m.iridescenceMapTransform);
      }
      if (h.iridescenceThicknessMap) {
        m.iridescenceThicknessMap.value = h.iridescenceThicknessMap;
        t(h.iridescenceThicknessMap, m.iridescenceThicknessMapTransform);
      }
    }
    if (h.transmission > 0) {
      m.transmission.value = h.transmission;
      m.transmissionSamplerMap.value = b.texture;
      m.transmissionSamplerSize.value.set(b.width, b.height);
      if (h.transmissionMap) {
        m.transmissionMap.value = h.transmissionMap;
        t(h.transmissionMap, m.transmissionMapTransform);
      }
      m.thickness.value = h.thickness;
      if (h.thicknessMap) {
        m.thicknessMap.value = h.thicknessMap;
        t(h.thicknessMap, m.thicknessMapTransform);
      }
      m.attenuationDistance.value = h.attenuationDistance;
      m.attenuationColor.value.copy(h.attenuationColor);
    }
    if (h.anisotropy > 0) {
      m.anisotropyVector.value.set(h.anisotropy * Math.cos(h.anisotropyRotation), h.anisotropy * Math.sin(h.anisotropyRotation));
      if (h.anisotropyMap) {
        m.anisotropyMap.value = h.anisotropyMap;
        t(h.anisotropyMap, m.anisotropyMapTransform);
      }
    }
    m.specularIntensity.value = h.specularIntensity;
    m.specularColor.value.copy(h.specularColor);
    if (h.specularColorMap) {
      m.specularColorMap.value = h.specularColorMap;
      t(h.specularColorMap, m.specularColorMapTransform);
    }
    if (h.specularIntensityMap) {
      m.specularIntensityMap.value = h.specularIntensityMap;
      t(h.specularIntensityMap, m.specularIntensityMapTransform);
    }
  }
  function x(m, h) {
    if (h.matcap) {
      m.matcap.value = h.matcap;
    }
  }
  function _(m, h) {
    const b = e.get(h).light;
    m.referencePosition.value.setFromMatrixPosition(b.matrixWorld);
    m.nearDistance.value = b.shadow.camera.near;
    m.farDistance.value = b.shadow.camera.far;
  }
  return {
    refreshFogUniforms: n,
    refreshMaterialUniforms: r
  };
}
function cf(i, e, t, n) {
  let r = {};
  let s = {};
  let o = [];
  const a = i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);
  function c(b, y) {
    const T = y.program;
    n.uniformBlockBinding(b, T);
  }
  function l(b, y) {
    let T = r[b.id];
    if (T === undefined) {
      x(b);
      T = u(b);
      r[b.id] = T;
      b.addEventListener("dispose", m);
    }
    const A = y.program;
    n.updateUBOMapping(b, A);
    const R = e.render.frame;
    if (s[b.id] !== R) {
      d(b);
      s[b.id] = R;
    }
  }
  function u(b) {
    const y = f();
    b.__bindingPointIndex = y;
    const T = i.createBuffer();
    const A = b.__size;
    const R = b.usage;
    i.bindBuffer(i.UNIFORM_BUFFER, T);
    i.bufferData(i.UNIFORM_BUFFER, A, R);
    i.bindBuffer(i.UNIFORM_BUFFER, null);
    i.bindBufferBase(i.UNIFORM_BUFFER, y, T);
    return T;
  }
  function f() {
    for (let b = 0; b < a; b++) {
      if (o.indexOf(b) === -1) {
        o.push(b);
        return b;
      }
    }
    He("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.");
    return 0;
  }
  function d(b) {
    const y = r[b.id];
    const T = b.uniforms;
    const A = b.__cache;
    i.bindBuffer(i.UNIFORM_BUFFER, y);
    for (let R = 0, w = T.length; R < w; R++) {
      const U = Array.isArray(T[R]) ? T[R] : [T[R]];
      for (let v = 0, M = U.length; v < M; v++) {
        const D = U[v];
        if (p(D, R, v, A) === true) {
          const O = D.__offset;
          const N = Array.isArray(D.value) ? D.value : [D.value];
          let H = 0;
          for (let q = 0; q < N.length; q++) {
            const V = N[q];
            const W = _(V);
            if (typeof V == "number" || typeof V == "boolean") {
              D.__data[0] = V;
              i.bufferSubData(i.UNIFORM_BUFFER, O + H, D.__data);
            } else if (V.isMatrix3) {
              D.__data[0] = V.elements[0];
              D.__data[1] = V.elements[1];
              D.__data[2] = V.elements[2];
              D.__data[3] = 0;
              D.__data[4] = V.elements[3];
              D.__data[5] = V.elements[4];
              D.__data[6] = V.elements[5];
              D.__data[7] = 0;
              D.__data[8] = V.elements[6];
              D.__data[9] = V.elements[7];
              D.__data[10] = V.elements[8];
              D.__data[11] = 0;
            } else {
              V.toArray(D.__data, H);
              H += W.storage / Float32Array.BYTES_PER_ELEMENT;
            }
          }
          i.bufferSubData(i.UNIFORM_BUFFER, O, D.__data);
        }
      }
    }
    i.bindBuffer(i.UNIFORM_BUFFER, null);
  }
  function p(b, y, T, A) {
    const R = b.value;
    const w = y + "_" + T;
    if (A[w] === undefined) {
      if (typeof R == "number" || typeof R == "boolean") {
        A[w] = R;
      } else {
        A[w] = R.clone();
      }
      return true;
    }
    {
      const U = A[w];
      if (typeof R == "number" || typeof R == "boolean") {
        if (U !== R) {
          A[w] = R;
          return true;
        }
      } else if (U.equals(R) === false) {
        U.copy(R);
        return true;
      }
    }
    return false;
  }
  function x(b) {
    const y = b.uniforms;
    let T = 0;
    const A = 16;
    for (let w = 0, U = y.length; w < U; w++) {
      const v = Array.isArray(y[w]) ? y[w] : [y[w]];
      for (let M = 0, D = v.length; M < D; M++) {
        const O = v[M];
        const N = Array.isArray(O.value) ? O.value : [O.value];
        for (let H = 0, q = N.length; H < q; H++) {
          const V = N[H];
          const W = _(V);
          const Z = T % A;
          const ue = Z % W.boundary;
          const ae = Z + ue;
          T += ue;
          if (ae !== 0 && A - ae < W.storage) {
            T += A - ae;
          }
          O.__data = new Float32Array(W.storage / Float32Array.BYTES_PER_ELEMENT);
          O.__offset = T;
          T += W.storage;
        }
      }
    }
    const R = T % A;
    if (R > 0) {
      T += A - R;
    }
    b.__size = T;
    b.__cache = {};
    return this;
  }
  function _(b) {
    const y = {
      boundary: 0,
      storage: 0
    };
    if (typeof b == "number" || typeof b == "boolean") {
      y.boundary = 4;
      y.storage = 4;
    } else if (b.isVector2) {
      y.boundary = 8;
      y.storage = 8;
    } else if (b.isVector3 || b.isColor) {
      y.boundary = 16;
      y.storage = 12;
    } else if (b.isVector4) {
      y.boundary = 16;
      y.storage = 16;
    } else if (b.isMatrix3) {
      y.boundary = 48;
      y.storage = 48;
    } else if (b.isMatrix4) {
      y.boundary = 64;
      y.storage = 64;
    } else if (b.isTexture) {
      Ce("WebGLRenderer: Texture samplers can not be part of an uniforms group.");
    } else {
      Ce("WebGLRenderer: Unsupported uniform value type.", b);
    }
    return y;
  }
  function m(b) {
    const y = b.target;
    y.removeEventListener("dispose", m);
    const T = o.indexOf(y.__bindingPointIndex);
    o.splice(T, 1);
    i.deleteBuffer(r[y.id]);
    delete r[y.id];
    delete s[y.id];
  }
  function h() {
    for (const b in r) {
      i.deleteBuffer(r[b]);
    }
    o = [];
    r = {};
    s = {};
  }
  return {
    bind: c,
    update: l,
    dispose: h
  };
}
const uf = new Uint16Array([12469, 15057, 12620, 14925, 13266, 14620, 13807, 14376, 14323, 13990, 14545, 13625, 14713, 13328, 14840, 12882, 14931, 12528, 14996, 12233, 15039, 11829, 15066, 11525, 15080, 11295, 15085, 10976, 15082, 10705, 15073, 10495, 13880, 14564, 13898, 14542, 13977, 14430, 14158, 14124, 14393, 13732, 14556, 13410, 14702, 12996, 14814, 12596, 14891, 12291, 14937, 11834, 14957, 11489, 14958, 11194, 14943, 10803, 14921, 10506, 14893, 10278, 14858, 9960, 14484, 14039, 14487, 14025, 14499, 13941, 14524, 13740, 14574, 13468, 14654, 13106, 14743, 12678, 14818, 12344, 14867, 11893, 14889, 11509, 14893, 11180, 14881, 10751, 14852, 10428, 14812, 10128, 14765, 9754, 14712, 9466, 14764, 13480, 14764, 13475, 14766, 13440, 14766, 13347, 14769, 13070, 14786, 12713, 14816, 12387, 14844, 11957, 14860, 11549, 14868, 11215, 14855, 10751, 14825, 10403, 14782, 10044, 14729, 9651, 14666, 9352, 14599, 9029, 14967, 12835, 14966, 12831, 14963, 12804, 14954, 12723, 14936, 12564, 14917, 12347, 14900, 11958, 14886, 11569, 14878, 11247, 14859, 10765, 14828, 10401, 14784, 10011, 14727, 9600, 14660, 9289, 14586, 8893, 14508, 8533, 15111, 12234, 15110, 12234, 15104, 12216, 15092, 12156, 15067, 12010, 15028, 11776, 14981, 11500, 14942, 11205, 14902, 10752, 14861, 10393, 14812, 9991, 14752, 9570, 14682, 9252, 14603, 8808, 14519, 8445, 14431, 8145, 15209, 11449, 15208, 11451, 15202, 11451, 15190, 11438, 15163, 11384, 15117, 11274, 15055, 10979, 14994, 10648, 14932, 10343, 14871, 9936, 14803, 9532, 14729, 9218, 14645, 8742, 14556, 8381, 14461, 8020, 14365, 7603, 15273, 10603, 15272, 10607, 15267, 10619, 15256, 10631, 15231, 10614, 15182, 10535, 15118, 10389, 15042, 10167, 14963, 9787, 14883, 9447, 14800, 9115, 14710, 8665, 14615, 8318, 14514, 7911, 14411, 7507, 14279, 7198, 15314, 9675, 15313, 9683, 15309, 9712, 15298, 9759, 15277, 9797, 15229, 9773, 15166, 9668, 15084, 9487, 14995, 9274, 14898, 8910, 14800, 8539, 14697, 8234, 14590, 7790, 14479, 7409, 14367, 7067, 14178, 6621, 15337, 8619, 15337, 8631, 15333, 8677, 15325, 8769, 15305, 8871, 15264, 8940, 15202, 8909, 15119, 8775, 15022, 8565, 14916, 8328, 14804, 8009, 14688, 7614, 14569, 7287, 14448, 6888, 14321, 6483, 14088, 6171, 15350, 7402, 15350, 7419, 15347, 7480, 15340, 7613, 15322, 7804, 15287, 7973, 15229, 8057, 15148, 8012, 15046, 7846, 14933, 7611, 14810, 7357, 14682, 7069, 14552, 6656, 14421, 6316, 14251, 5948, 14007, 5528, 15356, 5942, 15356, 5977, 15353, 6119, 15348, 6294, 15332, 6551, 15302, 6824, 15249, 7044, 15171, 7122, 15070, 7050, 14949, 6861, 14818, 6611, 14679, 6349, 14538, 6067, 14398, 5651, 14189, 5311, 13935, 4958, 15359, 4123, 15359, 4153, 15356, 4296, 15353, 4646, 15338, 5160, 15311, 5508, 15263, 5829, 15188, 6042, 15088, 6094, 14966, 6001, 14826, 5796, 14678, 5543, 14527, 5287, 14377, 4985, 14133, 4586, 13869, 4257, 15360, 1563, 15360, 1642, 15358, 2076, 15354, 2636, 15341, 3350, 15317, 4019, 15273, 4429, 15203, 4732, 15105, 4911, 14981, 4932, 14836, 4818, 14679, 4621, 14517, 4386, 14359, 4156, 14083, 3795, 13808, 3437, 15360, 122, 15360, 137, 15358, 285, 15355, 636, 15344, 1274, 15322, 2177, 15281, 2765, 15215, 3223, 15120, 3451, 14995, 3569, 14846, 3567, 14681, 3466, 14511, 3305, 14344, 3121, 14037, 2800, 13753, 2467, 15360, 0, 15360, 1, 15359, 21, 15355, 89, 15346, 253, 15325, 479, 15287, 796, 15225, 1148, 15133, 1492, 15008, 1749, 14856, 1882, 14685, 1886, 14506, 1783, 14324, 1608, 13996, 1398, 13702, 1183]);
let zt = null;
function hf() {
  if (zt === null) {
    zt = new Qs(uf, 16, 16, 1030, 1016);
    zt.name = "DFG_LUT";
    zt.minFilter = 1006;
    zt.magFilter = 1006;
    zt.wrapS = 1001;
    zt.wrapT = 1001;
    zt.generateMipmaps = false;
    zt.needsUpdate = true;
  }
  return zt;
}
class Ad {
  constructor(e = {}) {
    const {
      canvas: t = Da(),
      context: n = null,
      depth: r = true,
      stencil: s = false,
      alpha: o = false,
      antialias: a = false,
      premultipliedAlpha: c = true,
      preserveDrawingBuffer: l = false,
      powerPreference: u = "default",
      failIfMajorPerformanceCaveat: f = false,
      reversedDepthBuffer: d = false,
      outputBufferType: p = 1009
    } = e;
    this.isWebGLRenderer = true;
    let x;
    if (n !== null) {
      if (typeof WebGLRenderingContext !== "undefined" && n instanceof WebGLRenderingContext) {
        throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");
      }
      x = n.getContextAttributes().alpha;
    } else {
      x = o;
    }
    const _ = p;
    const m = new Set([1033, 1031, 1029]);
    const h = new Set([1009, 1014, 1012, 1020, 1017, 1018]);
    const b = new Uint32Array(4);
    const y = new Int32Array(4);
    let T = null;
    let A = null;
    const R = [];
    const w = [];
    let U = null;
    this.domElement = t;
    this.debug = {
      checkShaderErrors: true,
      onShaderError: null
    };
    this.autoClear = true;
    this.autoClearColor = true;
    this.autoClearDepth = true;
    this.autoClearStencil = true;
    this.sortObjects = true;
    this.clippingPlanes = [];
    this.localClippingEnabled = false;
    this.toneMapping = 0;
    this.toneMappingExposure = 1;
    this.transmissionResolutionScale = 1;
    const v = this;
    let M = false;
    this._outputColorSpace = Pt;
    let D = 0;
    let O = 0;
    let N = null;
    let H = -1;
    let q = null;
    const V = new ot();
    const W = new ot();
    let Z = null;
    const ue = new We(0);
    let ae = 0;
    let he = t.width;
    let Ue = t.height;
    let Le = 1;
    let rt = null;
    let nt = null;
    const Y = new ot(0, 0, he, Ue);
    const j = new ot(0, 0, he, Ue);
    let pe = false;
    const we = new wr();
    let _e = false;
    let ze = false;
    const dt = new it();
    const Oe = new B();
    const qe = new ot();
    const je = {
      background: null,
      fog: null,
      environment: null,
      overrideMaterial: null,
      isScene: true
    };
    let Fe = false;
    function lt() {
      if (N === null) {
        return Le;
      } else {
        return 1;
      }
    }
    let C = n;
    function ct(S, F) {
      return t.getContext(S, F);
    }
    try {
      const S = {
        alpha: true,
        depth: r,
        stencil: s,
        antialias: a,
        premultipliedAlpha: c,
        preserveDrawingBuffer: l,
        powerPreference: u,
        failIfMajorPerformanceCaveat: f
      };
      if ("setAttribute" in t) {
        t.setAttribute("data-engine", "three.js r182");
      }
      t.addEventListener("webglcontextlost", Re, false);
      t.addEventListener("webglcontextrestored", et, false);
      t.addEventListener("webglcontextcreationerror", Ye, false);
      if (C === null) {
        const F = "webgl2";
        C = ct(F, S);
        if (C === null) {
          throw ct(F) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
        }
      }
    } catch (S) {
      He("WebGLRenderer: " + S.message);
      throw S;
    }
    let Xe;
    let Qe;
    let ve;
    let E;
    let g;
    let L;
    let X;
    let K;
    let k;
    let Me;
    let ne;
    let xe;
    let Ae;
    let Q;
    let re;
    let ge;
    let Se;
    let ie;
    let Ie;
    let P;
    let ce;
    let ee;
    let fe;
    let J;
    function $() {
      Xe = new uu(C);
      Xe.init();
      ee = new tf(C, Xe);
      Qe = new tu(C, Xe, e, ee);
      ve = new Qh(C, Xe);
      if (Qe.reversedDepthBuffer && d) {
        ve.buffers.depth.setReversed(true);
      }
      E = new du(C);
      g = new Oh();
      L = new ef(C, Xe, ve, g, Qe, ee, E);
      X = new iu(v);
      K = new cu(v);
      k = new _o(C);
      fe = new Qc(C, k);
      Me = new hu(C, k, E, fe);
      ne = new mu(C, Me, k, E);
      Ie = new pu(C, Qe, L);
      ge = new nu(g);
      xe = new Bh(v, X, K, Xe, Qe, fe, ge);
      Ae = new lf(v, g);
      Q = new zh();
      re = new qh(Xe);
      ie = new Jc(v, X, K, ve, ne, x, c);
      Se = new jh(v, ne, Qe);
      J = new cf(C, E, Qe, ve);
      P = new eu(C, Xe, E);
      ce = new fu(C, Xe, E);
      E.programs = xe.programs;
      v.capabilities = Qe;
      v.extensions = Xe;
      v.properties = g;
      v.renderLists = Q;
      v.shadowMap = Se;
      v.state = ve;
      v.info = E;
    }
    $();
    if (_ !== 1009) {
      U = new _u(_, t.width, t.height, r, s);
    }
    const te = new af(v, C);
    this.xr = te;
    this.getContext = function () {
      return C;
    };
    this.getContextAttributes = function () {
      return C.getContextAttributes();
    };
    this.forceContextLoss = function () {
      const S = Xe.get("WEBGL_lose_context");
      if (S) {
        S.loseContext();
      }
    };
    this.forceContextRestore = function () {
      const S = Xe.get("WEBGL_lose_context");
      if (S) {
        S.restoreContext();
      }
    };
    this.getPixelRatio = function () {
      return Le;
    };
    this.setPixelRatio = function (S) {
      if (S !== undefined) {
        Le = S;
        this.setSize(he, Ue, false);
      }
    };
    this.getSize = function (S) {
      return S.set(he, Ue);
    };
    this.setSize = function (S, F, z = true) {
      if (te.isPresenting) {
        Ce("WebGLRenderer: Can't change size while VR device is presenting.");
        return;
      }
      he = S;
      Ue = F;
      t.width = Math.floor(S * Le);
      t.height = Math.floor(F * Le);
      if (z === true) {
        t.style.width = S + "px";
        t.style.height = F + "px";
      }
      if (U !== null) {
        U.setSize(t.width, t.height);
      }
      this.setViewport(0, 0, S, F);
    };
    this.getDrawingBufferSize = function (S) {
      return S.set(he * Le, Ue * Le).floor();
    };
    this.setDrawingBufferSize = function (S, F, z) {
      he = S;
      Ue = F;
      Le = z;
      t.width = Math.floor(S * z);
      t.height = Math.floor(F * z);
      this.setViewport(0, 0, S, F);
    };
    this.setEffects = function (S) {
      if (_ === 1009) {
        console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");
        return;
      }
      if (S) {
        for (let F = 0; F < S.length; F++) {
          if (S[F].isOutputPass === true) {
            console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");
            break;
          }
        }
      }
      U.setEffects(S || []);
    };
    this.getCurrentViewport = function (S) {
      return S.copy(V);
    };
    this.getViewport = function (S) {
      return S.copy(Y);
    };
    this.setViewport = function (S, F, z, G) {
      if (S.isVector4) {
        Y.set(S.x, S.y, S.z, S.w);
      } else {
        Y.set(S, F, z, G);
      }
      ve.viewport(V.copy(Y).multiplyScalar(Le).round());
    };
    this.getScissor = function (S) {
      return S.copy(j);
    };
    this.setScissor = function (S, F, z, G) {
      if (S.isVector4) {
        j.set(S.x, S.y, S.z, S.w);
      } else {
        j.set(S, F, z, G);
      }
      ve.scissor(W.copy(j).multiplyScalar(Le).round());
    };
    this.getScissorTest = function () {
      return pe;
    };
    this.setScissorTest = function (S) {
      ve.setScissorTest(pe = S);
    };
    this.setOpaqueSort = function (S) {
      rt = S;
    };
    this.setTransparentSort = function (S) {
      nt = S;
    };
    this.getClearColor = function (S) {
      return S.copy(ie.getClearColor());
    };
    this.setClearColor = function () {
      ie.setClearColor(...arguments);
    };
    this.getClearAlpha = function () {
      return ie.getClearAlpha();
    };
    this.setClearAlpha = function () {
      ie.setClearAlpha(...arguments);
    };
    this.clear = function (S = true, F = true, z = true) {
      let G = 0;
      if (S) {
        let I = false;
        if (N !== null) {
          const se = N.texture.format;
          I = m.has(se);
        }
        if (I) {
          const se = N.texture.type;
          const de = h.has(se);
          const le = ie.getClearColor();
          const me = ie.getClearAlpha();
          const Ee = le.r;
          const be = le.g;
          const Te = le.b;
          if (de) {
            b[0] = Ee;
            b[1] = be;
            b[2] = Te;
            b[3] = me;
            C.clearBufferuiv(C.COLOR, 0, b);
          } else {
            y[0] = Ee;
            y[1] = be;
            y[2] = Te;
            y[3] = me;
            C.clearBufferiv(C.COLOR, 0, y);
          }
        } else {
          G |= C.COLOR_BUFFER_BIT;
        }
      }
      if (F) {
        G |= C.DEPTH_BUFFER_BIT;
      }
      if (z) {
        G |= C.STENCIL_BUFFER_BIT;
        this.state.buffers.stencil.setMask(4294967295);
      }
      C.clear(G);
    };
    this.clearColor = function () {
      this.clear(true, false, false);
    };
    this.clearDepth = function () {
      this.clear(false, true, false);
    };
    this.clearStencil = function () {
      this.clear(false, false, true);
    };
    this.dispose = function () {
      t.removeEventListener("webglcontextlost", Re, false);
      t.removeEventListener("webglcontextrestored", et, false);
      t.removeEventListener("webglcontextcreationerror", Ye, false);
      ie.dispose();
      Q.dispose();
      re.dispose();
      g.dispose();
      X.dispose();
      K.dispose();
      ne.dispose();
      fe.dispose();
      J.dispose();
      xe.dispose();
      te.dispose();
      te.removeEventListener("sessionstart", Ur);
      te.removeEventListener("sessionend", Nr);
      ln.stop();
    };
    function Re(S) {
      S.preventDefault();
      Wr("WebGLRenderer: Context Lost.");
      M = true;
    }
    function et() {
      Wr("WebGLRenderer: Context Restored.");
      M = false;
      const S = E.autoReset;
      const F = Se.enabled;
      const z = Se.autoUpdate;
      const G = Se.needsUpdate;
      const I = Se.type;
      $();
      E.autoReset = S;
      Se.enabled = F;
      Se.autoUpdate = z;
      Se.needsUpdate = G;
      Se.type = I;
    }
    function Ye(S) {
      He("WebGLRenderer: A WebGL context could not be created. Reason: ", S.statusMessage);
    }
    function Gt(S) {
      const F = S.target;
      F.removeEventListener("dispose", Gt);
      Yt(F);
    }
    function Yt(S) {
      Ta(S);
      g.remove(S);
    }
    function Ta(S) {
      const F = g.get(S).programs;
      if (F !== undefined) {
        F.forEach(function (z) {
          xe.releaseProgram(z);
        });
        if (S.isShaderMaterial) {
          xe.releaseShaderCache(S);
        }
      }
    }
    this.renderBufferDirect = function (S, F, z, G, I, se) {
      if (F === null) {
        F = je;
      }
      const de = I.isMesh && I.matrixWorld.determinant() < 0;
      const le = ba(S, F, z, G, I);
      ve.setMaterial(G, de);
      let me = z.index;
      let Ee = 1;
      if (G.wireframe === true) {
        me = Me.getWireframeAttribute(z);
        if (me === undefined) {
          return;
        }
        Ee = 2;
      }
      const be = z.drawRange;
      const Te = z.attributes.position;
      let Ne = be.start * Ee;
      let Ze = (be.start + be.count) * Ee;
      if (se !== null) {
        Ne = Math.max(Ne, se.start * Ee);
        Ze = Math.min(Ze, (se.start + se.count) * Ee);
      }
      if (me !== null) {
        Ne = Math.max(Ne, 0);
        Ze = Math.min(Ze, me.count);
      } else if (Te != null) {
        Ne = Math.max(Ne, 0);
        Ze = Math.min(Ze, Te.count);
      }
      const st = Ze - Ne;
      if (st < 0 || st === Infinity) {
        return;
      }
      fe.setup(I, G, le, z, me);
      let at;
      let Je = P;
      if (me !== null) {
        at = k.get(me);
        Je = ce;
        Je.setIndex(at);
      }
      if (I.isMesh) {
        if (G.wireframe === true) {
          ve.setLineWidth(G.wireframeLinewidth * lt());
          Je.setMode(C.LINES);
        } else {
          Je.setMode(C.TRIANGLES);
        }
      } else if (I.isLine) {
        let ye = G.linewidth;
        if (ye === undefined) {
          ye = 1;
        }
        ve.setLineWidth(ye * lt());
        if (I.isLineSegments) {
          Je.setMode(C.LINES);
        } else if (I.isLineLoop) {
          Je.setMode(C.LINE_LOOP);
        } else {
          Je.setMode(C.LINE_STRIP);
        }
      } else if (I.isPoints) {
        Je.setMode(C.POINTS);
      } else if (I.isSprite) {
        Je.setMode(C.TRIANGLES);
      }
      if (I.isBatchedMesh) {
        if (I._multiDrawInstances !== null) {
          Qn("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection.");
          Je.renderMultiDrawInstances(I._multiDrawStarts, I._multiDrawCounts, I._multiDrawCount, I._multiDrawInstances);
        } else if (Xe.get("WEBGL_multi_draw")) {
          Je.renderMultiDraw(I._multiDrawStarts, I._multiDrawCounts, I._multiDrawCount);
        } else {
          const ye = I._multiDrawStarts;
          const $e = I._multiDrawCounts;
          const Ve = I._multiDrawCount;
          const yt = me ? k.get(me).bytesPerElement : 1;
          const vn = g.get(G).currentProgram.getUniforms();
          for (let bt = 0; bt < Ve; bt++) {
            vn.setValue(C, "_gl_DrawID", bt);
            Je.render(ye[bt] / yt, $e[bt]);
          }
        }
      } else if (I.isInstancedMesh) {
        Je.renderInstances(Ne, st, I.count);
      } else if (z.isInstancedBufferGeometry) {
        const ye = z._maxInstanceCount !== undefined ? z._maxInstanceCount : Infinity;
        const $e = Math.min(z.instanceCount, ye);
        Je.renderInstances(Ne, st, $e);
      } else {
        Je.render(Ne, st);
      }
    };
    function Ir(S, F, z) {
      if (S.transparent === true && S.side === 2 && S.forceSinglePass === false) {
        S.side = 1;
        S.needsUpdate = true;
        hi(S, F, z);
        S.side = 0;
        S.needsUpdate = true;
        hi(S, F, z);
        S.side = 2;
      } else {
        hi(S, F, z);
      }
    }
    this.compile = function (S, F, z = null) {
      if (z === null) {
        z = S;
      }
      A = re.get(z);
      A.init(F);
      w.push(A);
      z.traverseVisible(function (I) {
        if (I.isLight && I.layers.test(F.layers)) {
          A.pushLight(I);
          if (I.castShadow) {
            A.pushShadow(I);
          }
        }
      });
      if (S !== z) {
        S.traverseVisible(function (I) {
          if (I.isLight && I.layers.test(F.layers)) {
            A.pushLight(I);
            if (I.castShadow) {
              A.pushShadow(I);
            }
          }
        });
      }
      A.setupLights();
      const G = new Set();
      S.traverse(function (I) {
        if (!I.isMesh && !I.isPoints && !I.isLine && !I.isSprite) {
          return;
        }
        const se = I.material;
        if (se) {
          if (Array.isArray(se)) {
            for (let de = 0; de < se.length; de++) {
              const le = se[de];
              Ir(le, z, I);
              G.add(le);
            }
          } else {
            Ir(se, z, I);
            G.add(se);
          }
        }
      });
      A = w.pop();
      return G;
    };
    this.compileAsync = function (S, F, z = null) {
      const G = this.compile(S, F, z);
      return new Promise(I => {
        function se() {
          G.forEach(function (de) {
            if (g.get(de).currentProgram.isReady()) {
              G.delete(de);
            }
          });
          if (G.size === 0) {
            I(S);
            return;
          }
          setTimeout(se, 10);
        }
        if (Xe.get("KHR_parallel_shader_compile") !== null) {
          se();
        } else {
          setTimeout(se, 10);
        }
      });
    };
    let ki = null;
    function ya(S) {
      if (ki) {
        ki(S);
      }
    }
    function Ur() {
      ln.stop();
    }
    function Nr() {
      ln.start();
    }
    const ln = new ia();
    ln.setAnimationLoop(ya);
    if (typeof self !== "undefined") {
      ln.setContext(self);
    }
    this.setAnimationLoop = function (S) {
      ki = S;
      te.setAnimationLoop(S);
      if (S === null) {
        ln.stop();
      } else {
        ln.start();
      }
    };
    te.addEventListener("sessionstart", Ur);
    te.addEventListener("sessionend", Nr);
    this.render = function (S, F) {
      if (F !== undefined && F.isCamera !== true) {
        He("WebGLRenderer.render: camera is not an instance of THREE.Camera.");
        return;
      }
      if (M === true) {
        return;
      }
      const z = te.enabled === true && te.isPresenting === true;
      const G = U !== null && (N === null || z) && U.begin(v, N);
      if (S.matrixWorldAutoUpdate === true) {
        S.updateMatrixWorld();
      }
      if (F.parent === null && F.matrixWorldAutoUpdate === true) {
        F.updateMatrixWorld();
      }
      if (te.enabled === true && te.isPresenting === true && (U === null || U.isCompositing() === false)) {
        if (te.cameraAutoUpdate === true) {
          te.updateCamera(F);
        }
        F = te.getCamera();
      }
      if (S.isScene === true) {
        S.onBeforeRender(v, S, F, N);
      }
      A = re.get(S, w.length);
      A.init(F);
      w.push(A);
      dt.multiplyMatrices(F.projectionMatrix, F.matrixWorldInverse);
      we.setFromProjectionMatrix(dt, 2000, F.reversedDepth);
      ze = this.localClippingEnabled;
      _e = ge.init(this.clippingPlanes, ze);
      T = Q.get(S, R.length);
      T.init();
      R.push(T);
      if (te.enabled === true && te.isPresenting === true) {
        const de = v.xr.getDepthSensingMesh();
        if (de !== null) {
          Wi(de, F, -Infinity, v.sortObjects);
        }
      }
      Wi(S, F, 0, v.sortObjects);
      T.finish();
      if (v.sortObjects === true) {
        T.sort(rt, nt);
      }
      Fe = te.enabled === false || te.isPresenting === false || te.hasDepthSensing() === false;
      if (Fe) {
        ie.addToRenderList(T, S);
      }
      this.info.render.frame++;
      if (_e === true) {
        ge.beginShadows();
      }
      const I = A.state.shadowsArray;
      Se.render(I, S, F);
      if (_e === true) {
        ge.endShadows();
      }
      if (this.info.autoReset === true) {
        this.info.reset();
      }
      if ((G && U.hasRenderPass()) === false) {
        const de = T.opaque;
        const le = T.transmissive;
        A.setupLights();
        if (F.isArrayCamera) {
          const me = F.cameras;
          if (le.length > 0) {
            for (let Ee = 0, be = me.length; Ee < be; Ee++) {
              const Te = me[Ee];
              Or(de, le, S, Te);
            }
          }
          if (Fe) {
            ie.render(S);
          }
          for (let Ee = 0, be = me.length; Ee < be; Ee++) {
            const Te = me[Ee];
            Br(T, S, Te, Te.viewport);
          }
        } else {
          if (le.length > 0) {
            Or(de, le, S, F);
          }
          if (Fe) {
            ie.render(S);
          }
          Br(T, S, F);
        }
      }
      if (N !== null && O === 0) {
        L.updateMultisampleRenderTarget(N);
        L.updateRenderTargetMipmap(N);
      }
      if (G) {
        U.end(v);
      }
      if (S.isScene === true) {
        S.onAfterRender(v, S, F);
      }
      fe.resetDefaultState();
      H = -1;
      q = null;
      w.pop();
      if (w.length > 0) {
        A = w[w.length - 1];
        if (_e === true) {
          ge.setGlobalState(v.clippingPlanes, A.state.camera);
        }
      } else {
        A = null;
      }
      R.pop();
      if (R.length > 0) {
        T = R[R.length - 1];
      } else {
        T = null;
      }
    };
    function Wi(S, F, z, G) {
      if (S.visible === false) {
        return;
      }
      if (S.layers.test(F.layers)) {
        if (S.isGroup) {
          z = S.renderOrder;
        } else if (S.isLOD) {
          if (S.autoUpdate === true) {
            S.update(F);
          }
        } else if (S.isLight) {
          A.pushLight(S);
          if (S.castShadow) {
            A.pushShadow(S);
          }
        } else if (S.isSprite) {
          if (!S.frustumCulled || we.intersectsSprite(S)) {
            if (G) {
              qe.setFromMatrixPosition(S.matrixWorld).applyMatrix4(dt);
            }
            const de = ne.update(S);
            const le = S.material;
            if (le.visible) {
              T.push(S, de, le, z, qe.z, null);
            }
          }
        } else if ((S.isMesh || S.isLine || S.isPoints) && (!S.frustumCulled || we.intersectsObject(S))) {
          const de = ne.update(S);
          const le = S.material;
          if (G) {
            if (S.boundingSphere !== undefined) {
              if (S.boundingSphere === null) {
                S.computeBoundingSphere();
              }
              qe.copy(S.boundingSphere.center);
            } else {
              if (de.boundingSphere === null) {
                de.computeBoundingSphere();
              }
              qe.copy(de.boundingSphere.center);
            }
            qe.applyMatrix4(S.matrixWorld).applyMatrix4(dt);
          }
          if (Array.isArray(le)) {
            const me = de.groups;
            for (let Ee = 0, be = me.length; Ee < be; Ee++) {
              const Te = me[Ee];
              const Ne = le[Te.materialIndex];
              if (Ne && Ne.visible) {
                T.push(S, de, Ne, z, qe.z, Te);
              }
            }
          } else if (le.visible) {
            T.push(S, de, le, z, qe.z, null);
          }
        }
      }
      const se = S.children;
      for (let de = 0, le = se.length; de < le; de++) {
        Wi(se[de], F, z, G);
      }
    }
    function Br(S, F, z, G) {
      const {
        opaque: I,
        transmissive: se,
        transparent: de
      } = S;
      A.setupLightsView(z);
      if (_e === true) {
        ge.setGlobalState(v.clippingPlanes, z);
      }
      if (G) {
        ve.viewport(V.copy(G));
      }
      if (I.length > 0) {
        ui(I, F, z);
      }
      if (se.length > 0) {
        ui(se, F, z);
      }
      if (de.length > 0) {
        ui(de, F, z);
      }
      ve.buffers.depth.setTest(true);
      ve.buffers.depth.setMask(true);
      ve.buffers.color.setMask(true);
      ve.setPolygonOffset(false);
    }
    function Or(S, F, z, G) {
      if ((z.isScene === true ? z.overrideMaterial : null) !== null) {
        return;
      }
      if (A.state.transmissionRenderTarget[G.id] === undefined) {
        const Ne = Xe.has("EXT_color_buffer_half_float") || Xe.has("EXT_color_buffer_float");
        A.state.transmissionRenderTarget[G.id] = new Ht(1, 1, {
          generateMipmaps: true,
          type: Ne ? 1016 : 1009,
          minFilter: 1008,
          samples: Qe.samples,
          stencilBuffer: s,
          resolveDepthBuffer: false,
          resolveStencilBuffer: false,
          colorSpace: Ge.workingColorSpace
        });
      }
      const se = A.state.transmissionRenderTarget[G.id];
      const de = G.viewport || V;
      se.setSize(de.z * v.transmissionResolutionScale, de.w * v.transmissionResolutionScale);
      const le = v.getRenderTarget();
      const me = v.getActiveCubeFace();
      const Ee = v.getActiveMipmapLevel();
      v.setRenderTarget(se);
      v.getClearColor(ue);
      ae = v.getClearAlpha();
      if (ae < 1) {
        v.setClearColor(16777215, 0.5);
      }
      v.clear();
      if (Fe) {
        ie.render(z);
      }
      const be = v.toneMapping;
      v.toneMapping = 0;
      const Te = G.viewport;
      if (G.viewport !== undefined) {
        G.viewport = undefined;
      }
      A.setupLightsView(G);
      if (_e === true) {
        ge.setGlobalState(v.clippingPlanes, G);
      }
      ui(S, z, G);
      L.updateMultisampleRenderTarget(se);
      L.updateRenderTargetMipmap(se);
      if (Xe.has("WEBGL_multisampled_render_to_texture") === false) {
        let Ne = false;
        for (let Ze = 0, st = F.length; Ze < st; Ze++) {
          const at = F[Ze];
          const {
            object: Je,
            geometry: ye,
            material: $e,
            group: Ve
          } = at;
          if ($e.side === 2 && Je.layers.test(G.layers)) {
            const yt = $e.side;
            $e.side = 1;
            $e.needsUpdate = true;
            Gr(Je, z, G, ye, $e, Ve);
            $e.side = yt;
            $e.needsUpdate = true;
            Ne = true;
          }
        }
        if (Ne === true) {
          L.updateMultisampleRenderTarget(se);
          L.updateRenderTargetMipmap(se);
        }
      }
      v.setRenderTarget(le, me, Ee);
      v.setClearColor(ue, ae);
      if (Te !== undefined) {
        G.viewport = Te;
      }
      v.toneMapping = be;
    }
    function ui(S, F, z) {
      const G = F.isScene === true ? F.overrideMaterial : null;
      for (let I = 0, se = S.length; I < se; I++) {
        const de = S[I];
        const {
          object: le,
          geometry: me,
          group: Ee
        } = de;
        let be = de.material;
        if (be.allowOverride === true && G !== null) {
          be = G;
        }
        if (le.layers.test(z.layers)) {
          Gr(le, F, z, me, be, Ee);
        }
      }
    }
    function Gr(S, F, z, G, I, se) {
      S.onBeforeRender(v, F, z, G, I, se);
      S.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse, S.matrixWorld);
      S.normalMatrix.getNormalMatrix(S.modelViewMatrix);
      I.onBeforeRender(v, F, z, G, S, se);
      if (I.transparent === true && I.side === 2 && I.forceSinglePass === false) {
        I.side = 1;
        I.needsUpdate = true;
        v.renderBufferDirect(z, F, G, I, S, se);
        I.side = 0;
        I.needsUpdate = true;
        v.renderBufferDirect(z, F, G, I, S, se);
        I.side = 2;
      } else {
        v.renderBufferDirect(z, F, G, I, S, se);
      }
      S.onAfterRender(v, F, z, G, I, se);
    }
    function hi(S, F, z) {
      if (F.isScene !== true) {
        F = je;
      }
      const G = g.get(S);
      const I = A.state.lights;
      const se = A.state.shadowsArray;
      const de = I.state.version;
      const le = xe.getParameters(S, I.state, se, F, z);
      const me = xe.getProgramCacheKey(le);
      let Ee = G.programs;
      G.environment = S.isMeshStandardMaterial ? F.environment : null;
      G.fog = F.fog;
      G.envMap = (S.isMeshStandardMaterial ? K : X).get(S.envMap || G.environment);
      G.envMapRotation = G.environment !== null && S.envMap === null ? F.environmentRotation : S.envMapRotation;
      if (Ee === undefined) {
        S.addEventListener("dispose", Gt);
        Ee = new Map();
        G.programs = Ee;
      }
      let be = Ee.get(me);
      if (be !== undefined) {
        if (G.currentProgram === be && G.lightsStateVersion === de) {
          Vr(S, le);
          return be;
        }
      } else {
        le.uniforms = xe.getUniforms(S);
        S.onBeforeCompile(le, v);
        be = xe.acquireProgram(le, me);
        Ee.set(me, be);
        G.uniforms = le.uniforms;
      }
      const Te = G.uniforms;
      if (!S.isShaderMaterial && !S.isRawShaderMaterial || S.clipping === true) {
        Te.clippingPlanes = ge.uniform;
      }
      Vr(S, le);
      G.needsLights = Ra(S);
      G.lightsStateVersion = de;
      if (G.needsLights) {
        Te.ambientLightColor.value = I.state.ambient;
        Te.lightProbe.value = I.state.probe;
        Te.directionalLights.value = I.state.directional;
        Te.directionalLightShadows.value = I.state.directionalShadow;
        Te.spotLights.value = I.state.spot;
        Te.spotLightShadows.value = I.state.spotShadow;
        Te.rectAreaLights.value = I.state.rectArea;
        Te.ltc_1.value = I.state.rectAreaLTC1;
        Te.ltc_2.value = I.state.rectAreaLTC2;
        Te.pointLights.value = I.state.point;
        Te.pointLightShadows.value = I.state.pointShadow;
        Te.hemisphereLights.value = I.state.hemi;
        Te.directionalShadowMap.value = I.state.directionalShadowMap;
        Te.directionalShadowMatrix.value = I.state.directionalShadowMatrix;
        Te.spotShadowMap.value = I.state.spotShadowMap;
        Te.spotLightMatrix.value = I.state.spotLightMatrix;
        Te.spotLightMap.value = I.state.spotLightMap;
        Te.pointShadowMap.value = I.state.pointShadowMap;
        Te.pointShadowMatrix.value = I.state.pointShadowMatrix;
      }
      G.currentProgram = be;
      G.uniformsList = null;
      return be;
    }
    function zr(S) {
      if (S.uniformsList === null) {
        const F = S.currentProgram.getUniforms();
        S.uniformsList = Fi.seqWithValue(F.seq, S.uniforms);
      }
      return S.uniformsList;
    }
    function Vr(S, F) {
      const z = g.get(S);
      z.outputColorSpace = F.outputColorSpace;
      z.batching = F.batching;
      z.batchingColor = F.batchingColor;
      z.instancing = F.instancing;
      z.instancingColor = F.instancingColor;
      z.instancingMorph = F.instancingMorph;
      z.skinning = F.skinning;
      z.morphTargets = F.morphTargets;
      z.morphNormals = F.morphNormals;
      z.morphColors = F.morphColors;
      z.morphTargetsCount = F.morphTargetsCount;
      z.numClippingPlanes = F.numClippingPlanes;
      z.numIntersection = F.numClipIntersection;
      z.vertexAlphas = F.vertexAlphas;
      z.vertexTangents = F.vertexTangents;
      z.toneMapping = F.toneMapping;
    }
    function ba(S, F, z, G, I) {
      if (F.isScene !== true) {
        F = je;
      }
      L.resetTextureUnits();
      const se = F.fog;
      const de = G.isMeshStandardMaterial ? F.environment : null;
      const le = N === null ? v.outputColorSpace : N.isXRRenderTarget === true ? N.texture.colorSpace : Nn;
      const me = (G.isMeshStandardMaterial ? K : X).get(G.envMap || de);
      const Ee = G.vertexColors === true && !!z.attributes.color && z.attributes.color.itemSize === 4;
      const be = !!z.attributes.tangent && (!!G.normalMap || G.anisotropy > 0);
      const Te = !!z.morphAttributes.position;
      const Ne = !!z.morphAttributes.normal;
      const Ze = !!z.morphAttributes.color;
      let st = 0;
      if (G.toneMapped && (N === null || N.isXRRenderTarget === true)) {
        st = v.toneMapping;
      }
      const at = z.morphAttributes.position || z.morphAttributes.normal || z.morphAttributes.color;
      const Je = at !== undefined ? at.length : 0;
      const ye = g.get(G);
      const $e = A.state.lights;
      if (_e === true && (ze === true || S !== q)) {
        const vt = S === q && G.id === H;
        ge.setState(G, S, vt);
      }
      let Ve = false;
      if (G.version === ye.__version) {
        if (ye.needsLights && ye.lightsStateVersion !== $e.state.version || ye.outputColorSpace !== le || I.isBatchedMesh && ye.batching === false || !I.isBatchedMesh && ye.batching === true || I.isBatchedMesh && ye.batchingColor === true && I.colorTexture === null || I.isBatchedMesh && ye.batchingColor === false && I.colorTexture !== null || I.isInstancedMesh && ye.instancing === false || !I.isInstancedMesh && ye.instancing === true || I.isSkinnedMesh && ye.skinning === false || !I.isSkinnedMesh && ye.skinning === true || I.isInstancedMesh && ye.instancingColor === true && I.instanceColor === null || I.isInstancedMesh && ye.instancingColor === false && I.instanceColor !== null || I.isInstancedMesh && ye.instancingMorph === true && I.morphTexture === null || I.isInstancedMesh && ye.instancingMorph === false && I.morphTexture !== null || ye.envMap !== me || G.fog === true && ye.fog !== se || ye.numClippingPlanes !== undefined && (ye.numClippingPlanes !== ge.numPlanes || ye.numIntersection !== ge.numIntersection) || ye.vertexAlphas !== Ee || ye.vertexTangents !== be || ye.morphTargets !== Te || ye.morphNormals !== Ne || ye.morphColors !== Ze || ye.toneMapping !== st || ye.morphTargetsCount !== Je) {
          Ve = true;
        }
      } else {
        Ve = true;
        ye.__version = G.version;
      }
      let yt = ye.currentProgram;
      if (Ve === true) {
        yt = hi(G, F, I);
      }
      let vn = false;
      let bt = false;
      let Hn = false;
      const tt = yt.getUniforms();
      const Mt = ye.uniforms;
      if (ve.useProgram(yt.program)) {
        vn = true;
        bt = true;
        Hn = true;
      }
      if (G.id !== H) {
        H = G.id;
        bt = true;
      }
      if (vn || q !== S) {
        if (ve.buffers.depth.getReversed() && S.reversedDepth !== true) {
          S._reversedDepth = true;
          S.updateProjectionMatrix();
        }
        tt.setValue(C, "projectionMatrix", S.projectionMatrix);
        tt.setValue(C, "viewMatrix", S.matrixWorldInverse);
        const Et = tt.map.cameraPosition;
        if (Et !== undefined) {
          Et.setValue(C, Oe.setFromMatrixPosition(S.matrixWorld));
        }
        if (Qe.logarithmicDepthBuffer) {
          tt.setValue(C, "logDepthBufFC", 2 / (Math.log(S.far + 1) / Math.LN2));
        }
        if (G.isMeshPhongMaterial || G.isMeshToonMaterial || G.isMeshLambertMaterial || G.isMeshBasicMaterial || G.isMeshStandardMaterial || G.isShaderMaterial) {
          tt.setValue(C, "isOrthographic", S.isOrthographicCamera === true);
        }
        if (q !== S) {
          q = S;
          bt = true;
          Hn = true;
        }
      }
      if (ye.needsLights) {
        if ($e.state.directionalShadowMap.length > 0) {
          tt.setValue(C, "directionalShadowMap", $e.state.directionalShadowMap, L);
        }
        if ($e.state.spotShadowMap.length > 0) {
          tt.setValue(C, "spotShadowMap", $e.state.spotShadowMap, L);
        }
        if ($e.state.pointShadowMap.length > 0) {
          tt.setValue(C, "pointShadowMap", $e.state.pointShadowMap, L);
        }
      }
      if (I.isSkinnedMesh) {
        tt.setOptional(C, I, "bindMatrix");
        tt.setOptional(C, I, "bindMatrixInverse");
        const vt = I.skeleton;
        if (vt) {
          if (vt.boneTexture === null) {
            vt.computeBoneTexture();
          }
          tt.setValue(C, "boneTexture", vt.boneTexture, L);
        }
      }
      if (I.isBatchedMesh) {
        tt.setOptional(C, I, "batchingTexture");
        tt.setValue(C, "batchingTexture", I._matricesTexture, L);
        tt.setOptional(C, I, "batchingIdTexture");
        tt.setValue(C, "batchingIdTexture", I._indirectTexture, L);
        tt.setOptional(C, I, "batchingColorTexture");
        if (I._colorsTexture !== null) {
          tt.setValue(C, "batchingColorTexture", I._colorsTexture, L);
        }
      }
      const Ct = z.morphAttributes;
      if (Ct.position !== undefined || Ct.normal !== undefined || Ct.color !== undefined) {
        Ie.update(I, z, yt);
      }
      if (bt || ye.receiveShadow !== I.receiveShadow) {
        ye.receiveShadow = I.receiveShadow;
        tt.setValue(C, "receiveShadow", I.receiveShadow);
      }
      if (G.isMeshGouraudMaterial && G.envMap !== null) {
        Mt.envMap.value = me;
        Mt.flipEnvMap.value = me.isCubeTexture && me.isRenderTargetTexture === false ? -1 : 1;
      }
      if (G.isMeshStandardMaterial && G.envMap === null && F.environment !== null) {
        Mt.envMapIntensity.value = F.environmentIntensity;
      }
      if (Mt.dfgLUT !== undefined) {
        Mt.dfgLUT.value = hf();
      }
      if (bt) {
        tt.setValue(C, "toneMappingExposure", v.toneMappingExposure);
        if (ye.needsLights) {
          Aa(Mt, Hn);
        }
        if (se && G.fog === true) {
          Ae.refreshFogUniforms(Mt, se);
        }
        Ae.refreshMaterialUniforms(Mt, G, Le, Ue, A.state.transmissionRenderTarget[S.id]);
        Fi.upload(C, zr(ye), Mt, L);
      }
      if (G.isShaderMaterial && G.uniformsNeedUpdate === true) {
        Fi.upload(C, zr(ye), Mt, L);
        G.uniformsNeedUpdate = false;
      }
      if (G.isSpriteMaterial) {
        tt.setValue(C, "center", I.center);
      }
      tt.setValue(C, "modelViewMatrix", I.modelViewMatrix);
      tt.setValue(C, "normalMatrix", I.normalMatrix);
      tt.setValue(C, "modelMatrix", I.matrixWorld);
      if (G.isShaderMaterial || G.isRawShaderMaterial) {
        const vt = G.uniformsGroups;
        for (let Et = 0, Xi = vt.length; Et < Xi; Et++) {
          const cn = vt[Et];
          J.update(cn, yt);
          J.bind(cn, yt);
        }
      }
      return yt;
    }
    function Aa(S, F) {
      S.ambientLightColor.needsUpdate = F;
      S.lightProbe.needsUpdate = F;
      S.directionalLights.needsUpdate = F;
      S.directionalLightShadows.needsUpdate = F;
      S.pointLights.needsUpdate = F;
      S.pointLightShadows.needsUpdate = F;
      S.spotLights.needsUpdate = F;
      S.spotLightShadows.needsUpdate = F;
      S.rectAreaLights.needsUpdate = F;
      S.hemisphereLights.needsUpdate = F;
    }
    function Ra(S) {
      return S.isMeshLambertMaterial || S.isMeshToonMaterial || S.isMeshPhongMaterial || S.isMeshStandardMaterial || S.isShadowMaterial || S.isShaderMaterial && S.lights === true;
    }
    this.getActiveCubeFace = function () {
      return D;
    };
    this.getActiveMipmapLevel = function () {
      return O;
    };
    this.getRenderTarget = function () {
      return N;
    };
    this.setRenderTargetTextures = function (S, F, z) {
      const G = g.get(S);
      G.__autoAllocateDepthBuffer = S.resolveDepthBuffer === false;
      if (G.__autoAllocateDepthBuffer === false) {
        G.__useRenderToTexture = false;
      }
      g.get(S.texture).__webglTexture = F;
      g.get(S.depthTexture).__webglTexture = G.__autoAllocateDepthBuffer ? undefined : z;
      G.__hasExternalTextures = true;
    };
    this.setRenderTargetFramebuffer = function (S, F) {
      const z = g.get(S);
      z.__webglFramebuffer = F;
      z.__useDefaultFramebuffer = F === undefined;
    };
    const Ca = C.createFramebuffer();
    this.setRenderTarget = function (S, F = 0, z = 0) {
      N = S;
      D = F;
      O = z;
      let G = null;
      let I = false;
      let se = false;
      if (S) {
        const le = g.get(S);
        if (le.__useDefaultFramebuffer !== undefined) {
          ve.bindFramebuffer(C.FRAMEBUFFER, le.__webglFramebuffer);
          V.copy(S.viewport);
          W.copy(S.scissor);
          Z = S.scissorTest;
          ve.viewport(V);
          ve.scissor(W);
          ve.setScissorTest(Z);
          H = -1;
          return;
        } else if (le.__webglFramebuffer === undefined) {
          L.setupRenderTarget(S);
        } else if (le.__hasExternalTextures) {
          L.rebindTextures(S, g.get(S.texture).__webglTexture, g.get(S.depthTexture).__webglTexture);
        } else if (S.depthBuffer) {
          const be = S.depthTexture;
          if (le.__boundDepthTexture !== be) {
            if (be !== null && g.has(be) && (S.width !== be.image.width || S.height !== be.image.height)) {
              throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");
            }
            L.setupDepthRenderbuffer(S);
          }
        }
        const me = S.texture;
        if (me.isData3DTexture || me.isDataArrayTexture || me.isCompressedArrayTexture) {
          se = true;
        }
        const Ee = g.get(S).__webglFramebuffer;
        if (S.isWebGLCubeRenderTarget) {
          if (Array.isArray(Ee[F])) {
            G = Ee[F][z];
          } else {
            G = Ee[F];
          }
          I = true;
        } else if (S.samples > 0 && L.useMultisampledRTT(S) === false) {
          G = g.get(S).__webglMultisampledFramebuffer;
        } else if (Array.isArray(Ee)) {
          G = Ee[z];
        } else {
          G = Ee;
        }
        V.copy(S.viewport);
        W.copy(S.scissor);
        Z = S.scissorTest;
      } else {
        V.copy(Y).multiplyScalar(Le).floor();
        W.copy(j).multiplyScalar(Le).floor();
        Z = pe;
      }
      if (z !== 0) {
        G = Ca;
      }
      if (ve.bindFramebuffer(C.FRAMEBUFFER, G)) {
        ve.drawBuffers(S, G);
      }
      ve.viewport(V);
      ve.scissor(W);
      ve.setScissorTest(Z);
      if (I) {
        const le = g.get(S.texture);
        C.framebufferTexture2D(C.FRAMEBUFFER, C.COLOR_ATTACHMENT0, C.TEXTURE_CUBE_MAP_POSITIVE_X + F, le.__webglTexture, z);
      } else if (se) {
        const le = F;
        for (let me = 0; me < S.textures.length; me++) {
          const Ee = g.get(S.textures[me]);
          C.framebufferTextureLayer(C.FRAMEBUFFER, C.COLOR_ATTACHMENT0 + me, Ee.__webglTexture, z, le);
        }
      } else if (S !== null && z !== 0) {
        const le = g.get(S.texture);
        C.framebufferTexture2D(C.FRAMEBUFFER, C.COLOR_ATTACHMENT0, C.TEXTURE_2D, le.__webglTexture, z);
      }
      H = -1;
    };
    this.readRenderTargetPixels = function (S, F, z, G, I, se, de, le = 0) {
      if (!S || !S.isWebGLRenderTarget) {
        He("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
        return;
      }
      let me = g.get(S).__webglFramebuffer;
      if (S.isWebGLCubeRenderTarget && de !== undefined) {
        me = me[de];
      }
      if (me) {
        ve.bindFramebuffer(C.FRAMEBUFFER, me);
        try {
          const Ee = S.textures[le];
          const be = Ee.format;
          const Te = Ee.type;
          if (!Qe.textureFormatReadable(be)) {
            He("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
            return;
          }
          if (!Qe.textureTypeReadable(Te)) {
            He("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
            return;
          }
          if (F >= 0 && F <= S.width - G && z >= 0 && z <= S.height - I) {
            if (S.textures.length > 1) {
              C.readBuffer(C.COLOR_ATTACHMENT0 + le);
            }
            C.readPixels(F, z, G, I, ee.convert(be), ee.convert(Te), se);
          }
        } finally {
          const Ee = N !== null ? g.get(N).__webglFramebuffer : null;
          ve.bindFramebuffer(C.FRAMEBUFFER, Ee);
        }
      }
    };
    this.readRenderTargetPixelsAsync = async function (S, F, z, G, I, se, de, le = 0) {
      if (!S || !S.isWebGLRenderTarget) {
        throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
      }
      let me = g.get(S).__webglFramebuffer;
      if (S.isWebGLCubeRenderTarget && de !== undefined) {
        me = me[de];
      }
      if (me) {
        if (F >= 0 && F <= S.width - G && z >= 0 && z <= S.height - I) {
          ve.bindFramebuffer(C.FRAMEBUFFER, me);
          const Ee = S.textures[le];
          const be = Ee.format;
          const Te = Ee.type;
          if (!Qe.textureFormatReadable(be)) {
            throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");
          }
          if (!Qe.textureTypeReadable(Te)) {
            throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");
          }
          const Ne = C.createBuffer();
          C.bindBuffer(C.PIXEL_PACK_BUFFER, Ne);
          C.bufferData(C.PIXEL_PACK_BUFFER, se.byteLength, C.STREAM_READ);
          if (S.textures.length > 1) {
            C.readBuffer(C.COLOR_ATTACHMENT0 + le);
          }
          C.readPixels(F, z, G, I, ee.convert(be), ee.convert(Te), 0);
          const Ze = N !== null ? g.get(N).__webglFramebuffer : null;
          ve.bindFramebuffer(C.FRAMEBUFFER, Ze);
          const st = C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE, 0);
          C.flush();
          await La(C, st, 4);
          C.bindBuffer(C.PIXEL_PACK_BUFFER, Ne);
          C.getBufferSubData(C.PIXEL_PACK_BUFFER, 0, se);
          C.deleteBuffer(Ne);
          C.deleteSync(st);
          return se;
        } else {
          throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.");
        }
      }
    };
    this.copyFramebufferToTexture = function (S, F = null, z = 0) {
      const G = Math.pow(2, -z);
      const I = Math.floor(S.image.width * G);
      const se = Math.floor(S.image.height * G);
      const de = F !== null ? F.x : 0;
      const le = F !== null ? F.y : 0;
      L.setTexture2D(S, 0);
      C.copyTexSubImage2D(C.TEXTURE_2D, z, 0, 0, de, le, I, se);
      ve.unbindTexture();
    };
    const wa = C.createFramebuffer();
    const Pa = C.createFramebuffer();
    this.copyTextureToTexture = function (S, F, z = null, G = null, I = 0, se = null) {
      if (se === null) {
        if (I !== 0) {
          Qn("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels.");
          se = I;
          I = 0;
        } else {
          se = 0;
        }
      }
      let de;
      let le;
      let me;
      let Ee;
      let be;
      let Te;
      let Ne;
      let Ze;
      let st;
      const at = S.isCompressedTexture ? S.mipmaps[se] : S.image;
      if (z !== null) {
        de = z.max.x - z.min.x;
        le = z.max.y - z.min.y;
        me = z.isBox3 ? z.max.z - z.min.z : 1;
        Ee = z.min.x;
        be = z.min.y;
        Te = z.isBox3 ? z.min.z : 0;
      } else {
        const Ct = Math.pow(2, -I);
        de = Math.floor(at.width * Ct);
        le = Math.floor(at.height * Ct);
        if (S.isDataArrayTexture) {
          me = at.depth;
        } else if (S.isData3DTexture) {
          me = Math.floor(at.depth * Ct);
        } else {
          me = 1;
        }
        Ee = 0;
        be = 0;
        Te = 0;
      }
      if (G !== null) {
        Ne = G.x;
        Ze = G.y;
        st = G.z;
      } else {
        Ne = 0;
        Ze = 0;
        st = 0;
      }
      const Je = ee.convert(F.format);
      const ye = ee.convert(F.type);
      let $e;
      if (F.isData3DTexture) {
        L.setTexture3D(F, 0);
        $e = C.TEXTURE_3D;
      } else if (F.isDataArrayTexture || F.isCompressedArrayTexture) {
        L.setTexture2DArray(F, 0);
        $e = C.TEXTURE_2D_ARRAY;
      } else {
        L.setTexture2D(F, 0);
        $e = C.TEXTURE_2D;
      }
      C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL, F.flipY);
      C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL, F.premultiplyAlpha);
      C.pixelStorei(C.UNPACK_ALIGNMENT, F.unpackAlignment);
      const Ve = C.getParameter(C.UNPACK_ROW_LENGTH);
      const yt = C.getParameter(C.UNPACK_IMAGE_HEIGHT);
      const vn = C.getParameter(C.UNPACK_SKIP_PIXELS);
      const bt = C.getParameter(C.UNPACK_SKIP_ROWS);
      const Hn = C.getParameter(C.UNPACK_SKIP_IMAGES);
      C.pixelStorei(C.UNPACK_ROW_LENGTH, at.width);
      C.pixelStorei(C.UNPACK_IMAGE_HEIGHT, at.height);
      C.pixelStorei(C.UNPACK_SKIP_PIXELS, Ee);
      C.pixelStorei(C.UNPACK_SKIP_ROWS, be);
      C.pixelStorei(C.UNPACK_SKIP_IMAGES, Te);
      const tt = S.isDataArrayTexture || S.isData3DTexture;
      const Mt = F.isDataArrayTexture || F.isData3DTexture;
      if (S.isDepthTexture) {
        const Ct = g.get(S);
        const vt = g.get(F);
        const Et = g.get(Ct.__renderTarget);
        const Xi = g.get(vt.__renderTarget);
        ve.bindFramebuffer(C.READ_FRAMEBUFFER, Et.__webglFramebuffer);
        ve.bindFramebuffer(C.DRAW_FRAMEBUFFER, Xi.__webglFramebuffer);
        for (let cn = 0; cn < me; cn++) {
          if (tt) {
            C.framebufferTextureLayer(C.READ_FRAMEBUFFER, C.COLOR_ATTACHMENT0, g.get(S).__webglTexture, I, Te + cn);
            C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER, C.COLOR_ATTACHMENT0, g.get(F).__webglTexture, se, st + cn);
          }
          C.blitFramebuffer(Ee, be, de, le, Ne, Ze, de, le, C.DEPTH_BUFFER_BIT, C.NEAREST);
        }
        ve.bindFramebuffer(C.READ_FRAMEBUFFER, null);
        ve.bindFramebuffer(C.DRAW_FRAMEBUFFER, null);
      } else if (I !== 0 || S.isRenderTargetTexture || g.has(S)) {
        const Ct = g.get(S);
        const vt = g.get(F);
        ve.bindFramebuffer(C.READ_FRAMEBUFFER, wa);
        ve.bindFramebuffer(C.DRAW_FRAMEBUFFER, Pa);
        for (let Et = 0; Et < me; Et++) {
          if (tt) {
            C.framebufferTextureLayer(C.READ_FRAMEBUFFER, C.COLOR_ATTACHMENT0, Ct.__webglTexture, I, Te + Et);
          } else {
            C.framebufferTexture2D(C.READ_FRAMEBUFFER, C.COLOR_ATTACHMENT0, C.TEXTURE_2D, Ct.__webglTexture, I);
          }
          if (Mt) {
            C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER, C.COLOR_ATTACHMENT0, vt.__webglTexture, se, st + Et);
          } else {
            C.framebufferTexture2D(C.DRAW_FRAMEBUFFER, C.COLOR_ATTACHMENT0, C.TEXTURE_2D, vt.__webglTexture, se);
          }
          if (I !== 0) {
            C.blitFramebuffer(Ee, be, de, le, Ne, Ze, de, le, C.COLOR_BUFFER_BIT, C.NEAREST);
          } else if (Mt) {
            C.copyTexSubImage3D($e, se, Ne, Ze, st + Et, Ee, be, de, le);
          } else {
            C.copyTexSubImage2D($e, se, Ne, Ze, Ee, be, de, le);
          }
        }
        ve.bindFramebuffer(C.READ_FRAMEBUFFER, null);
        ve.bindFramebuffer(C.DRAW_FRAMEBUFFER, null);
      } else if (Mt) {
        if (S.isDataTexture || S.isData3DTexture) {
          C.texSubImage3D($e, se, Ne, Ze, st, de, le, me, Je, ye, at.data);
        } else if (F.isCompressedArrayTexture) {
          C.compressedTexSubImage3D($e, se, Ne, Ze, st, de, le, me, Je, at.data);
        } else {
          C.texSubImage3D($e, se, Ne, Ze, st, de, le, me, Je, ye, at);
        }
      } else if (S.isDataTexture) {
        C.texSubImage2D(C.TEXTURE_2D, se, Ne, Ze, de, le, Je, ye, at.data);
      } else if (S.isCompressedTexture) {
        C.compressedTexSubImage2D(C.TEXTURE_2D, se, Ne, Ze, at.width, at.height, Je, at.data);
      } else {
        C.texSubImage2D(C.TEXTURE_2D, se, Ne, Ze, de, le, Je, ye, at);
      }
      C.pixelStorei(C.UNPACK_ROW_LENGTH, Ve);
      C.pixelStorei(C.UNPACK_IMAGE_HEIGHT, yt);
      C.pixelStorei(C.UNPACK_SKIP_PIXELS, vn);
      C.pixelStorei(C.UNPACK_SKIP_ROWS, bt);
      C.pixelStorei(C.UNPACK_SKIP_IMAGES, Hn);
      if (se === 0 && F.generateMipmaps) {
        C.generateMipmap($e);
      }
      ve.unbindTexture();
    };
    this.initRenderTarget = function (S) {
      if (g.get(S).__webglFramebuffer === undefined) {
        L.setupRenderTarget(S);
      }
    };
    this.initTexture = function (S) {
      if (S.isCubeTexture) {
        L.setTextureCube(S, 0);
      } else if (S.isData3DTexture) {
        L.setTexture3D(S, 0);
      } else if (S.isDataArrayTexture || S.isCompressedArrayTexture) {
        L.setTexture2DArray(S, 0);
      } else {
        L.setTexture2D(S, 0);
      }
      ve.unbindTexture();
    };
    this.resetState = function () {
      D = 0;
      O = 0;
      N = null;
      ve.reset();
      fe.reset();
    };
    if (typeof __THREE_DEVTOOLS__ !== "undefined") {
      __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", {
        detail: this
      }));
    }
  }
  get coordinateSystem() {
    return 2000;
  }
  get outputColorSpace() {
    return this._outputColorSpace;
  }
  set outputColorSpace(e) {
    this._outputColorSpace = e;
    const t = this.getContext();
    t.drawingBufferColorSpace = Ge._getDrawingBufferColorSpace(e);
    t.unpackColorSpace = Ge._getUnpackColorSpace();
  }
}
const la = "[modern-screenshot]";
const On = typeof window !== "undefined";
const ff = On && "Worker" in window;
const Dr = On ? window.navigator?.userAgent : "";
const ca = Dr.includes("Chrome");
const Ni = Dr.includes("AppleWebKit") && !ca;
const Lr = Dr.includes("Firefox");
const df = i => i && "__CONTEXT__" in i;
const pf = i => i.constructor.name === "CSSFontFaceRule";
const mf = i => i.constructor.name === "CSSImportRule";
const gf = i => i.constructor.name === "CSSLayerBlockRule";
const Xt = i => i.nodeType === 1;
const ci = i => typeof i.className == "object";
const ua = i => i.tagName === "image";
const _f = i => i.tagName === "use";
const ti = i => Xt(i) && typeof i.style !== "undefined" && !ci(i);
const xf = i => i.nodeType === 8;
const vf = i => i.nodeType === 3;
const Gn = i => i.tagName === "IMG";
const zi = i => i.tagName === "VIDEO";
const Sf = i => i.tagName === "CANVAS";
const Mf = i => i.tagName === "TEXTAREA";
const Ef = i => i.tagName === "INPUT";
const Tf = i => i.tagName === "STYLE";
const yf = i => i.tagName === "SCRIPT";
const bf = i => i.tagName === "SELECT";
const Af = i => i.tagName === "SLOT";
const Rf = i => i.tagName === "IFRAME";
const Cf = (...i) => console.warn(la, ...i);
function wf(i) {
  const e = i?.createElement?.("canvas");
  if (e) {
    e.height = e.width = 1;
  }
  return !!e && "toDataURL" in e && !!e.toDataURL("image/webp").includes("image/webp");
}
const Ar = i => i.startsWith("data:");
function ha(i, e) {
  if (i.match(/^[a-z]+:\/\//i)) {
    return i;
  }
  if (On && i.match(/^\/\//)) {
    return window.location.protocol + i;
  }
  if (i.match(/^[a-z]+:/i) || !On) {
    return i;
  }
  const t = Vi().implementation.createHTMLDocument();
  const n = t.createElement("base");
  const r = t.createElement("a");
  t.head.appendChild(n);
  t.body.appendChild(r);
  if (e) {
    n.href = e;
  }
  r.href = i;
  return r.href;
}
function Vi(i) {
  return (i && Xt(i) ? i?.ownerDocument : i) ?? window.document;
}
const Hi = "http://www.w3.org/2000/svg";
function Pf(i, e, t) {
  const n = Vi(t).createElementNS(Hi, "svg");
  n.setAttributeNS(null, "width", i.toString());
  n.setAttributeNS(null, "height", e.toString());
  n.setAttributeNS(null, "viewBox", `0 0 ${i} ${e}`);
  return n;
}
function Df(i, e) {
  let t = new XMLSerializer().serializeToString(i);
  if (e) {
    t = t.replace(/[\u0000-\u0008\v\f\u000E-\u001F\uD800-\uDFFF\uFFFE\uFFFF]/gu, "");
  }
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(t)}`;
}
function Lf(i, e) {
  return new Promise((t, n) => {
    const r = new FileReader();
    r.onload = () => t(r.result);
    r.onerror = () => n(r.error);
    r.onabort = () => n(new Error(`Failed read blob to ${e}`));
    r.readAsDataURL(i);
  });
}
const Ff = i => Lf(i, "dataUrl");
function Un(i, e) {
  const t = Vi(e).createElement("img");
  t.decoding = "sync";
  t.loading = "eager";
  t.src = i;
  return t;
}
function ni(i, e) {
  return new Promise(t => {
    const {
      timeout: n,
      ownerDocument: r,
      onError: s,
      onWarn: o
    } = e ?? {};
    const a = typeof i == "string" ? Un(i, Vi(r)) : i;
    let c = null;
    let l = null;
    function u() {
      t(a);
      if (c) {
        clearTimeout(c);
      }
      l?.();
    }
    if (n) {
      c = setTimeout(u, n);
    }
    if (zi(a)) {
      const f = a.currentSrc || a.src;
      if (!f) {
        if (a.poster) {
          return ni(a.poster, e).then(t);
        } else {
          return u();
        }
      }
      if (a.readyState >= 2) {
        return u();
      }
      const d = u;
      const p = x => {
        o?.("Failed video load", f, x);
        s?.(x);
        u();
      };
      l = () => {
        a.removeEventListener("loadeddata", d);
        a.removeEventListener("error", p);
      };
      a.addEventListener("loadeddata", d, {
        once: true
      });
      a.addEventListener("error", p, {
        once: true
      });
    } else {
      const f = ua(a) ? a.href.baseVal : a.currentSrc || a.src;
      if (!f) {
        return u();
      }
      const d = async () => {
        if (Gn(a) && "decode" in a) {
          try {
            await a.decode();
          } catch (x) {
            o?.("Failed to decode image, trying to render anyway", a.dataset.originalSrc || f, x);
          }
        }
        u();
      };
      const p = x => {
        o?.("Failed image load", a.dataset.originalSrc || f, x);
        u();
      };
      if (Gn(a) && a.complete) {
        return d();
      }
      l = () => {
        a.removeEventListener("load", d);
        a.removeEventListener("error", p);
      };
      a.addEventListener("load", d, {
        once: true
      });
      a.addEventListener("error", p, {
        once: true
      });
    }
  });
}
async function If(i, e) {
  if (ti(i)) {
    if (Gn(i) || zi(i)) {
      await ni(i, e);
    } else {
      await Promise.all(["img", "video"].flatMap(t => Array.from(i.querySelectorAll(t)).map(n => ni(n, e))));
    }
  }
}
const fa = function () {
  let e = 0;
  const t = () => `0000${(Math.random() * 1679616 << 0).toString(36)}`.slice(-4);
  return () => {
    e += 1;
    return `u${t()}${e}`;
  };
}();
function da(i) {
  return i?.split(",").map(e => e.trim().replace(/"|'/g, "").toLowerCase()).filter(Boolean);
}
let Ns = 0;
function Uf(i) {
  const e = `${la}[#${Ns}]`;
  Ns++;
  return {
    time: t => i && console.time(`${e} ${t}`),
    timeEnd: t => i && console.timeEnd(`${e} ${t}`),
    warn: (...t) => i && Cf(...t)
  };
}
function Nf(i) {
  return {
    cache: i ? "no-cache" : "force-cache"
  };
}
async function pa(i, e) {
  if (df(i)) {
    return i;
  } else {
    return Bf(i, {
      ...e,
      autoDestruct: true
    });
  }
}
async function Bf(i, e) {
  const {
    scale: t = 1,
    workerUrl: n,
    workerNumber: r = 1
  } = e || {};
  const s = !!e?.debug;
  const o = e?.features ?? true;
  const a = i.ownerDocument ?? (On ? window.document : undefined);
  const c = i.ownerDocument?.defaultView ?? (On ? window : undefined);
  const l = new Map();
  const u = {
    width: 0,
    height: 0,
    quality: 1,
    type: "image/png",
    scale: t,
    backgroundColor: null,
    style: null,
    filter: null,
    maximumCanvasSize: 0,
    timeout: 30000,
    progress: null,
    debug: s,
    fetch: {
      requestInit: Nf(e?.fetch?.bypassingCache),
      placeholderImage: "data:image/png;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
      bypassingCache: false,
      ...e?.fetch
    },
    fetchFn: null,
    font: {},
    drawImageInterval: 100,
    workerUrl: null,
    workerNumber: r,
    onCloneEachNode: null,
    onCloneNode: null,
    onEmbedNode: null,
    onCreateForeignObjectSvg: null,
    includeStyleProperties: null,
    autoDestruct: false,
    ...e,
    __CONTEXT__: true,
    log: Uf(s),
    node: i,
    ownerDocument: a,
    ownerWindow: c,
    dpi: t === 1 ? null : t * 96,
    svgStyleElement: ma(a),
    svgDefsElement: a?.createElementNS(Hi, "defs"),
    svgStyles: new Map(),
    defaultComputedStyles: new Map(),
    workers: [...Array.from({
      length: ff && n && r ? r : 0
    })].map(() => {
      try {
        const p = new Worker(n);
        p.onmessage = async x => {
          const {
            url: _,
            result: m
          } = x.data;
          if (m) {
            l.get(_)?.resolve?.(m);
          } else {
            l.get(_)?.reject?.(new Error(`Error receiving message from worker: ${_}`));
          }
        };
        p.onmessageerror = x => {
          const {
            url: _
          } = x.data;
          l.get(_)?.reject?.(new Error(`Error receiving message from worker: ${_}`));
        };
        return p;
      } catch (p) {
        u.log.warn("Failed to new Worker", p);
        return null;
      }
    }).filter(Boolean),
    fontFamilies: new Map(),
    fontCssTexts: new Map(),
    acceptOfImage: `${[wf(a) && "image/webp", "image/svg+xml", "image/*", "*/*"].filter(Boolean).join(",")};q=0.8`,
    requests: l,
    drawImageCount: 0,
    tasks: [],
    features: o,
    isEnable: p => p === "restoreScrollPosition" ? typeof o == "boolean" ? false : o[p] ?? false : typeof o == "boolean" ? o : o[p] ?? true,
    shadowRoots: []
  };
  u.log.time("wait until load");
  await If(i, {
    timeout: u.timeout,
    onWarn: u.log.warn
  });
  u.log.timeEnd("wait until load");
  const {
    width: f,
    height: d
  } = Of(i, u);
  u.width = f;
  u.height = d;
  return u;
}
function ma(i) {
  if (!i) {
    return;
  }
  const e = i.createElement("style");
  const t = e.ownerDocument.createTextNode(`
.______background-clip--text {
  background-clip: text;
  -webkit-background-clip: text;
}
`);
  e.appendChild(t);
  return e;
}
function Of(i, e) {
  let {
    width: t,
    height: n
  } = e;
  if (Xt(i) && (!t || !n)) {
    const r = i.getBoundingClientRect();
    t = t || r.width || Number(i.getAttribute("width")) || 0;
    n = n || r.height || Number(i.getAttribute("height")) || 0;
  }
  return {
    width: t,
    height: n
  };
}
async function Gf(i, e) {
  const {
    log: t,
    timeout: n,
    drawImageCount: r,
    drawImageInterval: s
  } = e;
  t.time("image to canvas");
  const o = await ni(i, {
    timeout: n,
    onWarn: e.log.warn
  });
  const {
    canvas: a,
    context2d: c
  } = zf(i.ownerDocument, e);
  const l = () => {
    try {
      c?.drawImage(o, 0, 0, a.width, a.height);
    } catch (u) {
      e.log.warn("Failed to drawImage", u);
    }
  };
  l();
  if (e.isEnable("fixSvgXmlDecode")) {
    for (let u = 0; u < r; u++) {
      await new Promise(f => {
        setTimeout(() => {
          c?.clearRect(0, 0, a.width, a.height);
          l();
          f();
        }, u + s);
      });
    }
  }
  e.drawImageCount = 0;
  t.timeEnd("image to canvas");
  return a;
}
function zf(i, e) {
  const {
    width: t,
    height: n,
    scale: r,
    backgroundColor: s,
    maximumCanvasSize: o
  } = e;
  const a = i.createElement("canvas");
  a.width = Math.floor(t * r);
  a.height = Math.floor(n * r);
  a.style.width = `${t}px`;
  a.style.height = `${n}px`;
  if (o && (a.width > o || a.height > o)) {
    if (a.width > o && a.height > o) {
      if (a.width > a.height) {
        a.height *= o / a.width;
        a.width = o;
      } else {
        a.width *= o / a.height;
        a.height = o;
      }
    } else if (a.width > o) {
      a.height *= o / a.width;
      a.width = o;
    } else {
      a.width *= o / a.height;
      a.height = o;
    }
  }
  const c = a.getContext("2d");
  if (c && s) {
    c.fillStyle = s;
    c.fillRect(0, 0, a.width, a.height);
  }
  return {
    canvas: a,
    context2d: c
  };
}
function ga(i, e) {
  if (i.ownerDocument) {
    try {
      const s = i.toDataURL();
      if (s !== "data:,") {
        return Un(s, i.ownerDocument);
      }
    } catch (s) {
      e.log.warn("Failed to clone canvas", s);
    }
  }
  const t = i.cloneNode(false);
  const n = i.getContext("2d");
  const r = t.getContext("2d");
  try {
    if (n && r) {
      r.putImageData(n.getImageData(0, 0, i.width, i.height), 0, 0);
    }
    return t;
  } catch (s) {
    e.log.warn("Failed to clone canvas", s);
  }
  return t;
}
function Vf(i, e) {
  try {
    if (i?.contentDocument?.body) {
      return Fr(i.contentDocument.body, e);
    }
  } catch (t) {
    e.log.warn("Failed to clone iframe", t);
  }
  return i.cloneNode(false);
}
function Hf(i) {
  const e = i.cloneNode(false);
  if (i.currentSrc && i.currentSrc !== i.src) {
    e.src = i.currentSrc;
    e.srcset = "";
  }
  if (e.loading === "lazy") {
    e.loading = "eager";
  }
  return e;
}
async function kf(i, e) {
  if (i.ownerDocument && !i.currentSrc && i.poster) {
    return Un(i.poster, i.ownerDocument);
  }
  const t = i.cloneNode(false);
  t.crossOrigin = "anonymous";
  if (i.currentSrc && i.currentSrc !== i.src) {
    t.src = i.currentSrc;
  }
  const n = t.ownerDocument;
  if (n) {
    let r = true;
    await ni(t, {
      onError: () => r = false,
      onWarn: e.log.warn
    });
    if (!r) {
      if (i.poster) {
        return Un(i.poster, i.ownerDocument);
      } else {
        return t;
      }
    }
    t.currentTime = i.currentTime;
    await new Promise(o => {
      t.addEventListener("seeked", o, {
        once: true
      });
    });
    const s = n.createElement("canvas");
    s.width = i.offsetWidth;
    s.height = i.offsetHeight;
    try {
      const o = s.getContext("2d");
      if (o) {
        o.drawImage(t, 0, 0, s.width, s.height);
      }
    } catch (o) {
      e.log.warn("Failed to clone video", o);
      if (i.poster) {
        return Un(i.poster, i.ownerDocument);
      } else {
        return t;
      }
    }
    return ga(s, e);
  }
  return t;
}
function Wf(i, e) {
  if (Sf(i)) {
    return ga(i, e);
  } else if (Rf(i)) {
    return Vf(i, e);
  } else if (Gn(i)) {
    return Hf(i);
  } else if (zi(i)) {
    return kf(i, e);
  } else {
    return i.cloneNode(false);
  }
}
function Xf(i) {
  let e = i.sandbox;
  if (!e) {
    const {
      ownerDocument: t
    } = i;
    try {
      if (t) {
        e = t.createElement("iframe");
        e.id = `__SANDBOX__${fa()}`;
        e.width = "0";
        e.height = "0";
        e.style.visibility = "hidden";
        e.style.position = "fixed";
        t.body.appendChild(e);
        e.srcdoc = "<!DOCTYPE html><meta charset=\"UTF-8\"><title></title><body>";
        i.sandbox = e;
      }
    } catch (n) {
      i.log.warn("Failed to getSandBox", n);
    }
  }
  return e;
}
const qf = ["width", "height", "-webkit-text-fill-color"];
const Yf = ["stroke", "fill"];
function _a(i, e, t) {
  const {
    defaultComputedStyles: n
  } = t;
  const r = i.nodeName.toLowerCase();
  const s = ci(i) && r !== "svg";
  const o = s ? Yf.map(_ => [_, i.getAttribute(_)]).filter(([, _]) => _ !== null) : [];
  const a = [s && "svg", r, o.map((_, m) => `${_}=${m}`).join(","), e].filter(Boolean).join(":");
  if (n.has(a)) {
    return n.get(a);
  }
  const l = Xf(t)?.contentWindow;
  if (!l) {
    return new Map();
  }
  const u = l?.document;
  let f;
  let d;
  if (s) {
    f = u.createElementNS(Hi, "svg");
    d = f.ownerDocument.createElementNS(f.namespaceURI, r);
    o.forEach(([_, m]) => {
      d.setAttributeNS(null, _, m);
    });
    f.appendChild(d);
  } else {
    f = d = u.createElement(r);
  }
  d.textContent = " ";
  u.body.appendChild(f);
  const p = l.getComputedStyle(d, e);
  const x = new Map();
  for (let _ = p.length, m = 0; m < _; m++) {
    const h = p.item(m);
    if (!qf.includes(h)) {
      x.set(h, p.getPropertyValue(h));
    }
  }
  u.body.removeChild(f);
  n.set(a, x);
  return x;
}
function xa(i, e, t) {
  const n = new Map();
  const r = [];
  const s = new Map();
  if (t) {
    for (const a of t) {
      o(a);
    }
  } else {
    for (let a = i.length, c = 0; c < a; c++) {
      const l = i.item(c);
      o(l);
    }
  }
  for (let a = r.length, c = 0; c < a; c++) {
    s.get(r[c])?.forEach((l, u) => n.set(u, l));
  }
  function o(a) {
    const c = i.getPropertyValue(a);
    const l = i.getPropertyPriority(a);
    const u = a.lastIndexOf("-");
    const f = u > -1 ? a.substring(0, u) : undefined;
    if (f) {
      let d = s.get(f);
      if (!d) {
        d = new Map();
        s.set(f, d);
      }
      d.set(a, [c, l]);
    }
    if (e.get(a) !== c || !!l) {
      if (f) {
        r.push(f);
      } else {
        n.set(a, [c, l]);
      }
    }
  }
  return n;
}
function $f(i, e, t, n) {
  const {
    ownerWindow: r,
    includeStyleProperties: s,
    currentParentNodeStyle: o
  } = n;
  const a = e.style;
  const c = r.getComputedStyle(i);
  const l = _a(i, null, n);
  o?.forEach((f, d) => {
    l.delete(d);
  });
  const u = xa(c, l, s);
  u.delete("transition-property");
  u.delete("all");
  u.delete("d");
  u.delete("content");
  if (t) {
    u.delete("margin-top");
    u.delete("margin-right");
    u.delete("margin-bottom");
    u.delete("margin-left");
    u.delete("margin-block-start");
    u.delete("margin-block-end");
    u.delete("margin-inline-start");
    u.delete("margin-inline-end");
    u.set("box-sizing", ["border-box", ""]);
  }
  if (u.get("background-clip")?.[0] === "text") {
    e.classList.add("______background-clip--text");
  }
  if (ca) {
    if (!u.has("font-kerning")) {
      u.set("font-kerning", ["normal", ""]);
    }
    if ((u.get("overflow-x")?.[0] === "hidden" || u.get("overflow-y")?.[0] === "hidden") && u.get("text-overflow")?.[0] === "ellipsis" && i.scrollWidth === i.clientWidth) {
      u.set("text-overflow", ["clip", ""]);
    }
  }
  for (let f = a.length, d = 0; d < f; d++) {
    a.removeProperty(a.item(d));
  }
  u.forEach(([f, d], p) => {
    a.setProperty(p, f, d);
  });
  return u;
}
function Kf(i, e) {
  if (Mf(i) || Ef(i) || bf(i)) {
    e.setAttribute("value", i.value);
  }
}
const Zf = ["::before", "::after"];
const jf = ["::-webkit-scrollbar", "::-webkit-scrollbar-button", "::-webkit-scrollbar-thumb", "::-webkit-scrollbar-track", "::-webkit-scrollbar-track-piece", "::-webkit-scrollbar-corner", "::-webkit-resizer"];
function Jf(i, e, t, n, r) {
  const {
    ownerWindow: s,
    svgStyleElement: o,
    svgStyles: a,
    currentNodeStyle: c
  } = n;
  if (!o || !s) {
    return;
  }
  function l(u) {
    const f = s.getComputedStyle(i, u);
    let d = f.getPropertyValue("content");
    if (!d || d === "none") {
      return;
    }
    r?.(d);
    d = d.replace(/(')|(")|(counter\(.+\))/g, "");
    const p = [fa()];
    const x = _a(i, u, n);
    c?.forEach((y, T) => {
      x.delete(T);
    });
    const _ = xa(f, x, n.includeStyleProperties);
    _.delete("content");
    _.delete("-webkit-locale");
    if (_.get("background-clip")?.[0] === "text") {
      e.classList.add("______background-clip--text");
    }
    const m = [`content: '${d}';`];
    _.forEach(([y, T], A) => {
      m.push(`${A}: ${y}${T ? " !important" : ""};`);
    });
    if (m.length === 1) {
      return;
    }
    try {
      e.className = [e.className, ...p].join(" ");
    } catch (y) {
      n.log.warn("Failed to copyPseudoClass", y);
      return;
    }
    const h = m.join(`
  `);
    let b = a.get(h);
    if (!b) {
      b = [];
      a.set(h, b);
    }
    b.push(`.${p[0]}${u}`);
  }
  Zf.forEach(l);
  if (t) {
    jf.forEach(l);
  }
}
const Bs = new Set(["symbol"]);
async function Os(i, e, t, n, r) {
  if (Xt(t) && (Tf(t) || yf(t)) || n.filter && !n.filter(t)) {
    return;
  }
  if (Bs.has(e.nodeName) || Bs.has(t.nodeName)) {
    n.currentParentNodeStyle = undefined;
  } else {
    n.currentParentNodeStyle = n.currentNodeStyle;
  }
  const s = await Fr(t, n, false, r);
  if (n.isEnable("restoreScrollPosition")) {
    Qf(i, s);
  }
  e.appendChild(s);
}
async function Gs(i, e, t, n) {
  let r = i.firstChild;
  if (Xt(i) && i.shadowRoot) {
    r = i.shadowRoot?.firstChild;
    t.shadowRoots.push(i.shadowRoot);
  }
  for (let s = r; s; s = s.nextSibling) {
    if (!xf(s)) {
      if (Xt(s) && Af(s) && typeof s.assignedNodes == "function") {
        const o = s.assignedNodes();
        for (let a = 0; a < o.length; a++) {
          await Os(i, e, o[a], t, n);
        }
      } else {
        await Os(i, e, s, t, n);
      }
    }
  }
}
function Qf(i, e) {
  if (!ti(i) || !ti(e)) {
    return;
  }
  const {
    scrollTop: t,
    scrollLeft: n
  } = i;
  if (!t && !n) {
    return;
  }
  const {
    transform: r
  } = e.style;
  const s = new DOMMatrix(r);
  const {
    a: o,
    b: a,
    c,
    d: l
  } = s;
  s.a = 1;
  s.b = 0;
  s.c = 0;
  s.d = 1;
  s.translateSelf(-n, -t);
  s.a = o;
  s.b = a;
  s.c = c;
  s.d = l;
  e.style.transform = s.toString();
}
function ed(i, e) {
  const {
    backgroundColor: t,
    width: n,
    height: r,
    style: s
  } = e;
  const o = i.style;
  if (t) {
    o.setProperty("background-color", t, "important");
  }
  if (n) {
    o.setProperty("width", `${n}px`, "important");
  }
  if (r) {
    o.setProperty("height", `${r}px`, "important");
  }
  if (s) {
    for (const a in s) {
      o[a] = s[a];
    }
  }
}
const td = /^[\w-:]+$/;
async function Fr(i, e, t = false, n) {
  const {
    ownerDocument: r,
    ownerWindow: s,
    fontFamilies: o,
    onCloneEachNode: a
  } = e;
  if (r && vf(i)) {
    if (n && /\S/.test(i.data)) {
      n(i.data);
    }
    return r.createTextNode(i.data);
  }
  if (r && s && Xt(i) && (ti(i) || ci(i))) {
    const l = await Wf(i, e);
    if (e.isEnable("removeAbnormalAttributes")) {
      const _ = l.getAttributeNames();
      for (let m = _.length, h = 0; h < m; h++) {
        const b = _[h];
        if (!td.test(b)) {
          l.removeAttribute(b);
        }
      }
    }
    const u = e.currentNodeStyle = $f(i, l, t, e);
    if (t) {
      ed(l, e);
    }
    let f = false;
    if (e.isEnable("copyScrollbar")) {
      const _ = [u.get("overflow-x")?.[0], u.get("overflow-y")?.[0]];
      f = _.includes("scroll") || (_.includes("auto") || _.includes("overlay")) && (i.scrollHeight > i.clientHeight || i.scrollWidth > i.clientWidth);
    }
    const d = u.get("text-transform")?.[0];
    const p = da(u.get("font-family")?.[0]);
    const x = p ? _ => {
      if (d === "uppercase") {
        _ = _.toUpperCase();
      } else if (d === "lowercase") {
        _ = _.toLowerCase();
      } else if (d === "capitalize") {
        _ = _[0].toUpperCase() + _.substring(1);
      }
      p.forEach(m => {
        let h = o.get(m);
        if (!h) {
          o.set(m, h = new Set());
        }
        _.split("").forEach(b => h.add(b));
      });
    } : undefined;
    Jf(i, l, f, e, x);
    Kf(i, l);
    if (!zi(i)) {
      await Gs(i, l, e, x);
    }
    await a?.(l);
    return l;
  }
  const c = i.cloneNode(false);
  await Gs(i, c, e);
  await a?.(c);
  return c;
}
function nd(i) {
  i.ownerDocument = undefined;
  i.ownerWindow = undefined;
  i.svgStyleElement = undefined;
  i.svgDefsElement = undefined;
  i.svgStyles.clear();
  i.defaultComputedStyles.clear();
  if (i.sandbox) {
    try {
      i.sandbox.remove();
    } catch (e) {
      i.log.warn("Failed to destroyContext", e);
    }
    i.sandbox = undefined;
  }
  i.workers = [];
  i.fontFamilies.clear();
  i.fontCssTexts.clear();
  i.requests.clear();
  i.tasks = [];
  i.shadowRoots = [];
}
function id(i) {
  const {
    url: e,
    timeout: t,
    responseType: n,
    ...r
  } = i;
  const s = new AbortController();
  const o = t ? setTimeout(() => s.abort(), t) : undefined;
  return fetch(e, {
    signal: s.signal,
    ...r
  }).then(a => {
    if (!a.ok) {
      throw new Error("Failed fetch, not 2xx response", {
        cause: a
      });
    }
    switch (n) {
      case "arrayBuffer":
        return a.arrayBuffer();
      case "dataUrl":
        return a.blob().then(Ff);
      default:
        return a.text();
    }
  }).finally(() => clearTimeout(o));
}
function ii(i, e) {
  const {
    url: t,
    requestType: n = "text",
    responseType: r = "text",
    imageDom: s
  } = e;
  let o = t;
  const {
    timeout: a,
    acceptOfImage: c,
    requests: l,
    fetchFn: u,
    fetch: {
      requestInit: f,
      bypassingCache: d,
      placeholderImage: p
    },
    font: x,
    workers: _,
    fontFamilies: m
  } = i;
  if (n === "image" && (Ni || Lr)) {
    i.drawImageCount++;
  }
  let h = l.get(t);
  if (!h) {
    if (d && d instanceof RegExp && d.test(o)) {
      o += (/\?/.test(o) ? "&" : "?") + new Date().getTime();
    }
    const b = n.startsWith("font") && x && x.minify;
    const y = new Set();
    if (b) {
      n.split(";")[1].split(",").forEach(w => {
        if (m.has(w)) {
          m.get(w).forEach(U => y.add(U));
        }
      });
    }
    const T = b && y.size;
    const A = {
      url: o,
      timeout: a,
      responseType: T ? "arrayBuffer" : r,
      headers: n === "image" ? {
        accept: c
      } : undefined,
      ...f
    };
    h = {
      type: n,
      resolve: undefined,
      reject: undefined,
      response: null
    };
    h.response = (async () => {
      if (u && n === "image") {
        const R = await u(t);
        if (R) {
          return R;
        }
      }
      if (!Ni && t.startsWith("http") && _.length) {
        return new Promise((R, w) => {
          _[l.size & _.length - 1].postMessage({
            rawUrl: t,
            ...A
          });
          h.resolve = R;
          h.reject = w;
        });
      } else {
        return id(A);
      }
    })().catch(R => {
      l.delete(t);
      if (n === "image" && p) {
        i.log.warn("Failed to fetch image base64, trying to use placeholder image", o);
        if (typeof p == "string") {
          return p;
        } else {
          return p(s);
        }
      }
      throw R;
    });
    l.set(t, h);
  }
  return h.response;
}
async function va(i, e, t, n) {
  if (!Sa(i)) {
    return i;
  }
  for (const [r, s] of rd(i, e)) {
    try {
      const o = await ii(t, {
        url: s,
        requestType: n ? "image" : "text",
        responseType: "dataUrl"
      });
      i = i.replace(sd(r), `$1${o}$3`);
    } catch (o) {
      t.log.warn("Failed to fetch css data url", r, o);
    }
  }
  return i;
}
function Sa(i) {
  return /url\((['"]?)([^'"]+?)\1\)/.test(i);
}
const Ma = /url\((['"]?)([^'"]+?)\1\)/g;
function rd(i, e) {
  const t = [];
  i.replace(Ma, (n, r, s) => {
    t.push([s, ha(s, e)]);
    return n;
  });
  return t.filter(([n]) => !Ar(n));
}
function sd(i) {
  const e = i.replace(/([.*+?^${}()|\[\]\/\\])/g, "\\$1");
  return new RegExp(`(url\\(['"]?)(${e})(['"]?\\))`, "g");
}
const ad = ["background-image", "border-image-source", "-webkit-border-image", "-webkit-mask-image", "list-style-image"];
function od(i, e) {
  return ad.map(t => {
    const n = i.getPropertyValue(t);
    if (!n || n === "none") {
      return null;
    } else {
      if (Ni || Lr) {
        e.drawImageCount++;
      }
      return va(n, null, e, true).then(r => {
        if (!!r && n !== r) {
          i.setProperty(t, r, i.getPropertyPriority(t));
        }
      });
    }
  }).filter(Boolean);
}
function ld(i, e) {
  if (Gn(i)) {
    const t = i.currentSrc || i.src;
    if (!Ar(t)) {
      return [ii(e, {
        url: t,
        imageDom: i,
        requestType: "image",
        responseType: "dataUrl"
      }).then(n => {
        if (n) {
          i.srcset = "";
          i.dataset.originalSrc = t;
          i.src = n || "";
        }
      })];
    }
    if (Ni || Lr) {
      e.drawImageCount++;
    }
  } else if (ci(i) && !Ar(i.href.baseVal)) {
    const t = i.href.baseVal;
    return [ii(e, {
      url: t,
      imageDom: i,
      requestType: "image",
      responseType: "dataUrl"
    }).then(n => {
      if (n) {
        i.dataset.originalSrc = t;
        i.href.baseVal = n || "";
      }
    })];
  }
  return [];
}
function cd(i, e) {
  const {
    ownerDocument: t,
    svgDefsElement: n
  } = e;
  const r = i.getAttribute("href") ?? i.getAttribute("xlink:href");
  if (!r) {
    return [];
  }
  const [s, o] = r.split("#");
  if (o) {
    const a = `#${o}`;
    const c = e.shadowRoots.reduce((l, u) => l ?? u.querySelector(`svg ${a}`), t?.querySelector(`svg ${a}`));
    if (s) {
      i.setAttribute("href", a);
    }
    if (n?.querySelector(a)) {
      return [];
    }
    if (c) {
      n?.appendChild(c.cloneNode(true));
      return [];
    }
    if (s) {
      return [ii(e, {
        url: s,
        responseType: "text"
      }).then(l => {
        n?.insertAdjacentHTML("beforeend", l);
      })];
    }
  }
  return [];
}
function Ea(i, e) {
  const {
    tasks: t
  } = e;
  if (Xt(i)) {
    if (Gn(i) || ua(i)) {
      t.push(...ld(i, e));
    }
    if (_f(i)) {
      t.push(...cd(i, e));
    }
  }
  if (ti(i)) {
    t.push(...od(i.style, e));
  }
  i.childNodes.forEach(n => {
    Ea(n, e);
  });
}
async function ud(i, e) {
  const {
    ownerDocument: t,
    svgStyleElement: n,
    fontFamilies: r,
    fontCssTexts: s,
    tasks: o,
    font: a
  } = e;
  if (!!t && !!n && !!r.size) {
    if (a && a.cssText) {
      const c = Vs(a.cssText, e);
      n.appendChild(t.createTextNode(`${c}
`));
    } else {
      const c = Array.from(t.styleSheets).filter(u => {
        try {
          return "cssRules" in u && !!u.cssRules.length;
        } catch (f) {
          e.log.warn(`Error while reading CSS rules from ${u.href}`, f);
          return false;
        }
      });
      await Promise.all(c.flatMap(u => Array.from(u.cssRules).map(async (f, d) => {
        if (mf(f)) {
          let p = d + 1;
          const x = f.href;
          let _ = "";
          try {
            _ = await ii(e, {
              url: x,
              requestType: "text",
              responseType: "text"
            });
          } catch (h) {
            e.log.warn(`Error fetch remote css import from ${x}`, h);
          }
          const m = _.replace(Ma, (h, b, y) => h.replace(y, ha(y, x)));
          for (const h of fd(m)) {
            try {
              u.insertRule(h, h.startsWith("@import") ? p += 1 : u.cssRules.length);
            } catch (b) {
              e.log.warn("Error inserting rule from remote css import", {
                rule: h,
                error: b
              });
            }
          }
        }
      })));
      const l = [];
      c.forEach(u => {
        Rr(u.cssRules, l);
      });
      l.filter(u => pf(u) && Sa(u.style.getPropertyValue("src")) && da(u.style.getPropertyValue("font-family"))?.some(f => r.has(f))).forEach(u => {
        const f = u;
        const d = s.get(f.cssText);
        if (d) {
          n.appendChild(t.createTextNode(`${d}
`));
        } else {
          o.push(va(f.cssText, f.parentStyleSheet ? f.parentStyleSheet.href : null, e).then(p => {
            p = Vs(p, e);
            s.set(f.cssText, p);
            n.appendChild(t.createTextNode(`${p}
`));
          }));
        }
      });
    }
  }
}
const hd = /(\/\*[\s\S]*?\*\/)/g;
const zs = /((@.*?keyframes [\s\S]*?){([\s\S]*?}\s*?)})/gi;
function fd(i) {
  if (i == null) {
    return [];
  }
  const e = [];
  let t = i.replace(hd, "");
  while (true) {
    const s = zs.exec(t);
    if (!s) {
      break;
    }
    e.push(s[0]);
  }
  t = t.replace(zs, "");
  const n = /@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi;
  const r = new RegExp("((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})", "gi");
  while (true) {
    let s = n.exec(t);
    if (s) {
      r.lastIndex = n.lastIndex;
    } else {
      s = r.exec(t);
      if (s) {
        n.lastIndex = r.lastIndex;
      } else {
        break;
      }
    }
    e.push(s[0]);
  }
  return e;
}
const dd = /url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g;
const pd = /src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;
function Vs(i, e) {
  const {
    font: t
  } = e;
  const n = t ? t?.preferredFormat : undefined;
  if (n) {
    return i.replace(pd, r => {
      while (true) {
        const [s,, o] = dd.exec(r) || [];
        if (!o) {
          return "";
        }
        if (o === n) {
          return `src: ${s};`;
        }
      }
    });
  } else {
    return i;
  }
}
function Rr(i, e = []) {
  for (const t of Array.from(i)) {
    if (gf(t)) {
      e.push(...Rr(t.cssRules));
    } else if ("cssRules" in t) {
      Rr(t.cssRules, e);
    } else {
      e.push(t);
    }
  }
  return e;
}
async function md(i, e) {
  const t = await pa(i, e);
  if (Xt(t.node) && ci(t.node)) {
    return t.node;
  }
  const {
    ownerDocument: n,
    log: r,
    tasks: s,
    svgStyleElement: o,
    svgDefsElement: a,
    svgStyles: c,
    font: l,
    progress: u,
    autoDestruct: f,
    onCloneNode: d,
    onEmbedNode: p,
    onCreateForeignObjectSvg: x
  } = t;
  r.time("clone node");
  const _ = await Fr(t.node, t, true);
  if (o && n) {
    let T = "";
    c.forEach((A, R) => {
      T += `${A.join(`,
`)} {
  ${R}
}
`;
    });
    o.appendChild(n.createTextNode(T));
  }
  r.timeEnd("clone node");
  await d?.(_);
  if (l !== false && Xt(_)) {
    r.time("embed web font");
    await ud(_, t);
    r.timeEnd("embed web font");
  }
  r.time("embed node");
  Ea(_, t);
  const m = s.length;
  let h = 0;
  const b = async () => {
    while (true) {
      const T = s.pop();
      if (!T) {
        break;
      }
      try {
        await T;
      } catch (A) {
        t.log.warn("Failed to run task", A);
      }
      u?.(++h, m);
    }
  };
  u?.(h, m);
  await Promise.all([...Array.from({
    length: 4
  })].map(b));
  r.timeEnd("embed node");
  await p?.(_);
  const y = gd(_, t);
  if (a) {
    y.insertBefore(a, y.children[0]);
  }
  if (o) {
    y.insertBefore(o, y.children[0]);
  }
  if (f) {
    nd(t);
  }
  await x?.(y);
  return y;
}
function gd(i, e) {
  const {
    width: t,
    height: n
  } = e;
  const r = Pf(t, n, i.ownerDocument);
  const s = r.ownerDocument.createElementNS(r.namespaceURI, "foreignObject");
  s.setAttributeNS(null, "x", "0%");
  s.setAttributeNS(null, "y", "0%");
  s.setAttributeNS(null, "width", "100%");
  s.setAttributeNS(null, "height", "100%");
  s.append(i);
  r.appendChild(s);
  return r;
}
async function Rd(i, e) {
  const t = await pa(i, e);
  const n = await md(t);
  const r = Df(n, t.isEnable("removeControlCharacter"));
  if (!t.autoDestruct) {
    t.svgStyleElement = ma(t.ownerDocument);
    t.svgDefsElement = t.ownerDocument?.createElementNS(Hi, "defs");
    t.svgStyles.clear();
  }
  const s = Un(r, n.ownerDocument);
  return await Gf(s, t);
}
export { bd as A, ta as C, yd as D, Md as I, xd as L, Ot as M, Pr as O, Bi as P, Sd as S, ot as V, Ad as W, Wt as a, _d as b, Td as c, vd as d, xt as e, Ed as f, B as g, Rd as h };