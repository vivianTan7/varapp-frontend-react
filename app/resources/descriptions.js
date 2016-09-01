
const DESC = {
    "chrom": "The chromosome on which the variant resides (VCF CHROM field).",
    "start": "The 1-based start position. (VCF POS field).",
    "end": "The 1-based end position. (VCF POS field, yet inferred based on the size of the variant).",
    "ref": "Reference allele (VCF REF field).",
    "alt": "Alternate allele for the variant (VCF ALT field).",
    "quality": "Quality score for the assertion made in ALT (VCF QUAL field).",
    "pass_filter": "Quality filters passed/failed in variant calling (VCF FILTER field).",
    "gene": "The gene symbol (not unique). Clicking on it opens a lookup window that shows the unique gene identifiers.",
    "ensembl_gene_id": "The gene ID in Ensembl.",
    "entrez_gene_id": "The gene ID in Entrez (NCBI).",
    "genotypes": "A view of the genotype of each selected sample.",
    "source": "In the case of a compound, shows which of the parents is the source of the mutation.",
    "dbsnp": "The ID of the variant in dbSNP.",
    "qual_depth": "Variant confidence or quality by depth.",
    "read_depth": "The number of aligned sequence reads that led to this variant call.",
    "fisher_strand_bias": "Fisher strand bias (phred-scaled) at the variant position (VCF FS field).",
    "rms_map_qual": "Root Mean Square of the mapping quality of reads across all samples.",
    "aa_change": "Change in amino-acid (ref/alt).",
    "impact": "Predicted impact of the variant on the protein structure.",
    "aaf_1kg_all": "Frequency of the variant in the 1000 Genomes database.",
    "aaf_esp_all": "Frequency of the variant in the ESP database",
    "aaf_exac_all": "Frequency of the variant in the EXAC database",
    "aaf_max_all": "The maximum of all frequencies across 1KG, ESP and EXAC databases, in all subpopulations.",
    "cadd_raw": "Raw CADD scores for scoring deleteriousness of SNV’s in the human genome.",
    "cadd_scaled": "Scaled CADD scores (Phred-like) for scoring deleteriousness of SNV’s.",
    "clinvar_sig": "The clinical significance scores for each of the variant according to ClinVar.",
    "clinvar_disease_acc": "Clinvar variant accession.",
    "gerp_bp_score": "GERP conservation score.",
    "gerp_element_pval": "GERP elements P-value.",
    "polyphen_pred": "Polyphen prediction of pathogenicity.",
    "polyphen_score": "Polyphen score reflecting severity.",
    "sift_pred": "SIFT prediction of pathogenicity.",
    "sift_score": "SIFT prob. scores reflecting severity.",
    "gq_mean": "Mean of genotype qualities. Describes how sure we are that we have the right genotype, in average over all samples.",
    "gq_stdev": "Standard deviation of genotype qualities.",
    "base_qual_rank_sum": "Z-score from Wilcoxon rank sum test for base qualities (bases supporting REF vs. bases supporting ALT).",
    "map_qual_rank_sum": "Z-score From Wilcoxon rank sum test for mapping qualities (quality of reads supporting REF vs. quality of reads supporting ALT).",
    "read_pos_rank_sum": "Z-score From Wilcoxon rank sum test for site position within reads (position within reads supporting REF vs. position within reads supporting ALT).",
    "strand_bias_odds_ratio": "Symmetric Odds Ratio of 2x2 contingency table to detect strand bias.",
    "allele_count": "Total number of times this allele appears across all samples (VCF AC field).",
    "allele_freq": "Allele frequency across all samples (VCF AF field)."
};

module.exports = DESC;
