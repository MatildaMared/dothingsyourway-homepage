import React from "react";
import styled from "styled-components";
import Button from "../../components/Button";
import SectionHeader from "../../components/SectionHeader";

function Offer() {
    return (
        <Wrapper>
            <SectionHeader text="Ditt erbjudande" secondary={true} />
            <section>
                <h2>Detta får du!</h2>
                <List role="list">
                    <li>
                        Sex liveföreläsningar med tillhörande arbetsmaterial
                        (pdf:er, övningar m.m.)
                        <br />
                        <strong>Värde 12000:-</strong>
                    </li>
                    <li>
                        Sex gruppcoachningstillfällen
                        <br />
                        <strong>Värde 9000:-</strong>
                    </li>
                    <li>
                        En kopia av det moderna och avancerade affärssystemet
                        jag själv använder för mitt företagande, min personliga
                        utveckling och produktivitet. Detta system får du
                        behålla för alltid och jag kommer dessutom lära dig hur
                        du gör anpassningar i det.
                        <br />
                        <strong>Värde 15 000:-</strong>
                    </li>
                    <li>
                        Tre månaders medlemskap med support i Slack-grupp
                        <br />
                        <strong>värde 2100:-</strong>
                    </li>
                    <li>
                        <strong>BONUS 1!</strong> Två timmar
                        affärssystemsutveckling tillsammans med mig där jag
                        anpassar ditt system efter dina behov.
                        <br />
                        <strong>Värde 2500:-</strong>
                    </li>
                    <li>
                        <strong>BONUS 2!!</strong> Genomgående
                        personlighetsanalys och utvärdering med mig för att ge
                        dig bättre självkännedom så att du kan fatta bättre
                        beslut om dig och ditt liv.
                        <br />
                        <strong>Värde 2000:-</strong>
                    </li>
                    <li>
                        <strong>BONUS 3!!!</strong> Dessutom kommer du få
                        videoserien "Hållbara Dagar", som består av tre videor
                        på sammanlagt en timme som lär dig allt om hur du skapar
                        hållbarhet i din energi och ekonomi.
                        <br />
                        <strong>Värde 2000:-</strong>
                    </li>
                </List>
                <Table>
                    <tr>
                        <th colSpan={2}>Sammanfattning</th>
                    </tr>
                    <tr>
                        <td>Totalt värde</td>
                        <td>44 600:-</td>
                    </tr>
                    <tr>
                        <td>Du investerar</td>
                        <td>20 000:-</td>
                    </tr>
                    <tr>
                        <td>Du sparar</td>
                        <td>24 600:-</td>
                    </tr>
                </Table>
            </section>
            <PaymentOptions>
                <article>
                    <h3>Betalningsalternativ 1</h3>
                    <div className="icon">
                        <i className="bx bx-credit-card"></i>
                    </div>
                    <p>Engångsbetalning 6000 kr</p>
                    <a
                        href="https://dothingsyourway.thrivecart.com/stressfrihet-intro/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Button>Ja, jag vill investera i mig själv!</Button>
                    </a>
                </article>
                <article>
                    <h3>Betalningsalternativ 2</h3>
                    <div className="icon">
                        <i className="bx bx-credit-card"></i>
                    </div>
                    <p>3 delbetalningar á 2200 kr (totalt 6600 kr)</p>
                    <a
                        href="https://dothingsyourway.thrivecart.com/stressfrihet-intro/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Button>Ja, jag vill investera i mig själv!</Button>
                    </a>
                </article>
            </PaymentOptions>
        </Wrapper>
    );
}

const Wrapper = styled.section`
    padding-block-end: var(--spacing-xl);
    background-color: var(--color-white-secondary);

    & > *:not(:first-child) {
        max-width: var(--max-width);
        margin-inline: auto;
        padding-inline: 1rem;
    }

    & h2 {
        text-align: center;
        margin-bottom: var(--spacing-medium);
        color: var(--color-secondary-darkest);
    }
`;

const List = styled.ul`
    color: var(--color-secondary-darkest);
    list-style: none;
    font-family: var(--font-primary-thin);
    margin-inline: auto;
    width: 100%;
    max-width: 1000px;
    display: grid;
    grid-column-gap: 3rem;
    grid-row-gap: var(--spacing-medium);
    grid-template-columns: repeat(2, 1fr);
    margin-bottom: var(--spacing-xl);

    @media (max-width: 1000px) {
        grid-template-columns: 1fr;
        max-width: 560px;
    }

    & li {
        position: relative;

        &::before {
            content: "🧡";
            font-size: 1.4rem;
            position: absolute;
            left: -2rem;
            top: -2px;
        }
    }
`;

const Table = styled.table`
    border-spacing: 0;
    border-radius: 1rem;
    overflow: hidden;
    margin-inline: auto;
    width: 100%;
    max-width: 600px;
    color: var(--color-secondary-darkest);
    box-shadow: 0 0.25rem 0.5rem #6f371e26;
    margin-block-end: var(--spacing-xl);

    & tr,
    td,
    th {
        padding: 1.5rem 3rem;

        @media (max-width: 700px) {
            padding: 1rem 2rem;
        }
    }

    & th {
        font-size: var(--font-md);
        color: var(--color-white);
        text-transform: uppercase;
        letter-spacing: 2px;
        font-family: var(--font-secondary);
        background-color: var(--color-secondary-dark);
    }

    & tr:not(:last-child) {
        & td {
            border-bottom: 1px solid var(--color-secondary-light);
        }
    }

    & tr:last-child {
        & td {
            border-top: 1px solid var(--color-secondary-light);
            background-color: var(--color-secondary-light);
            font-weight: bold;
        }
    }
`;

const PaymentOptions = styled.section`
    display: flex;
    justify-content: space-around;

    & article {
        border-radius: 1rem;
        color: var(--color-black);
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #eef0ef94;
        flex-basis: 40%;
        box-shadow: 0 0.25rem 0.5rem #6f371e26;
        padding-block-end: 3rem;

        & > *:not(:first-child) {
            padding: 0 2rem;
        }

        & > :first-child {
            background-color: var(--color-primary-dark);
            color: var(--color-white);
            text-align: center;
            width: 100%;
            padding: 1.5rem 2rem;
            border-radius: 1rem 1rem 0 0;
            margin-bottom: 1rem;
        }

        & h3 {
            font-size: var(--font-md);
        }

        & .icon {
            color: var(--color-primary);
            opacity: 0.8;
            font-size: 6rem;
        }
    }
`;

export default Offer;
