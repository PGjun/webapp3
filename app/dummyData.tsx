const NotiData = (count: number) => {
  const data = [];

  for (let i = 1; i <= count; i++) {
    data.push({
      id: i,
      column1: `${i}`,
      column2: `A병동 전체 공지 합니다.`,
      column3: `2023.07.06~2023.07.26`,
      column4: `관리자`,
      column5: `2023.07.06`,
    });
  }

  return data;
};

export const notiData = NotiData(500).reverse();

const EMRdata = (count: number) => {
  const data = [];

  for (let i = 1; i <= count; i++) {
    data.push({
      id: i,
      column1: `${i}`,
      column2: `11111`,
      column3: `환자`,
      column4: `30`,
      column5: `남`,
      column6: `11병동 12병실 30병상`,
      column7: `골절`,
      column8: `2023.07.06`,
      column9: `김의사`,
      column10: `2023.07.06`,
      column11: `2023.07.06`,
    });
  }

  return data;
};

export const emrData = EMRdata(500).reverse();

const AccountData = (count: number) => {
  const data = [];

  for (let i = 1; i <= count; i++) {
    data.push({
      id: i,
      column1: `${i}`,
      column2: `시스템관리자`,
      column3: `김관리자`,
      column4: `adminKim`,
      column5: `부서1`,
      column6: `2023.07.06 15:30:22`,
      column7: `2023.07.06`,
    });
  }

  return data;
};

export const accountData = AccountData(500).reverse();

const StatusData = (count: number) => {
  const data = [];

  for (let i = 1; i <= count; i++) {
    data.push({
      id: i,
      column1: `${i}`,
      column2: `홍길동`,
      column3: `11병동12병실30병상`,
      column4: `입원사유입원사유`,
      column5: `김의사`,
      column6: `2023.07.06`,
      column7: `김간호`,
      column8: `2023.07.06`,
    });
  }

  return data;
};

export const statusData = StatusData(500).reverse();
