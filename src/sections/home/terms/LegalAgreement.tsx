import { Box, Stack, Typography } from '@mui/material';
import { useI18nContext } from '../../../i18n/i18n-react';
import LegalAgreementItem from '../components/LegalAgreementItem';

const LegalAgreement = () => {
  const { LL } = useI18nContext();
  return (
    <Box color="white" m={{ md: 8, xs: 0 }} p={{ md: 8, xs: 0 }}>
      <Stack alignItems="center" justifyContent="space-around">
        <LegalAgreementItem
          number="01"
          title={LL.legal_agreement_title1()}
          text1={
            <>
              <Typography variant="body1">{LL.legal_agreement_text1_0()}</Typography>
              <Typography variant="body1">{LL.legal_agreement_text1_1()}</Typography>
              <Typography variant="body1">{LL.legal_agreement_text1_2()}</Typography>
            </>
          }
        />
        <LegalAgreementItem
          number="02"
          title={LL.legal_agreement_title2()}
          text1={
            <Typography variant="body1">
              <Box component="span" fontWeight={700}>
                {LL.legal_agreement_subTitle2()}
              </Box>
              {LL.legal_agreement_text2()}
            </Typography>
          }
          text2={
            <Typography variant="body1">
              <Box component="span" fontWeight={700}>
                {LL.legal_agreement_subTitle2_1()}
              </Box>
              {LL.legal_agreement_text2_1()}
            </Typography>
          }
        />
        <LegalAgreementItem
          number="03"
          title={LL.legal_agreement_title3()}
          text1={
            <>
              <Typography variant="body1">
                <Box component="span" fontWeight={700}>
                  {LL.legal_agreement_subTitle2()}
                </Box>
                {LL.legal_agreement_text3()}
              </Typography>
              <Typography variant="body1">
                <Box component="span" fontWeight={700}>
                  {LL.legal_agreement_subTitle2_1()}
                </Box>
                {LL.legal_agreement_text3_1()}
              </Typography>
            </>
          }
        />
        <LegalAgreementItem
          number="04"
          title={LL.legal_agreement_title4()}
          text1={<Typography variant="body1">{LL.legal_agreement_text4()}</Typography>}
        />
        <LegalAgreementItem
          number="05"
          title={LL.legal_agreement_title5()}
          text1={<Typography variant="body1">{LL.legal_agreement_text5()}</Typography>}
        />
        <LegalAgreementItem
          number="06"
          title={LL.legal_agreement_title6()}
          text1={
            <>
              <Typography variant="body1">{LL.legal_agreement_text6_0()}</Typography>
              <Typography variant="body1">{LL.legal_agreement_text6_1()}</Typography>
              <Typography variant="body1">{LL.legal_agreement_text6_2()}</Typography>
              <Typography variant="body1">{LL.legal_agreement_text6_3()}</Typography>
              <Typography variant="body1">{LL.legal_agreement_text6_4()}</Typography>
              <Typography variant="body1">{LL.legal_agreement_text6_5()}</Typography>
            </>
          }
        />
        <LegalAgreementItem
          number="07"
          title={LL.legal_agreement_title7()}
          text1={
            <>
              <Typography variant="body1">{LL.legal_agreement_text7_0()}</Typography>
              <Typography variant="body1">{LL.legal_agreement_text7_1()}</Typography>
              <Typography variant="body1">{LL.legal_agreement_text7_2()}</Typography>
              <Typography variant="body1">{LL.legal_agreement_text7_3()}</Typography>
              <Typography variant="body1">{LL.legal_agreement_text7_4()}</Typography>
              <Typography variant="body1">{LL.legal_agreement_text7_5()}</Typography>
              <Typography variant="body1">{LL.legal_agreement_text7_6()}</Typography>
            </>
          }
        />
        <LegalAgreementItem
          number="08"
          title={LL.legal_agreement_title8()}
          text1={
            <>
              <Typography variant="body1">{LL.legal_agreement_text8_0()}</Typography>
              <Typography variant="body1">{LL.legal_agreement_text8_1()}</Typography>
              <Typography variant="body1">{LL.legal_agreement_text8_2()}</Typography>
              <Typography variant="body1">{LL.legal_agreement_text8_3()}</Typography>
            </>
          }
        />
        <LegalAgreementItem
          number="09"
          title={LL.legal_agreement_title9()}
          text1={
            <>
              <Typography variant="body1">{LL.legal_agreement_text9_0()}</Typography>
              <Typography variant="body1">{LL.legal_agreement_text9_1()}</Typography>
              <Typography variant="body1">{LL.legal_agreement_text9_2()}</Typography>
              <Typography variant="body1">{LL.legal_agreement_text9_3()}</Typography>
              <Typography variant="body1">{LL.legal_agreement_text9_4()}</Typography>
              <Typography variant="body1">{LL.legal_agreement_text9_5()}</Typography>
              <Typography variant="body1">{LL.legal_agreement_text9_6()}</Typography>
            </>
          }
        />
        <LegalAgreementItem
          number="10"
          title={LL.legal_agreement_title10()}
          text1={
            <>
              <Typography variant="body1">{LL.legal_agreement_text10_0()}</Typography>
              <Typography variant="body1">{LL.legal_agreement_text10_1()}</Typography>
              <Typography variant="body1">{LL.legal_agreement_text10_2()}</Typography>
              <Typography variant="body1">{LL.legal_agreement_text10_3()}</Typography>
              <Typography variant="body1">{LL.legal_agreement_text10_4()}</Typography>
            </>
          }
        />
        <LegalAgreementItem
          number="11"
          title={LL.legal_agreement_title11()}
          text1={
            <>
              <Typography variant="body1">{LL.legal_agreement_text11_0()}</Typography>
              <Typography variant="body1">{LL.legal_agreement_text11_1()}</Typography>
              <Typography variant="body1">{LL.legal_agreement_text11_2()}</Typography>
              <Typography variant="body1">{LL.legal_agreement_text11_3()}</Typography>
              <Typography variant="body1">{LL.legal_agreement_text11_4()}</Typography>
              <Typography variant="body1">{LL.legal_agreement_text11_5()}</Typography>
              <Typography variant="body1">{LL.legal_agreement_text11_6()}</Typography>
              <Typography variant="body1">{LL.legal_agreement_text11_7()}</Typography>
              <Typography variant="body1">{LL.legal_agreement_text11_8()}</Typography>
              <Typography variant="body1">{LL.legal_agreement_text11_9()}</Typography>
              <Typography variant="body1">{LL.legal_agreement_text11_10()}</Typography>
            </>
          }
        />
        <LegalAgreementItem
          number="12"
          title={LL.legal_agreement_title12()}
          text1={<Typography variant="body1">{LL.legal_agreement_text12()}</Typography>}
        />
        <LegalAgreementItem
          number="13"
          title={LL.legal_agreement_title13()}
          text1={<Typography variant="body1">{LL.legal_agreement_text13()}</Typography>}
        />
      </Stack>
    </Box>
  );
};

export default LegalAgreement;
