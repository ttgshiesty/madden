import { r as e, l as s, j as n, R as r, g as a } from "./vendor-BuhhrSk5.js";
import { U as _Component2 } from "./Username-Ba76WY5D.js";
import { C as _Component4 } from "./CalloutBubble-Cat-27qt.js";
import { T as _Component5 } from "./TimeDiff-1-pLcqfv.js";
import { U as _Component } from "./apps-uajInkOc.js";
const _Component6 = ({
  conversation: r,
  currentUser: a,
  maxAvatars: t = 8
}) => {
  const i = e.useMemo(() => {
    const e = r.participants.filter(e => e.user.id !== (a == null ? undefined : a.id));
    return s.orderBy(e, e => e.dateJoined ? new Date(e.dateJoined) : null, "asc").map(e => e.user);
  }, [r, a]);
  const l = e.useMemo(() => i.slice(0, t), [i, t]);
  return <div className="conversation-avatars">{l.map(e => <_Component imageUrl={e.avatar} size={24} key={e.id} />)}{i.length > t && <_Component size={24} content={"+" + (i.length - l.length)} />}</div>;
};
const _Component3 = ({
  conversation: i,
  currentUser: l,
  className: o,
  enableUserLink: c
}) => {
  const u = e.useMemo(() => {
    const e = i.participants.filter(e => e.user.id !== (l == null ? undefined : l.id));
    return s.orderBy(e, e => e.dateJoined ? new Date(e.dateJoined) : null, "asc").map(e => e.user);
  }, [i, l]);
  const m = e.useMemo(() => {
    if (i.title) {
      return i.title;
    } else if (u.length === 0) {
      return (l == null ? undefined : l.username) ?? "Only You";
    } else {
      return <n.Fragment>{u.map((e, s) => <r.Fragment key={e.id}><_Component2 username={e.username} groups={e.groups} icon={e.icon} enableLink={c} />{s < u.length - 1 && ", "}</r.Fragment>)}</n.Fragment>;
    }
  }, [i, u, l]);
  return <div className={a("conversation-title", o)}>{m}</div>;
};
const m = ({
  conversation: s,
  currentUser: r,
  maxAvatars: t,
  enableUserLink: o
}) => {
  const m = e.useMemo(() => {
    return s.participants.find(e => e.user.id === (r == null ? undefined : r.id)) ?? null;
  }, [s]);
  const d = e.useMemo(() => {
    return (m == null ? undefined : m.unreadMessagesCount) ?? 0;
  }, [m]);
  const v = e.useMemo(() => d > 0, [d]);
  return <div className="conversation-list-item"><div className={a({
      "conversation-list-item__title": true,
      "conversation-list-item__title--is-unread": v
    })}><_Component3 conversation={s} currentUser={r} enableUserLink={o} /></div><div className="conversation-list-item__date">{v && <_Component4 className="me-1">{d > 9 ? "9+" : d}</_Component4>}<_Component5 dateTimeRaw={s.lastMessage} fallbackNode="--" /></div><div className="conversation-list-item__avatars"><_Component6 conversation={s} currentUser={r} /></div></div>;
};
export { _Component3 as C, _Component6 as a, m as b };