/** @jsxImportSource @emotion/react */

import { css, Theme } from "@emotion/react";
import React, { useState } from "react";
import theme from "styles/theme";

function WriteCard() {
  const category2 = {
    IT: "IT",
    SW: "SW",
    MC: "미디어컨텐츠",
  };

  const [values, setValues] = useState({
    name: "",
    summary: "",
    category: [],
    img: "",
    people: "",
    calendar: "",
    calendar2: "",
    githubLink: "",
    youtubeLink: "",
    serviceLink: "",
    skills: [],
    year: "",
  });

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };
  const handleOnSubmit = (e: React.FormEvent) => {
    console.log(values);
    e.preventDefault();
    window.location.replace("/");
  };

  return (
    <div css={mainwrap}>
      <form css={formwrap} onSubmit={handleOnSubmit}>
        <p css={p}>참여한 경진대회 종류 </p>
        <select
          css={select}
          required
          value={values.category}
          name="category"
          onChange={handleChange}
        >
          <option value={category2.IT}>IT 경진대회</option>
          <option value={category2.SW}>소프트웨어 경진대회</option>
          <option value={category2.MC}>미디어컨텐츠 경진대회</option>
        </select>
        <p css={p}>프로젝트 이름</p>
        <textarea
          placeholder="프로젝트 이름을 작성해주세요"
          css={projectName}
          required
          value={values.name}
          name="name"
          onChange={handleChange}
        ></textarea>
        <p css={p}>경진대회 참여 해</p>
        <textarea
          placeholder="경진대회에 참여한 해를 기재해주세요. "
          css={year}
          required
          value={values.year}
          name="year"
          onChange={handleChange}
        ></textarea>
        <p css={p}>개발 인원</p>
        <textarea
          placeholder="개발인원을 작성해주세요&#13;&#10;ex)&#13;&#10;201014001 김성공&#13;&#10;201114020 이성공"
          css={textArea}
          value={values.people}
          name="people"
          onChange={handleChange}
        ></textarea>
        <p css={p}>깃허브 주소</p>
        <input
          placeholder="주소를 입력해주세요."
          type="url"
          css={github}
          required
          value={values.githubLink}
          name="githubLink"
          onChange={handleChange}
        ></input>
        <p css={p}>프로젝트 링크</p>
        <input
          placeholder="필수 사항은 아닙니다. 웹링크 등이 존재할 경우 기재해주세요."
          type="url"
          css={github}
          value={values.serviceLink}
          name="serviceLink"
          onChange={handleChange}
        ></input>

        <p css={p}>발표 유튜브 링크</p>
        <input
          placeholder="발표 유튜브 링크를 기재해주세요."
          type="url"
          css={youtube}
          required
          value={values.youtubeLink}
          name="youtubeLink"
          onChange={handleChange}
        ></input>
        <p css={p}>대표 사진</p>
        <input
          type="file"
          id="inputImage"
          multiple
          accept="image/*"
          required
          value={values.img}
          name="img"
          onChange={handleChange}
        ></input>
        <p css={p}>세부 정보</p>
        <span css={span}>1. 개발 기간을 지정해주세요.</span>
        <div>
          <input
            type="date"
            min="2010-01-01"
            css={date}
            required
            value={values.calendar}
            name="calendar"
            onChange={handleChange}
          ></input>
          &nbsp;~&nbsp;
          <input
            type="date"
            min="2010-01-01"
            css={date}
            required
            value={values.calendar2}
            name="calendar2"
            onChange={handleChange}
          ></input>
        </div>
        <span css={span}>2. 사용 기술을 기재해주세요.</span>
        <br />
        <textarea
          placeholder="사용 기술을 기재해주세요."
          css={useSkil}
          required
          value={values.skills}
          name="skills"
          onChange={handleChange}
        ></textarea>
        <br />
        <span css={span}>3. 개발한 프로젝트의 짧은 설명을 기재해주세요.</span>
        <br />
        <textarea
          placeholder="프로젝트에 대해 한 두문장으로 기재해주세요."
          css={summarywrap}
          required
          value={values.summary}
          name="summary"
          onChange={handleChange}
        ></textarea>
        <div css={submitbtnwrap}>
          <input type="submit" css={submitbtn} value="작성"></input>
        </div>
      </form>
    </div>
  );
}

export default WriteCard;

// 하기 css 차후 작성 예정
const mainwrap = (theme: Theme) => css`
  display: flex;
  ${theme.mediaQuery.tablet} {
    width: 100%;
    margin: auto auto;
  }
`;

const formwrap = (theme: Theme) => css`
  margin: auto auto;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 2px 3px 5px 0px gray;
  background-color: ${theme.color.white};
  ${theme.mediaQuery.tablet} {
    width: 80%;
    margin: auto auto;
  }
`;

const select = (theme: Theme) => css`
  box-sizing: border-box;
  border: solid 2px #afc4e7;
  border-radius: 7px;
  width: 50rem;
  height: 1.7rem;
  margin-top: 0.8rem;
  text-align: center;
  ${theme.mediaQuery.tablet} {
    width: 100%;
    margin: auto auto;
  }
`;

const projectName = (theme: Theme) => css`
  box-sizing: border-box;
  border: solid 2px #afc4e7;
  border-radius: 7px;
  resize: none;
  width: 50rem;
  height: 1.7rem;
  margin-top: 0.8rem;
  ${theme.mediaQuery.tablet} {
    width: 100%;
    margin: auto auto;
  }
`;

const year = (theme: Theme) => css`
  box-sizing: border-box;
  border: solid 2px #afc4e7;
  border-radius: 7px;
  resize: none;
  width: 50rem;
  height: 1.7rem;
  margin-top: 0.8rem;
  ${theme.mediaQuery.tablet} {
    width: 100%;
    margin: auto auto;
  }
`;

const textArea = (theme: Theme) => css`
  box-sizing: border-box;
  border: solid 2px #afc4e7;
  border-radius: 7px;
  resize: none;
  width: 50rem;
  height: 5rem;
  margin-top: 0.8rem;
  ${theme.mediaQuery.tablet} {
    width: 100%;
    margin: auto auto;
  }
`;

const github = (theme: Theme) => css`
  box-sizing: border-box;
  border: solid 2px #afc4e7;
  border-radius: 7px;
  resize: none;
  width: 50rem;
  height: 1.8rem;
  margin-top: 0.8rem;
  ${theme.mediaQuery.tablet} {
    width: 100%;
    margin: auto auto;
  }
`;

const youtube = (theme: Theme) => css`
  box-sizing: border-box;
  border: solid 2px #afc4e7;
  border-radius: 7px;
  resize: none;
  width: 50rem;
  height: 1.8rem;
  margin-top: 0.8rem;
  ${theme.mediaQuery.tablet} {
    width: 100%;
    margin: auto auto;
  }
`;

const date = (theme: Theme) => css`
  box-sizing: border-box;
  border: solid 2px #afc4e7;
  border-radius: 3px;
  width: 22.5rem;
  height: 1.8rem;
  margin-top: 0.8rem;
  margin-left: 30px;
  ${theme.mediaQuery.tablet} {
    width: 40%;
  }
`;

const useSkil = (theme: Theme) => css`
  box-sizing: border-box;
  border: solid 2px #afc4e7;
  border-radius: 7px;
  resize: none;
  width: 50rem;
  height: 5rem;
  margin-top: 0.8rem;
  margin-left: 30px;
  ${theme.mediaQuery.tablet} {
    width: 90%;
  }
`;

const summarywrap = (theme: Theme) => css`
  box-sizing: border-box;
  border: solid 2px #afc4e7;
  border-radius: 7px;
  resize: none;
  width: 50rem;
  height: 3rem;
  margin-top: 0.8rem;
  margin-left: 30px;
  ${theme.mediaQuery.tablet} {
    width: 90%;
  }
`;

const submitbtnwrap = css`
  text-align: right;
`;

const submitbtn = (theme: Theme) => css`
  border-radius: 7px;
  border: solid 2px #afc4e7;
  box-shadow: 2px 3px 5px 0px;
  background-color: #afc4e7;
`;

const p = (theme: Theme) => css`
  font-weight: ${theme.fontWeight.bold};
  margin-top: 10px;
  ${theme.mediaQuery.tablet} {
    margin: 0.5rem;
  }
`;

const span = (theme: Theme) => css`
  font-weight: ${theme.fontWeight.light};
  margin-left: 30px;
`;
